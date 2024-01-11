import * as Schema from "@effect/schema/Schema";
import * as Traverse from "../src/traverse.js";

describe("AST/traverseToBoundaries", () => {
    it("should traverse 'primitives'", () => {
        expect(Traverse.traverseToBoundaries(Schema.literal(1).ast)).toHaveLength(1);
        expect(Traverse.traverseToBoundaries(Schema.uniqueSymbol(Symbol.for("foo")).ast)).toHaveLength(1);
        expect(Traverse.traverseToBoundaries(Schema.undefined.ast)).toHaveLength(1);
        expect(Traverse.traverseToBoundaries(Schema.void.ast)).toHaveLength(1);
        expect(Traverse.traverseToBoundaries(Schema.never.ast)).toHaveLength(1);
        expect(Traverse.traverseToBoundaries(Schema.unknown.ast)).toHaveLength(1);
        expect(Traverse.traverseToBoundaries(Schema.any.ast)).toHaveLength(1);
        expect(Traverse.traverseToBoundaries(Schema.string.ast)).toHaveLength(1);
        expect(Traverse.traverseToBoundaries(Schema.number.ast)).toHaveLength(1);
        expect(Traverse.traverseToBoundaries(Schema.boolean.ast)).toHaveLength(1);
        expect(Traverse.traverseToBoundaries(Schema.bigintFromSelf.ast)).toHaveLength(1);
        expect(Traverse.traverseToBoundaries(Schema.symbolFromSelf.ast)).toHaveLength(1);
        expect(Traverse.traverseToBoundaries(Schema.object.ast)).toHaveLength(1);
        expect(Traverse.traverseToBoundaries(Schema.enums({ foo: "foo", bar: "bar" }).ast)).toHaveLength(1);
    });

    it("Should traverse non 'primitives'", () => {
        expect(Traverse.traverseToBoundaries(Schema.tuple(Schema.string, Schema.number).ast)).toHaveLength(3);
        expect(Traverse.traverseToBoundaries(Schema.array(Schema.string).ast)).toHaveLength(2);
        expect(Traverse.traverseToBoundaries(Schema.nullable(Schema.string).ast)).toHaveLength(3);
        expect(Traverse.traverseToBoundaries(Schema.record(Schema.string, Schema.number).ast)).toHaveLength(2);
        expect(Traverse.traverseToBoundaries(Schema.union(Schema.string, Schema.number).ast)).toHaveLength(3);
    });

    it("Should traverse outer suspended schemas", () => {
        const suspendedSchema = Schema.suspend(() => Schema.unknown);
        expect(Traverse.traverseToBoundaries(suspendedSchema.ast)).toHaveLength(1);
        expect(
            Traverse.traverseToBoundaries(suspendedSchema.ast, { ignoreTopLevelIdentifierBoundary: true })
        ).toHaveLength(1);
    });

    it("Should traverse inner suspended schemas", () => {
        const suspendedSchema = Schema.struct({ foo: Schema.suspend(() => Schema.unknown) });
        expect(Traverse.traverseToBoundaries(suspendedSchema.ast)).toHaveLength(2);
        expect(
            Traverse.traverseToBoundaries(suspendedSchema.ast, { ignoreTopLevelIdentifierBoundary: true })
        ).toHaveLength(2);
    });

    it("Should traverse schemas with identifier annotations", () => {
        const annotatedSchema = Schema.unknown.pipe(Schema.identifier("Foo"));
        expect(Traverse.traverseToBoundaries(annotatedSchema.ast)).toHaveLength(1);
        expect(
            Traverse.traverseToBoundaries(annotatedSchema.ast, { ignoreTopLevelIdentifierBoundary: true })
        ).toHaveLength(0);
    });

    // FIXME: this is a bit weird right now
    it("Should traverse class schemas", () => {
        class A extends Schema.Class<A>()({
            a: Schema.unknown,
        }) {}
        // expect(Traverse.traverseToBoundaries(A.ast)).toHaveLength(1);
        // expect(Traverse.traverseToBoundaries(A.ast, { ignoreTopLevelIdentifierBoundary: true })).toHaveLength(7);
        expect(Traverse.traverseToBoundaries(A.ast)).toHaveLength(8);
        expect(Traverse.traverseToBoundaries(A.ast, { ignoreTopLevelIdentifierBoundary: true })).toHaveLength(8);
    });
});

