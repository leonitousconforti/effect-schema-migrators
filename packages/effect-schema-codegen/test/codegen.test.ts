import * as Schema from "@effect/schema/Schema";
import * as Codegen from "../src/codegen.js";

describe("AST/codegen", () => {
    it("any", () => {
        const schema = Schema.any.pipe(Schema.identifier("A"));
        const code = 'import * as S from "effect/schema/Schema"\n\nexport const A = S.any';
        expect(Codegen.codegen(schema.ast)).toEqual(code);
    });

    it("void", () => {
        const schema = Schema.void.pipe(Schema.identifier("A"));
        const code = 'import * as S from "effect/schema/Schema"\n\nexport const A = S.void';
        expect(Codegen.codegen(schema.ast)).toEqual(code);
    });

    it("never", () => {
        const schema = Schema.never.pipe(Schema.identifier("A"));
        const code = 'import * as S from "effect/schema/Schema"\n\nexport const A = S.never';
        expect(Codegen.codegen(schema.ast)).toEqual(code);
    });

    it.skip("bigint", () => {
        const schema = Schema.bigint.pipe(Schema.identifier("A"));
        const code = 'import * as S from "effect/schema/Schema"\n\nexport const A = S.bigint';
        expect(Codegen.codegen(schema.ast)).toEqual(code);
    });

    it("number", () => {
        const schema = Schema.number.pipe(Schema.identifier("A"));
        const code = 'import * as S from "effect/schema/Schema"\n\nexport const A = S.number';
        expect(Codegen.codegen(schema.ast)).toEqual(code);
    });

    it("string", () => {
        const schema = Schema.string.pipe(Schema.identifier("A"));
        const code = 'import * as S from "effect/schema/Schema"\n\nexport const A = S.string';
        expect(Codegen.codegen(schema.ast)).toEqual(code);
    });

    it("Object", () => {
        const schema = Schema.object.pipe(Schema.identifier("A"));
        const code = 'import * as S from "effect/schema/Schema"\n\nexport const A = S.object';
        expect(Codegen.codegen(schema.ast)).toEqual(code);
    });

    it.skip("symbol", () => {
        const schema = Schema.symbol.pipe(Schema.identifier("A"));
        const code = 'import * as S from "effect/schema/Schema"\n\nexport const A = S.symbol';
        expect(Codegen.codegen(schema.ast)).toEqual(code);
    });

    it("boolean", () => {
        const schema = Schema.boolean.pipe(Schema.identifier("A"));
        const code = 'import * as S from "effect/schema/Schema"\n\nexport const A = S.boolean';
        expect(Codegen.codegen(schema.ast)).toEqual(code);
    });

    it("unknown", () => {
        const schema = Schema.unknown.pipe(Schema.identifier("A"));
        const code = 'import * as S from "effect/schema/Schema"\n\nexport const A = S.unknown';
        expect(Codegen.codegen(schema.ast)).toEqual(code);
    });

    it("undefined", () => {
        const schema = Schema.undefined.pipe(Schema.identifier("A"));
        const code = 'import * as S from "effect/schema/Schema"\n\nexport const A = S.undefined';
        expect(Codegen.codegen(schema.ast)).toEqual(code);
    });

    it("null", () => {
        const schema = Schema.null.pipe(Schema.identifier("A"));
        const code = 'import * as S from "effect/schema/Schema"\n\nexport const A = S.literal(null)';
        expect(Codegen.codegen(schema.ast)).toEqual(code);
    });

    it("literal string", () => {
        const schema = Schema.literal("foo").pipe(Schema.identifier("A"));
        const code = 'import * as S from "effect/schema/Schema"\n\nexport const A = S.literal("foo")';
        expect(Codegen.codegen(schema.ast)).toEqual(code);
    });

    it("literal number", () => {
        const schema = Schema.literal(42).pipe(Schema.identifier("A"));
        const code = 'import * as S from "effect/schema/Schema"\n\nexport const A = S.literal(42)';
        expect(Codegen.codegen(schema.ast)).toEqual(code);
    });

    it("literal boolean", () => {
        const schema = Schema.literal(true).pipe(Schema.identifier("A"));
        const code = 'import * as S from "effect/schema/Schema"\n\nexport const A = S.literal(true)';
        expect(Codegen.codegen(schema.ast)).toEqual(code);
    });

    it("literal bigint", () => {
        const schema = Schema.literal(42n).pipe(Schema.identifier("A"));
        const code = 'import * as S from "effect/schema/Schema"\n\nexport const A = S.literal(42n)';
        expect(Codegen.codegen(schema.ast)).toEqual(code);
    });

    it("literal null", () => {
        // eslint-disable-next-line unicorn/no-null
        const schema = Schema.literal(null).pipe(Schema.identifier("A"));
        const code = 'import * as S from "effect/schema/Schema"\n\nexport const A = S.literal(null)';
        expect(Codegen.codegen(schema.ast)).toEqual(code);
    });

    it("symbol from self", () => {
        const schema = Schema.symbolFromSelf.pipe(Schema.identifier("A"));
        const code = 'import * as S from "effect/schema/Schema"\n\nexport const A = S.symbolFromSelf';
        expect(Codegen.codegen(schema.ast)).toEqual(code);
    });

    it("bigint from self", () => {
        const schema = Schema.bigintFromSelf.pipe(Schema.identifier("A"));
        const code = 'import * as S from "effect/schema/Schema"\n\nexport const A = S.bigintFromSelf';
        expect(Codegen.codegen(schema.ast)).toEqual(code);
    });

    it("unique symbol", () => {
        const schema = Schema.uniqueSymbol(Symbol.for("foo")).pipe(Schema.identifier("foo"));
        const code =
            'import * as S from "effect/schema/Schema"\n\nexport const foo = Symbol.for("foo")\n\nexport const foo = S.uniqueSymbol(foo)';
        expect(Codegen.codegen(schema.ast)).toEqual(code);
    });

    it("should codegen mutually suspended schemas", () => {
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

        const code = Codegen.codegen(Expression.ast);
        expect(code).toEqual(`import * as S from "effect/schema/Schema"

export const Operation = S.S.struct({
  /** undefined */
  type: S.literal("operation"),
  /** undefined */
  operator: S.union(S.literal("+"), S.literal("-")),
  /** undefined */
  left: S.suspend(() => Expression),
  /** undefined */
  right: S.suspend(() => Expression)
})

export const Expression = S.S.struct({
  /** undefined */
  type: S.literal("expression"),
  /** undefined */
  value: S.union(S.suspend(() => Operation), S.unknown)
})`);
    });
});
