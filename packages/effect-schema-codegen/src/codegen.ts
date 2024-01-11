import * as AST from "@effect/schema/AST";
import * as Function from "effect/Function";
import * as Match from "effect/Match";
import * as Option from "effect/Option";
import * as Predicate from "effect/Predicate";
import * as ReadonlyArray from "effect/ReadonlyArray";
import * as String from "effect/String";
import * as Traverse from "./traverse.js";

export const codegen = (
    ast: AST.AST,
    schemaModuleImportIdentifier: string = "S",
    indentationSize: number = 2
): string => {
    const partitions: ReadonlyArray.NonEmptyReadonlyArray<Traverse.Partition> = Traverse.partition(ast);

    const codegen_ = (ast_: AST.AST, generateInnerSuspends: boolean): string => {
        // Short circuit base case
        if (Traverse.isBoundary(ast_) && !AST.isSuspend(ast_)) {
            return AST.getIdentifierAnnotation(ast_).pipe(Option.getOrThrow);
        }

        return Function.pipe(
            Match.value(ast_),
            // ---------------------------------------------
            // Trivial cases
            // We abuse the fact that the Schema module exports functions with the same name as the title tags for these nodes
            // ---------------------------------------------
            Match.whenOr(
                AST.isAnyKeyword,
                AST.isVoidKeyword,
                AST.isNeverKeyword,
                AST.isNumberKeyword,
                AST.isStringKeyword,
                AST.isObjectKeyword,
                AST.isBooleanKeyword,
                AST.isUnknownKeyword,
                AST.isUndefinedKeyword,
                Function.compose(AST.getTitleAnnotation, Option.getOrThrow)
            ),
            Match.when(AST.isBigIntKeyword, () => "bigintFromSelf"),
            Match.when(AST.isSymbolKeyword, () => "symbolFromSelf"),
            // ---------------------------------------------
            // Non-trivial cases (we will use the codegen annotation to help us most of the time)
            // ---------------------------------------------
            Match.when(AST.isLiteral, ({ literal }) => {
                if (Predicate.isString(literal)) return `literal("${literal}")`;
                else if (Predicate.isBigInt(literal)) return `literal(${literal}n)`;
                else return `literal(${literal})`;
            }),
            Match.when(AST.isTransform, () => {
                // const maybeCodegenAnnotation = AST.getCodegenAnnotation(ast_);
                // if (Option.isNone(maybeCodegenAnnotation)) {
                //     throw new Error("Can not codegen a transform without a codegen annotation");
                // }
                // return maybeCodegenAnnotation.value;
                throw new Error("can not codegen a transform");
            }),
            Match.when(AST.isUniqueSymbol, ({ symbol: _symbol }) => {
                const maybeVariableName = AST.getIdentifierAnnotation(ast_);
                if (Option.isNone(maybeVariableName)) {
                    throw new Error("Can not codegen a unique symbol without an identifier annotation");
                }
                return `uniqueSymbol(${maybeVariableName.value})`;
            }),
            Match.when(AST.isDeclaration, () => "declaration"),
            Match.when(AST.isTemplateLiteral, () => "templateLiteral"),
            Match.when(AST.isEnums, ({ enums: _enums }) => "enums"),
            Match.when(AST.isRefinement, () => {
                if (AST.getTitleAnnotation(ast_).pipe(Option.isSome)) {
                    return `${AST.getTitleAnnotation(ast_).pipe(Option.getOrThrow)}`;
                }
                return `unknown`;
            }),
            // ---------------------------------------------
            // Recursive cases
            // ---------------------------------------------
            Match.when(AST.isSuspend, ({ f }) => {
                const maybeIdentifierAnnotation = AST.getIdentifierAnnotation(ast_);
                if (Option.isNone(maybeIdentifierAnnotation)) {
                    throw new Error("Can not codegen a suspend without an identifier annotation");
                }

                return generateInnerSuspends
                    ? `suspend(() => ${maybeIdentifierAnnotation.value})`
                    : codegen_(f(), true);
            }),
            Match.when(AST.isUnion, (union) => {
                const nested = union.types.map((_) => codegen_(_, generateInnerSuspends));
                return `union(${nested.join(", ")})`;
            }),
            Match.when(AST.isTuple, (tuple) => {
                if (tuple.elements.length > 0) {
                    return `tuple()`;
                }
                const nestedRest = Option.getOrThrow(tuple.rest).map((_) => codegen_(_, generateInnerSuspends));
                return `array(${nestedRest.join(", ")})`;
            }),
            Match.when(AST.isTypeLiteral, ({ indexSignatures: _indexSignatures, propertySignatures }) => {
                const asts = propertySignatures.map((property) => ({
                    property,
                    code: codegen_(property.type, generateInnerSuspends),
                }));

                const allFields = asts.flatMap(
                    ({ code, property }) =>
                        `/** ${Option.getOrUndefined(AST.getDescriptionAnnotation(property.type))} */\n${
                            property.name.toString().includes(".") || property.name.toString().includes("-")
                                ? `"${property.name.toString()}"`
                                : property.name.toString()
                        }: ${code}`
                );

                const a = [...String.linesIterator(allFields.join(",\n"))]
                    .map((x) => `${" ".repeat(indentationSize)}${x}`)
                    .join("\n");
                return `struct({\n${a}\n})`;
            }),
            Match.exhaustive,
            (code) => `${schemaModuleImportIdentifier}.${code}`
        );
    };

    const output = partitions
        .flatMap((partition) =>
            partition.map(
                (ast, _index, array) => `export const ${ast.identifier} = ${codegen_(ast.ast, array.length === 1)}`
            )
        )
        .join("\n\n");

    // const hoistedValues = traverseToBoundries(ast).pipe(
    //   Stream.filterMap((node) => {
    //     if (isUniqueSymbol(node)) {
    //       const variableName = getIdentifierAnnotation(node).pipe(Option.getOrThrow)
    //       return Option.some(`export const ${variableName} = Symbol.for("${node.symbol.description}")`)
    //     }
    //     return Option.none()
    //   }),
    //   Stream.runCollect,
    //   Effect.runSync,
    //   Chunk.join("\n\n")
    // )

    // return String.isEmpty(hoistedValues) ? output : `${hoistedValues}\n\n${output}`
    return `import * as ${schemaModuleImportIdentifier} from "effect/schema/Schema"\n\n${output}`;
};