describe("AST/getInteriorNodes", () => {
    it("should get interior nodes of 'primitives'", () => {
        expect(Traverse.getInteriorNodes(Schema.literal(1).ast)).toHaveLength(1);
        expect(Traverse.getInteriorNodes(Schema.uniqueSymbol(Symbol.for("foo")).ast)).toHaveLength(1);
        expect(Traverse.getInteriorNodes(Schema.undefined.ast)).toHaveLength(1);
        expect(Traverse.getInteriorNodes(Schema.void.ast)).toHaveLength(1);
        expect(Traverse.getInteriorNodes(Schema.never.ast)).toHaveLength(1);
        expect(Traverse.getInteriorNodes(Schema.unknown.ast)).toHaveLength(1);
        expect(Traverse.getInteriorNodes(Schema.any.ast)).toHaveLength(1);
        expect(Traverse.getInteriorNodes(Schema.string.ast)).toHaveLength(1);
        expect(Traverse.getInteriorNodes(Schema.number.ast)).toHaveLength(1);
        expect(Traverse.getInteriorNodes(Schema.boolean.ast)).toHaveLength(1);
        expect(Traverse.getInteriorNodes(Schema.bigintFromSelf.ast)).toHaveLength(1);
        // expect(Traverse.getInteriorNodes(Schema.symbolFromSelf.ast)).toHaveLength(1);
        // expect(Traverse.getInteriorNodes(Schema.object.ast)).toHaveLength(1);
        expect(Traverse.getInteriorNodes(Schema.enums({ foo: "foo", bar: "bar" }).ast)).toHaveLength(1);
    });

    it("Should get interior nodes of non 'primitives'", () => {
        expect(Traverse.getInteriorNodes(Schema.tuple(Schema.string, Schema.number).ast)).toHaveLength(3);
        expect(Traverse.getInteriorNodes(Schema.array(Schema.string).ast)).toHaveLength(2);
        expect(Traverse.getInteriorNodes(Schema.nullable(Schema.string).ast)).toHaveLength(2);
        expect(Traverse.getInteriorNodes(Schema.record(Schema.string, Schema.number).ast)).toHaveLength(2);
        expect(Traverse.getInteriorNodes(Schema.union(Schema.string, Schema.number).ast)).toHaveLength(3);
    });

    it("Should get interior nodes of outer suspended schemas", () => {
        const suspendedSchema = Schema.suspend(() => Schema.unknown);
        expect(Traverse.getInteriorNodes(suspendedSchema.ast)).toHaveLength(0);
    });

    it("Should get interior nodes of inner suspended schemas", () => {
        const suspendedSchema = Schema.struct({ foo: Schema.suspend(() => Schema.unknown) });
        expect(Traverse.getInteriorNodes(suspendedSchema.ast)).toEqual([suspendedSchema.ast]);
    });

    it("Should get interior nodes of schemas with identifier annotations", () => {
        const annotatedSchema = Schema.unknown.pipe(Schema.identifier("Foo"));
        expect(Traverse.getInteriorNodes(annotatedSchema.ast)).toHaveLength(0);
    });

    // FIXME: this is a bit weird right now
    it("Should get interior nodes of class schemas", () => {
        class A extends Schema.Class<A>()({
            a: Schema.unknown,
        }) {}
        // expect(Traverse.getInteriorNodes(A.ast)).toHaveLength(0);
        expect(Traverse.getInteriorNodes(A.ast)).toHaveLength(8);
    });
});

