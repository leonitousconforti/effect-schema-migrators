import * as Schema from "@effect/schema/Schema";
import * as Codegen from "../src/codegen.js";

describe("AST/codegen", () => {
    it("any", () => {
        const schema = Schema.any;
        expect(Codegen.codegen(schema.ast)).toEqual('import * as S from "effect/schema/Schema"\n\nS.any');
    });

    it("void", () => {
        const schema = Schema.void;
        expect(Codegen.codegen(schema.ast)).toEqual("S.void");
    });

    it("never", () => {
        const schema = Schema.never;
        expect(Codegen.codegen(schema.ast)).toEqual("S.never");
    });

    it("bigint", () => {
        const schema = Schema.bigint;
        expect(Codegen.codegen(schema.ast)).toEqual("S.bigint");
    });

    it("number", () => {
        const schema = Schema.number;
        expect(Codegen.codegen(schema.ast)).toEqual("S.number");
    });

    it("string", () => {
        const schema = Schema.string;
        expect(Codegen.codegen(schema.ast)).toEqual("S.string");
    });

    it("Object", () => {
        const schema = Schema.object;
        expect(Codegen.codegen(schema.ast)).toEqual("S.object");
    });

    it("symbol", () => {
        const schema = Schema.symbol;
        expect(Codegen.codegen(schema.ast)).toEqual("S.symbol");
    });

    it("boolean", () => {
        const schema = Schema.boolean;
        expect(Codegen.codegen(schema.ast)).toEqual("S.boolean");
    });

    it("unknown", () => {
        const schema = Schema.unknown;
        expect(Codegen.codegen(schema.ast)).toEqual("S.unknown");
    });

    it("undefined", () => {
        const schema = Schema.undefined;
        expect(Codegen.codegen(schema.ast)).toEqual("S.undefined");
    });

    it("null", () => {
        const schema = Schema.null;
        expect(Codegen.codegen(schema.ast)).toEqual("S.literal(null)");
    });

    it("literal string", () => {
        const schema = Schema.literal("foo");
        expect(Codegen.codegen(schema.ast)).toEqual('S.literal("foo")');
    });

    it("literal number", () => {
        const schema = Schema.literal(42);
        expect(Codegen.codegen(schema.ast)).toEqual("S.literal(42)");
    });

    it("literal boolean", () => {
        const schema = Schema.literal(true);
        expect(Codegen.codegen(schema.ast)).toEqual("S.literal(true)");
    });

    it("literal bigint", () => {
        const schema = Schema.literal(42n);
        expect(Codegen.codegen(schema.ast)).toEqual("S.literal(42n)");
    });

    it("literal null", () => {
        // eslint-disable-next-line unicorn/no-null
        const schema = Schema.literal(null);
        expect(Codegen.codegen(schema.ast)).toEqual("S.literal(null)");
    });

    it("symbol from self", () => {
        const schema = Schema.symbolFromSelf;
        expect(Codegen.codegen(schema.ast)).toEqual("S.symbolFromSelf");
    });

    it("bigint from self", () => {
        const schema = Schema.bigintFromSelf;
        expect(Codegen.codegen(schema.ast)).toEqual("S.bigintFromSelf");
    });

    it("unique symbol", () => {
        const schema = Schema.uniqueSymbol(Symbol.for("foo")).pipe(Schema.identifier("foo"));
        expect(Codegen.codegen(schema.ast)).toEqual(`export const foo = Symbol.for("foo")\n\nS.uniqueSymbol(foo)`);
    });

    it.only("should codegen mutually suspended schemas", () => {
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
        // console.log(code)
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
