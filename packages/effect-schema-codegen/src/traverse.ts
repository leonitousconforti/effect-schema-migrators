import * as AST from "@effect/schema/AST";
import * as Function from "effect/Function";
import * as Option from "effect/Option";
import * as Predicate from "effect/Predicate";
import * as ReadonlyArray from "effect/ReadonlyArray";

/**
 * A core part of generating TS code from the AST is being able to walk/traverse
 * the AST - after all, we need to know what the AST looks like in order to
 * generate the code. Since the AST can be circular, traversing the AST
 * unconstrained becomes unsafe and can lead to infinite loops. To avoid this,
 * we define "boundaries" in the AST. A boundary is a node in the AST where,
 * once "crossed", it is possible to reference a previously visited node. If you
 * follow the rules of TS, it is currently only possible to create this type of
 * circular reference using a suspend node so that becomes our base boundary
 * case. We will also define an additional boundary case, when a node has an
 * identifier annotation, which will come in handy later.
 */
export const isBoundary: Predicate.Predicate<AST.AST> = Predicate.some([
    AST.isSuspend,
    Function.compose(AST.getIdentifierAnnotation, Option.isSome),
]);

/**
 * Safely walks as far as it can through the AST which means stopping at suspend
 * nodes and nodes with an identifier annotation. Additionally, the "perimeter"
 * nodes can be omitted from the returned nodes using a flag
 */
export const traverseToBoundaries = (
    ast: AST.AST,
    options?: { ignoreTopLevelIdentifierBoundary?: boolean | undefined } | undefined
): ReadonlyArray<AST.AST> => {
    const traverseToBoundaries_ = (ast_: AST.AST): ReadonlyArray<AST.AST> => {
        const atTopLevel: boolean = ast_ === ast;
        const isIdentifierBoundary: boolean = isBoundary(ast_) && !AST.isSuspend(ast_);
        const skipTopLevelIdentifierBoundary: boolean = options?.ignoreTopLevelIdentifierBoundary ?? false;
        const selfEmit: AST.AST[] = isIdentifierBoundary && atTopLevel && skipTopLevelIdentifierBoundary ? [] : [ast_];

        if (
            (isIdentifierBoundary && !atTopLevel) ||
            (isIdentifierBoundary && atTopLevel && !skipTopLevelIdentifierBoundary)
        ) {
            return [ast_];
        }

        switch (ast_._tag) {
            // ---------------------------------------------
            // Trivial/base cases
            // ---------------------------------------------
            case "Literal":
            case "UniqueSymbol":
            case "UndefinedKeyword":
            case "VoidKeyword":
            case "NeverKeyword":
            case "UnknownKeyword":
            case "AnyKeyword":
            case "StringKeyword":
            case "NumberKeyword":
            case "BooleanKeyword":
            case "BigIntKeyword":
            case "SymbolKeyword":
            case "ObjectKeyword":
            case "Enums":
            case "TemplateLiteral": {
                return selfEmit;
            }
            // ---------------------------------------------
            // Non-trivial cases
            // ---------------------------------------------
            case "Transform": {
                return [...selfEmit, ...traverseToBoundaries_(ast_.from), ...traverseToBoundaries_(ast_.to)];
            }
            // ---------------------------------------------
            // Recursive cases
            // ---------------------------------------------
            case "Declaration": {
                const selfArray: AST.AST[] = [...selfEmit, ...traverseToBoundaries_(ast_.type)];
                const parameterArrays: AST.AST[] = ast_.typeParameters.flatMap(traverseToBoundaries_);
                return [...selfArray, ...parameterArrays];
            }
            case "Refinement": {
                return [...selfEmit, ...traverseToBoundaries_(ast_.from)];
            }
            case "Tuple": {
                const elementArrays: AST.AST[] = ast_.elements.flatMap(({ type }) => traverseToBoundaries_(type));
                const restArrays: AST.AST[] = Option.map(ast_.rest, ReadonlyArray.flatMap(traverseToBoundaries_)).pipe(
                    Option.getOrElse(() => [])
                );
                return [...selfEmit, ...elementArrays, ...restArrays];
            }
            case "Union": {
                const innerTypesArray: AST.AST[] = ast_.types.flatMap(traverseToBoundaries_);
                return [...selfEmit, ...innerTypesArray];
            }
            case "TypeLiteral": {
                const indexSignatureArrays: AST.AST[] = ast_.indexSignatures.flatMap(({ type }) =>
                    traverseToBoundaries_(type)
                );
                const propertySignatureArrays: AST.AST[] = ast_.propertySignatures.flatMap(({ type }) =>
                    traverseToBoundaries_(type)
                );
                return [...selfEmit, ...indexSignatureArrays, ...propertySignatureArrays];
            }
            // ---------------------------------------------
            // DANGER CASE: traversing the `f` function could result in infinite recursion
            // ---------------------------------------------
            case "Suspend": {
                return selfEmit;
            }
        }
    };

    return traverseToBoundaries_(ast);
};