describe("AST/getPerimeterNodes", () => {
    it("should get perimeter nodes of 'primitives'", () => {
        expect(Traverse.getPerimeterNodes(Schema.literal(1).ast)).toHaveLength(0);
        expect(Traverse.getPerimeterNodes(Schema.uniqueSymbol(Symbol.for("foo")).ast)).toHaveLength(0);
        expect(Traverse.getPerimeterNodes(Schema.undefined.ast)).toHaveLength(0);
        expect(Traverse.getPerimeterNodes(Schema.void.ast)).toHaveLength(0);
        expect(Traverse.getPerimeterNodes(Schema.never.ast)).toHaveLength(0);
        expect(Traverse.getPerimeterNodes(Schema.unknown.ast)).toHaveLength(0);
        expect(Traverse.getPerimeterNodes(Schema.any.ast)).toHaveLength(0);
        expect(Traverse.getPerimeterNodes(Schema.string.ast)).toHaveLength(0);
        expect(Traverse.getPerimeterNodes(Schema.number.ast)).toHaveLength(0);
        expect(Traverse.getPerimeterNodes(Schema.boolean.ast)).toHaveLength(0);
        expect(Traverse.getPerimeterNodes(Schema.bigintFromSelf.ast)).toHaveLength(0);
        expect(Traverse.getPerimeterNodes(Schema.symbolFromSelf.ast)).toHaveLength(0);
        expect(Traverse.getPerimeterNodes(Schema.object.ast)).toHaveLength(0);
        expect(Traverse.getPerimeterNodes(Schema.enums({ foo: "foo", bar: "bar" }).ast)).toHaveLength(0);
    });

    it("Should get perimeter nodes of non 'primitives'", () => {
        expect(Traverse.getPerimeterNodes(Schema.tuple(Schema.string, Schema.number).ast)).toHaveLength(0);
        expect(Traverse.getPerimeterNodes(Schema.array(Schema.string).ast)).toHaveLength(0);
        expect(Traverse.getPerimeterNodes(Schema.nullable(Schema.string).ast)).toHaveLength(1);
        expect(Traverse.getPerimeterNodes(Schema.record(Schema.string, Schema.number).ast)).toHaveLength(0);
        expect(Traverse.getPerimeterNodes(Schema.union(Schema.string, Schema.number).ast)).toHaveLength(0);
    });

    it("Should get perimeter nodes of outer suspended schemas", () => {
        const suspendedSchema = Schema.suspend(() => Schema.unknown);
        expect(Traverse.getPerimeterNodes(suspendedSchema.ast)).toHaveLength(1);
    });

    it("Should get perimeter nodes of inner suspended schemas", () => {
        const suspendedSchema = Schema.struct({ foo: Schema.suspend(() => Schema.unknown) });
        expect(Traverse.getPerimeterNodes(suspendedSchema.ast)).toHaveLength(1);
    });

    it("Should get perimeter nodes of schemas with identifier annotations", () => {
        const annotatedSchema = Schema.unknown.pipe(Schema.identifier("Foo"));
        expect(Traverse.getPerimeterNodes(annotatedSchema.ast)).toHaveLength(0);
    });

    it("Should get perimeter nodes of schemas with multiple different boundaries", () => {
        const schema = Schema.struct({
            foo: Schema.suspend(() => Schema.unknown),
            bar: Schema.suspend(() => Schema.unknown),
            baz: Schema.suspend(() => Schema.unknown),
        });
        expect(Traverse.getPerimeterNodes(schema.ast)).toHaveLength(3);
    });

    it("Should get perimeter nodes of schemas with multiple same boundaries", () => {
        const suspendedSchema = Schema.suspend(() => Schema.unknown);
        const schema = Schema.struct({
            foo: suspendedSchema,
            bar: suspendedSchema,
            baz: suspendedSchema,
        });
        expect(Traverse.getPerimeterNodes(schema.ast)).toHaveLength(1);
    });

    it("Should get perimeter nodes of schemas with multiple same boundaries and identifiers", () => {
        const suspendedSchema = Schema.suspend(() => Schema.unknown).pipe(Schema.identifier("b"));
        const schema = Schema.struct({
            foo: suspendedSchema.pipe(Schema.identifier("A")),
            bar: suspendedSchema,
            baz: suspendedSchema,
        });
        expect(Traverse.getPerimeterNodes(schema.ast)).toHaveLength(2);
    });

    it("Should get perimeter nodes of class schemas", () => {
        class A extends Schema.Class<A>()({
            a: Schema.unknown,
        }) {}
        expect(Traverse.getPerimeterNodes(A.ast)).toHaveLength(0);
    });

    it("Should get perimeter nodes of class schemas 2", () => {
        class A extends Schema.Class<A>()({
            a: Schema.unknown,
            b: Schema.unknown.pipe(Schema.identifier("B")),
        }) {}
        expect(Traverse.getPerimeterNodes(A.ast)).toHaveLength(1);
    });
});

describe("AST/getAllVertices", () => {
    it("should get all vertices of 'primitives'", () => {
        expect(Traverse.getAllVertices(Schema.literal(1).ast).size).toEqual(1);
        expect(Traverse.getAllVertices(Schema.uniqueSymbol(Symbol.for("foo")).ast).size).toEqual(1);
        expect(Traverse.getAllVertices(Schema.undefined.ast).size).toEqual(1);
        expect(Traverse.getAllVertices(Schema.void.ast).size).toEqual(1);
        expect(Traverse.getAllVertices(Schema.never.ast).size).toEqual(1);
        expect(Traverse.getAllVertices(Schema.unknown.ast).size).toEqual(1);
        expect(Traverse.getAllVertices(Schema.any.ast).size).toEqual(1);
        expect(Traverse.getAllVertices(Schema.string.ast).size).toEqual(1);
        expect(Traverse.getAllVertices(Schema.number.ast).size).toEqual(1);
        expect(Traverse.getAllVertices(Schema.boolean.ast).size).toEqual(1);
        expect(Traverse.getAllVertices(Schema.bigintFromSelf.ast).size).toEqual(1);
        expect(Traverse.getAllVertices(Schema.symbolFromSelf.ast).size).toEqual(1);
        expect(Traverse.getAllVertices(Schema.object.ast).size).toEqual(1);
        expect(Traverse.getAllVertices(Schema.enums({ foo: "foo", bar: "bar" }).ast).size).toEqual(1);
    });

    it("Should get all vertices of non 'primitives'", () => {
        expect(Traverse.getAllVertices(Schema.tuple(Schema.string, Schema.number).ast).size).toEqual(3);
        expect(Traverse.getAllVertices(Schema.array(Schema.string).ast).size).toEqual(2);
        expect(Traverse.getAllVertices(Schema.nullable(Schema.string).ast).size).toEqual(3);
        expect(Traverse.getAllVertices(Schema.record(Schema.string, Schema.number).ast).size).toEqual(2);
        expect(Traverse.getAllVertices(Schema.union(Schema.string, Schema.number).ast).size).toEqual(3);
    });

    it("Should get all vertices of outer suspended schemas", () => {
        const suspendedSchema = Schema.suspend(() => Schema.unknown);
        expect(Traverse.getAllVertices(suspendedSchema.ast).size).toEqual(2);
    });

    it("Should get all vertices of inner suspended schemas", () => {
        const suspendedSchema = Schema.struct({ foo: Schema.suspend(() => Schema.unknown) });
        expect(Traverse.getAllVertices(suspendedSchema.ast).size).toEqual(3);
    });

    it("Should get all vertices of schemas with identifier annotations", () => {
        const annotatedSchema = Schema.unknown.pipe(Schema.identifier("Foo"));
        expect(Traverse.getAllVertices(annotatedSchema.ast).size).toEqual(1);
    });

    it("Should get all vertices of schemas with multiple different boundaries", () => {
        const schema = Schema.struct({
            foo: Schema.suspend(() => Schema.unknown),
            bar: Schema.suspend(() => Schema.unknown),
            baz: Schema.suspend(() => Schema.unknown),
        });
        expect(Traverse.getAllVertices(schema.ast).size).toEqual(5);
    });

    it("Should get all vertices of schemas with multiple same boundaries", () => {
        const suspendedSchema = Schema.suspend(() => Schema.unknown);
        const schema = Schema.struct({
            foo: suspendedSchema,
            bar: suspendedSchema,
            baz: suspendedSchema,
        });
        expect(Traverse.getAllVertices(schema.ast).size).toEqual(3);
    });

    it("Should get all vertices of schemas with multiple same boundaries and identifiers", () => {
        const suspendedSchema = Schema.suspend(() => Schema.unknown).pipe(Schema.identifier("b"));
        const schema = Schema.struct({
            foo: suspendedSchema.pipe(Schema.identifier("A")),
            bar: suspendedSchema,
            baz: suspendedSchema,
        });
        expect(Traverse.getAllVertices(schema.ast).size).toEqual(4);
    });

    it("Should get all vertices of class schemas", () => {
        class A extends Schema.Class<A>()({
            a: Schema.unknown,
        }) {}
        expect(Traverse.getAllVertices(A.ast).size).toEqual(5);
    });
});