/**
 * Retrieves all nodes that are interior nodes between this section of an ast
 * and other sections. Answers the question: "what nodes are part of the current
 * boundary section?"
 */
export const getInteriorNodes = (
    ast: AST.AST,
    options?: { ignoreTopLevelIdentifierBoundary?: boolean | undefined }
): ReadonlyArray<AST.AST> => [
    ...(options?.ignoreTopLevelIdentifierBoundary && isBoundary(ast) && !AST.isSuspend(ast) ? [ast] : []),
    ...traverseToBoundaries(ast, options).filter(Predicate.not(isBoundary)),
];

/**
 * Retrieves all nodes that are boundary nodes between this section of an ast
 * and other sections. Answers the question: "what are the boundary nodes at the
 * edge of the current boundary section?"
 */
export const getPerimeterNodes = (ast: AST.AST): ReadonlyArray<AST.AST> =>
    Function.pipe(
        traverseToBoundaries(ast, { ignoreTopLevelIdentifierBoundary: true }),
        ReadonlyArray.filter(isBoundary),
        ReadonlyArray.dedupeWith((a, b) => a === b)
    );

/** Attempts to cross over a boundary node into the other section of the ast */
export const crossBoundary = (ast: AST.AST): AST.AST => (AST.isSuspend(ast) ? ast.f() : ast);

/** Safely retrieves all nodes in the ast by traversing boundaries only once */
export const getAllVertices = (ast: AST.AST): Set<AST.AST> => {
    const vertices: Set<AST.AST> = new Set();

    const vertices_ = (ast_: AST.AST): void => {
        for (const vertex of getPerimeterNodes(ast_)) {
            vertices.add(vertex);
        }
        for (const vertex of getInteriorNodes(ast_, { ignoreTopLevelIdentifierBoundary: true })) {
            vertices.add(vertex);
        }

        const boundariesGoingToCrossInto: AST.AST[] = Function.pipe(
            getPerimeterNodes(ast_),
            ReadonlyArray.map(crossBoundary),
            ReadonlyArray.filter((boundary) => !vertices.has(boundary))
        );

        for (const nextBoundary of boundariesGoingToCrossInto) {
            vertices_(nextBoundary);
        }
    };

    vertices_(ast);
    return vertices;
};

/**
 * Determines if any lower section of the ast refers to anything in this
 * boundary section. Answers the question: "Are there any nodes in lower
 * sections of the ast that refer to anything in this boundary section?"
 */
export const isSelfReferential = (ast: AST.AST): boolean => {
    const visitedBoundaries: Set<AST.AST> = new Set([ast]);
    const interiorNodes: ReadonlyArray<AST.AST> = isBoundary(ast) ? [crossBoundary(ast)] : getInteriorNodes(ast);

    const isSelfReferential_ = (ast_: AST.AST): boolean => {
        // eslint-disable-next-line unicorn/prefer-array-flat-map
        const boundariesGoingToCrossInto: AST.AST[] = ReadonlyArray.map(getPerimeterNodes(ast_), crossBoundary).flat();

        // Base case when this ast does not have any boundaries that it will cross
        if (boundariesGoingToCrossInto.length === 0) {
            return false;
        }

        // Recursive case and we found an interior node from the starting ast
        if (boundariesGoingToCrossInto.some((boundary) => interiorNodes.includes(boundary))) {
            return true;
        }

        // Recursive case but we haven't found an interior node yet
        const boundariesStillNeedToTraverse: AST.AST[] = boundariesGoingToCrossInto.filter(
            (node) => !visitedBoundaries.has(node)
        );
        for (const nextBoundary of boundariesStillNeedToTraverse) {
            visitedBoundaries.add(nextBoundary);
        }
        return boundariesStillNeedToTraverse.some(isSelfReferential_);
    };

    return isSelfReferential_(ast);
};

/**
 * Retrieves the set of nodes that are strongly connected to this node as well
 * as the set of nodes that are not strongly connected
 *
 * @see https://en.wikipedia.org/wiki/Strongly_connected_component
 * @see https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm
 */