// describe("AST/crossBoundary", () => {
//   it("should cross boundary of 'primitives'", () => {
//     expect(AST.crossBoundary(Schema.literal(1).ast)).toEqual(Option.none())
//     expect(AST.crossBoundary(Schema.uniqueSymbol(Symbol.for("foo")).ast)).toEqual(Option.none())
//     expect(AST.crossBoundary(Schema.undefined.ast)).toEqual(Option.none())
//     expect(AST.crossBoundary(Schema.void.ast)).toEqual(Option.none())
//     expect(AST.crossBoundary(Schema.never.ast)).toEqual(Option.none())
//     expect(AST.crossBoundary(Schema.unknown.ast)).toEqual(Option.none())
//     expect(AST.crossBoundary(Schema.any.ast)).toEqual(Option.none())
//     expect(AST.crossBoundary(Schema.string.ast)).toEqual(Option.none())
//     expect(AST.crossBoundary(Schema.number.ast)).toEqual(Option.none())
//     expect(AST.crossBoundary(Schema.boolean.ast)).toEqual(Option.none())
//     expect(AST.crossBoundary(Schema.bigintFromSelf.ast)).toEqual(Option.none())
//     expect(AST.crossBoundary(Schema.symbolFromSelf.ast)).toEqual(Option.none())
//     expect(AST.crossBoundary(Schema.object.ast)).toEqual(Option.none())
//     expect(AST.crossBoundary(Schema.enums({ "foo": "foo", "bar": "bar" }).ast)).toEqual(Option.none())
//   })
// })