export const stronglyConnectedComponents = (
    ast: AST.AST
): ReadonlyArray.NonEmptyReadonlyArray<ReadonlyArray.NonEmptyReadonlyArray<AST.AST>> => {
    let index: number = 0;
    const stack: Array<AST.AST> = [];
    const onStack: Map<AST.AST, boolean> = new Map<AST.AST, boolean>();
    const indices: Map<AST.AST, number> = new Map<AST.AST, number>();
    const lowLinks: Map<AST.AST, number> = new Map<AST.AST, number>();
    const stronglyConnected: Array<ReadonlyArray.NonEmptyReadonlyArray<AST.AST>> = [];

    const tarjan = (vertex: AST.AST): void => {
        indices.set(vertex, index);
        lowLinks.set(vertex, index);
        index += 1;
        stack.push(vertex);
        onStack.set(vertex, true);

        const boundariesGoingToCrossInto: ReadonlyArray<AST.AST> = getPerimeterNodes(
            isBoundary(vertex) ? crossBoundary(vertex) : vertex
        );

        for (const nextBoundary of boundariesGoingToCrossInto) {
            if (indices.get(nextBoundary) === undefined) {
                tarjan(nextBoundary);
                lowLinks.set(vertex, Math.min(lowLinks.get(vertex)!, lowLinks.get(nextBoundary)!));
            } else if (onStack.get(nextBoundary)) {
                lowLinks.set(vertex, Math.min(lowLinks.get(vertex)!, indices.get(nextBoundary)!));
            }
        }

        if (lowLinks.get(vertex) === indices.get(vertex)) {
            const generating: Array<AST.AST> = [];
            let nextVertex: AST.AST;
            do {
                nextVertex = stack.pop()!;
                onStack.set(nextVertex, false);
                generating.push(nextVertex);
            } while (nextVertex !== vertex);
            stronglyConnected.push(generating as ReadonlyArray.NonEmptyArray<AST.AST>);
        }
    };

    for (const vertex of getAllVertices(ast)) {
        if (indices.get(vertex) === undefined) {
            tarjan(vertex);
        }
    }

    return stronglyConnected as unknown as ReadonlyArray.NonEmptyReadonlyArray<
        ReadonlyArray.NonEmptyReadonlyArray<AST.AST>
    >;
};

/** A partition is a group of self referential sub trees */
export type Partition = ReadonlyArray.NonEmptyReadonlyArray<{
    readonly ast: AST.AST;
    readonly identifier: string;
}>;

/**
 * Depending on if this ast is self referential or not will determine how we
 * treat boundaries. For self referential schemas, boundaries will be defined at
 * the top level so we want to include them in the sub-partitions. For non-self
 * referential schemas, boundaries will be defined at the inner level, so we
 * want to exclude them from the sub-partitions.
 */
export const partition = (ast: AST.AST): ReadonlyArray.NonEmptyReadonlyArray<Partition> => {
    const interiorNodes: ReadonlyArray<AST.AST> = isBoundary(ast) ? [ast] : getInteriorNodes(ast);

    const topLevelStronglyConnected: ReadonlyArray.NonEmptyReadonlyArray<Partition> = Function.pipe(
        stronglyConnectedComponents(ast),
        ReadonlyArray.filter(
            (stronglyConnectedComponent) =>
                (stronglyConnectedComponent.some((node) => isSelfReferential(node)) &&
                    stronglyConnectedComponent.some((node) => AST.isSuspend(node))) ||
                stronglyConnectedComponent.some((node) => interiorNodes.includes(node)) ||
                (stronglyConnectedComponent.length === 1 && AST.isSuspend(stronglyConnectedComponent[0]))
        ),
        (_) => _ as unknown as ReadonlyArray.NonEmptyReadonlyArray<ReadonlyArray.NonEmptyReadonlyArray<AST.AST>>,
        ReadonlyArray.map((stronglyConnectedComponent) =>
            stronglyConnectedComponent.length === 1 &&
            AST.isSuspend(stronglyConnectedComponent[0]) &&
            !isSelfReferential(stronglyConnectedComponent[0].f())
                ? ([
                      {
                          ast: stronglyConnectedComponent[0].f(),
                          identifier: AST.getIdentifierAnnotation(stronglyConnectedComponent[0].f()).pipe(
                              Option.getOrElse(() =>
                                  AST.getIdentifierAnnotation(stronglyConnectedComponent[0]).pipe(Option.getOrThrow)
                              )
                          ),
                      },
                  ] as Partition)
                : ReadonlyArray.map(stronglyConnectedComponent, (ast) => ({
                      ast,
                      identifier: AST.getIdentifierAnnotation(ast).pipe(Option.getOrThrow),
                  }))
        ),
        ReadonlyArray.dedupeWith(
            (a, b) =>
                a.length === 1 &&
                b.length === 1 &&
                a[0].ast._tag === b[0].ast._tag &&
                a[0].identifier === b[0].identifier
        )
    );

    return topLevelStronglyConnected;
};