describe("AST/isSelfReferential", () => {
    it("basic not self referential", () => {
        expect(Traverse.isSelfReferential(Schema.string.ast)).toBe(false);
    });

    it("not self referential", () => {
        const schema = Schema.struct({ foo: Schema.string, bar: Schema.number });
        const schema2 = Schema.struct({
            foo: Schema.suspend(() => schema).pipe(Schema.identifier("B")),
            bar: Schema.number,
        }).pipe(Schema.identifier("A"));
        expect(Traverse.isSelfReferential(schema2.ast)).toBe(false);
    });

    it("basic self referential", () => {
        interface Expression {
            readonly type: "expression";
            readonly value: number | Operation;
        }

        interface Operation {
            readonly type: "operation";
            readonly operator: "+" | "-";
            readonly left: Expression;
            readonly right: Expression;
        }

        const JsonNumber = Schema.number.pipe(
            Schema.filter((n) => !Number.isNaN(n) && Number.isFinite(n), {
                jsonSchema: { type: "number" },
            })
        );

        const Expression: Schema.Schema<Expression> = Schema.suspend(() =>
            Schema.struct({
                type: Schema.literal("expression"),
                value: Schema.union(JsonNumber, Operation),
            })
        ).pipe(Schema.identifier("Expression"));

        const Operation: Schema.Schema<Operation> = Schema.suspend(() =>
            Schema.struct({
                type: Schema.literal("operation"),
                operator: Schema.union(Schema.literal("+"), Schema.literal("-")),
                left: Expression,
                right: Expression,
            })
        ).pipe(Schema.identifier("Operation"));

        const both = Schema.struct({ foo: Expression, bar: Operation });

        expect(Traverse.isSelfReferential(both.ast)).toBe(false);
        expect(Traverse.isSelfReferential(Operation.ast)).toBe(true);
        expect(Traverse.isSelfReferential(Expression.ast)).toBe(true);
    });

    it("stupid self referential", () => {
        interface schema1 {
            readonly value2: schema2;
        }

        interface schema2 {
            readonly value3: schema3;
        }

        interface schema3 {
            readonly value4: schema4;
        }

        interface schema4 {
            readonly value5: schema5;
        }

        interface schema5 {
            readonly value6: schema6;
        }

        interface schema6 {
            readonly value7: schema7;
        }

        interface schema7 {
            readonly value8: schema8;
        }

        interface schema8 {
            readonly value9: schema9;
        }

        interface schema9 {
            readonly value1: schema1;
        }

        interface schema10 {
            readonly value4: schema4;
        }

        const schema1: Schema.Schema<schema1> = Schema.suspend(() => Schema.struct({ value2: schema2 }));
        const schema2: Schema.Schema<schema2> = Schema.suspend(() => Schema.struct({ value3: schema3 }));
        const schema3: Schema.Schema<schema3> = Schema.suspend(() => Schema.struct({ value4: schema4 }));
        const schema4: Schema.Schema<schema4> = Schema.suspend(() => Schema.struct({ value5: schema5 }));
        const schema5: Schema.Schema<schema5> = Schema.suspend(() => Schema.struct({ value6: schema6 }));
        const schema6: Schema.Schema<schema6> = Schema.suspend(() => Schema.struct({ value7: schema7 }));
        const schema7: Schema.Schema<schema7> = Schema.suspend(() => Schema.struct({ value8: schema8 }));
        const schema8: Schema.Schema<schema8> = Schema.suspend(() => Schema.struct({ value9: schema9 }));
        const schema9: Schema.Schema<schema9> = Schema.suspend(() => Schema.struct({ value1: schema1 }));
        const schema10: Schema.Schema<schema10> = Schema.struct({ value4: schema4 });

        expect(Traverse.isSelfReferential(schema1.ast)).toBe(true);
        expect(Traverse.isSelfReferential(schema2.ast)).toBe(true);
        expect(Traverse.isSelfReferential(schema3.ast)).toBe(true);
        expect(Traverse.isSelfReferential(schema4.ast)).toBe(true);
        expect(Traverse.isSelfReferential(schema5.ast)).toBe(true);
        expect(Traverse.isSelfReferential(schema6.ast)).toBe(true);
        expect(Traverse.isSelfReferential(schema7.ast)).toBe(true);
        expect(Traverse.isSelfReferential(schema8.ast)).toBe(true);
        expect(Traverse.isSelfReferential(schema9.ast)).toBe(true);
        expect(Traverse.isSelfReferential(schema10.ast)).toBe(false);
    });
});

describe("AST/partition", () => {
    it("simplest", () => {
        const schema = Schema.string.pipe(Schema.identifier("A")).ast;
        const partition = [{ identifier: "A", ast: schema }];
        expect(Traverse.partition(schema)).toEqual([partition]);
    });

    it("basic struct", () => {
        const schema = Schema.struct({
            foo: Schema.string,
            bar: Schema.number,
        }).pipe(Schema.identifier("A")).ast;

        const partition = [{ identifier: "A", ast: schema }];
        expect(Traverse.partition(schema)).toEqual([partition]);
    });

    it("one boundary", () => {
        const schema1 = Schema.struct({
            foo: Schema.string,
            bar: Schema.number,
        }).pipe(Schema.identifier("A"));

        const schema2 = Schema.struct({
            foo: Schema.suspend(() => schema1),
            bar: Schema.number,
        }).pipe(Schema.identifier("B"));

        const partition1 = [{ identifier: "A", ast: schema1.ast }];
        const partition2 = [{ identifier: "B", ast: schema2.ast }];
        expect(Traverse.partition(schema1.ast)).toEqual([partition1]);
        expect(Traverse.partition(schema2.ast)).toEqual([partition1, partition2]);
    });

    it("two same boundaries", () => {
        const schema = Schema.struct({
            foo: Schema.string,
            bar: Schema.number,
        }).pipe(Schema.identifier("A"));

        const schema2 = Schema.struct({
            foo: Schema.suspend(() => schema),
            bar: Schema.suspend(() => schema),
        }).pipe(Schema.identifier("B"));

        const partition1 = [{ identifier: "A", ast: schema.ast }];
        const partition2 = [{ identifier: "B", ast: schema2.ast }];
        expect(Traverse.partition(schema2.ast)).toEqual([partition1, partition2]);
    });

    it("two same boundaries different identifiers", () => {
        const schema = Schema.struct({ foo: Schema.string, bar: Schema.number });
        const schema2 = Schema.struct({
            foo: Schema.suspend(() => schema).pipe(Schema.identifier("A")),
            bar: Schema.suspend(() => schema).pipe(Schema.identifier("B")),
        }).pipe(Schema.identifier("C"));
        const partition1 = [{ identifier: "A", ast: schema.ast }];
        const partition2 = [{ identifier: "B", ast: schema.ast }];
        const partition3 = [{ identifier: "C", ast: schema2.ast }];
        expect(Traverse.partition(schema2.ast)).toEqual([partition1, partition2, partition3]);
    });

    it("two same primitive boundaries", () => {
        const schema1 = Schema.string.pipe(Schema.identifier("A"));
        const schema2 = Schema.string.pipe(Schema.identifier("B"));
        const schema3 = Schema.struct({
            foo: Schema.suspend(() => schema1),
            bar: Schema.suspend(() => schema2),
        }).pipe(Schema.identifier("C"));

        const partition1 = [{ identifier: "A", ast: schema1.ast }];
        const partition2 = [{ identifier: "B", ast: schema2.ast }];
        const partition3 = [{ identifier: "C", ast: schema3.ast }];
        expect(Traverse.partition(schema3.ast)).toEqual([partition1, partition2, partition3]);
    });

    it("outer suspended boundary", () => {
        interface A {
            readonly a: string;
            readonly as: ReadonlyArray<A>;
        }
        const schema: Schema.Schema<A> = Schema.suspend(() =>
            Schema.struct({
                a: Schema.string,
                as: Schema.array(schema),
            })
        ).pipe(Schema.identifier("A"));
        const partition1 = [{ identifier: "A", ast: schema.ast }];
        expect(Traverse.partition(schema.ast)).toEqual([partition1]);
    });

    it.skip("inner suspended boundary", () => {
        interface A {
            readonly a: string;
            readonly as: ReadonlyArray<A>;
        }
        const schema: Schema.Schema<A> = Schema.struct({
            a: Schema.string,
            as: Schema.array(Schema.suspend(() => schema).pipe(Schema.identifier("B"))),
        }).pipe(Schema.identifier("A"));
        expect(Traverse.partition(schema.ast)).toEqual([[schema.ast]]);
    });

    it("circular boundaries", () => {
        interface Expression {
            readonly type: "expression";
            readonly value: number | Operation;
        }

        interface Operation {
            readonly type: "operation";
            readonly operator: "+" | "-";
            readonly left: Expression;
            readonly right: Expression;
        }

        const JsonNumber = Schema.number.pipe(
            Schema.filter((n) => !Number.isNaN(n) && Number.isFinite(n), {
                jsonSchema: { type: "number" },
            })
        );

        const Expression: Schema.Schema<Expression> = Schema.suspend(() =>
            Schema.struct({
                type: Schema.literal("expression"),
                value: Schema.union(JsonNumber, Operation),
            })
        ).pipe(Schema.identifier("Expression"));

        const Operation: Schema.Schema<Operation> = Schema.suspend(() =>
            Schema.struct({
                type: Schema.literal("operation"),
                operator: Schema.union(Schema.literal("+"), Schema.literal("-")),
                left: Expression,
                right: Expression,
            })
        ).pipe(Schema.identifier("Operation"));

        const both = Schema.struct({
            foo: Expression,
            bar: Operation,
        }).pipe(Schema.identifier("Both"));

        const partition1 = { identifier: "Expression", ast: Expression.ast };
        const partition2 = { identifier: "Operation", ast: Operation.ast };
        const partition3 = { identifier: "Both", ast: both.ast };
        expect(Traverse.partition(Operation.ast)).toEqual([[partition1, partition2]]);
        expect(Traverse.partition(Expression.ast)).toEqual([[partition2, partition1]]);
        expect(Traverse.partition(both.ast)).toEqual([[partition2, partition1], [partition3]]);
    });
});
