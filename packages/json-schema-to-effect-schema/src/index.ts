import * as JsonSchema from "@effect/schema/JSONSchema";
import * as Schema from "@effect/schema/Schema";
import * as Chunk from "effect/Chunk";
import * as Effect from "effect/Effect";
import * as Function from "effect/Function";
import * as Match from "effect/Match";
import * as Predicate from "effect/Predicate";
import * as ReadonlyArray from "effect/ReadonlyArray";
import * as Stream from "effect/Stream";

// TODO: Would be great if I didn't have to redefine this here
const DEFINITION_PREFIX = "#/$defs/";

const isJsonSchema7Any = (schema: JsonSchema.JsonSchema7): schema is JsonSchema.JsonSchema7Any =>
    (schema as unknown as Record<string, unknown>)["$id"] === "/schemas/any";

const isJsonSchema7Unknown = (schema: JsonSchema.JsonSchema7): schema is JsonSchema.JsonSchema7Unknown =>
    (schema as unknown as Record<string, unknown>)["$id"] === "/schemas/unknown";

const isJsonSchema7object = (schema: JsonSchema.JsonSchema7): schema is JsonSchema.JsonSchema7object =>
    (schema as unknown as Record<string, unknown>)["$id"] === "/schemas/object";

const isJsonSchema7Empty = (schema: JsonSchema.JsonSchema7): schema is JsonSchema.JsonSchema7empty =>
    (schema as unknown as Record<string, unknown>)["$id"] === "/schemas/{}";

const isJsonSchema7Ref = (schema: JsonSchema.JsonSchema7): schema is JsonSchema.JsonSchema7Ref =>
    (schema as unknown as Record<string, unknown>)["$ref"] !== undefined;

const isJsonSchema7Const = (schema: JsonSchema.JsonSchema7): schema is JsonSchema.JsonSchema7Const =>
    (schema as unknown as Record<string, unknown>)["const"] !== undefined;

const isJsonSchema7String = (schema: JsonSchema.JsonSchema7): schema is JsonSchema.JsonSchema7String =>
    (schema as unknown as Record<string, unknown>)["type"] === "string";

const isJsonSchema7Number = (schema: JsonSchema.JsonSchema7): schema is JsonSchema.JsonSchema7Number =>
    (schema as unknown as Record<string, unknown>)["type"] === "number";

const isJsonSchema7Integer = (schema: JsonSchema.JsonSchema7): schema is JsonSchema.JsonSchema7Integer =>
    (schema as unknown as Record<string, unknown>)["type"] === "integer";

const isJsonSchema7Boolean = (schema: JsonSchema.JsonSchema7): schema is JsonSchema.JsonSchema7Boolean =>
    (schema as unknown as Record<string, unknown>)["type"] === "boolean";

const isJsonSchema7Array = (schema: JsonSchema.JsonSchema7): schema is JsonSchema.JsonSchema7Array =>
    (schema as unknown as Record<string, unknown>)["type"] === "array";

const isJsonSchema7OneOf = (schema: JsonSchema.JsonSchema7): schema is JsonSchema.JsonSchema7OneOf =>
    (schema as unknown as Record<string, unknown>)["oneOf"] !== undefined;

const isJsonSchema7Enum = (schema: JsonSchema.JsonSchema7): schema is JsonSchema.JsonSchema7Enum =>
    (schema as unknown as Record<string, unknown>)["enum"] !== undefined;

const isJsonSchema7Enums = (schema: JsonSchema.JsonSchema7): schema is JsonSchema.JsonSchema7Enums =>
    (schema as unknown as Record<string, unknown>)["$comment"] === "/schemas/enums";

const isJsonSchema7AnyOf = (schema: JsonSchema.JsonSchema7): schema is JsonSchema.JsonSchema7AnyOf =>
    (schema as unknown as Record<string, unknown>)["anyOf"] !== undefined;

const isJsonSchema7Object = (schema: JsonSchema.JsonSchema7): schema is JsonSchema.JsonSchema7Object =>
    (schema as unknown as Record<string, unknown>)["type"] === "object";

const isJsonSchema7Root = (
    schema: JsonSchema.JsonSchema7 | JsonSchema.JsonSchema7Root
): schema is JsonSchema.JsonSchema7Root => (schema as unknown as Record<string, unknown>)["$defs"] !== undefined;

// Decoding utility types
type UnknownSchema = Schema.Schema<unknown, unknown>;
type UnknownSchemaIdentity = (_: UnknownSchema) => UnknownSchema;

export const traverse = (
    json: JsonSchema.JsonSchema7 | JsonSchema.JsonSchema7Root
): Stream.Stream<never, Error, JsonSchema.JsonSchema7> =>
    Function.pipe(
        Match.value(json),
        Match.whenOr(
            isJsonSchema7Any,
            isJsonSchema7object,
            isJsonSchema7Unknown,
            isJsonSchema7Boolean,
            isJsonSchema7Empty,
            isJsonSchema7Const,
            isJsonSchema7Enum,
            isJsonSchema7Enums,
            isJsonSchema7Number,
            isJsonSchema7Integer,
            isJsonSchema7String,
            isJsonSchema7Ref,
            () => Stream.fromIterable([json])
        ),
        Match.when(isJsonSchema7AnyOf, ({ anyOf }) =>
            Stream.mergeAll([Stream.fromIterable([json]), ...anyOf.map(traverse)], { concurrency: "unbounded" })
        ),
        Match.when(isJsonSchema7OneOf, ({ oneOf }) =>
            Stream.mergeAll([Stream.fromIterable([json]), ...oneOf.map(traverse)], { concurrency: "unbounded" })
        ),
        Match.when(isJsonSchema7Object, ({ additionalProperties, patternProperties, properties }) => {
            const propertiesStream = Stream.mergeAll(Object.values(properties).map(traverse), {
                concurrency: "unbounded",
            });

            const additionalPropertiesStream =
                !Predicate.isBoolean(additionalProperties) && Predicate.isNotUndefined(additionalProperties)
                    ? traverse(additionalProperties)
                    : Stream.empty;

            const patternPropertiesStream =
                patternProperties && Object.keys(patternProperties).length
                    ? Stream.mergeAll(Object.values(patternProperties).map(traverse), { concurrency: "unbounded" })
                    : Stream.empty;

            return Stream.mergeAll(
                [Stream.fromIterable([json]), additionalPropertiesStream, patternPropertiesStream, propertiesStream],
                { concurrency: "unbounded" }
            );
        }),
        Match.when(isJsonSchema7Array, ({ additionalItems, items }) => {
            const additionalItemsStream =
                !Predicate.isBoolean(additionalItems) && Predicate.isNotUndefined(additionalItems)
                    ? traverse(additionalItems)
                    : Stream.empty;

            const itemsStream = Array.isArray(items)
                ? Stream.mergeAll(items.map(traverse), { concurrency: "unbounded" })
                : Predicate.isNotUndefined(items)
                  ? traverse(items)
                  : Stream.empty;

            return Stream.mergeAll([Stream.fromIterable([json]), additionalItemsStream, itemsStream], {
                concurrency: "unbounded",
            });
        }),
        Match.when(isJsonSchema7Root, () => Stream.empty),
        Match.orElse(() => Stream.fail(new Error(`Cannot traverse ${json}`)))
    );

const decodeWithReferences = (
    input: JsonSchema.JsonSchema7,
    references: Record<string, UnknownSchema>
): UnknownSchema =>
    Function.pipe(
        Match.value(input),
        // ---------------------------------------------
        // Trivial cases
        // ---------------------------------------------
        Match.when(isJsonSchema7Any, () => Schema.any),
        Match.when(isJsonSchema7object, () => Schema.object),
        Match.when(isJsonSchema7Unknown, () => Schema.unknown),
        Match.when(isJsonSchema7Boolean, () => Schema.boolean),
        Match.when(isJsonSchema7Empty, () => Schema.struct({})),
        Match.when(isJsonSchema7Const, ({ const: const_ }) => Schema.literal(const_)),
        // ---------------------------------------------
        // Handle enums
        // ---------------------------------------------
        Match.when(isJsonSchema7Enum, ({ enum: enum_ }) =>
            Schema.union(...ReadonlyArray.map(enum_, (a) => Schema.literal(a)))
        ),
        Match.when(isJsonSchema7Enums, ({ oneOf }) =>
            Schema.enums(Object.assign({}, ...oneOf.map(({ const: const_, title }) => ({ [title]: const_ }))))
        ),
        // ---------------------------------------------
        // Handle numeric types
        // ---------------------------------------------
        Match.whenOr(
            isJsonSchema7Number,
            isJsonSchema7Integer,
            ({ exclusiveMaximum: exclusiveMax, exclusiveMinimum: exclusiveMin, maximum: max, minimum: min }) => {
                const number = isJsonSchema7Integer(input) ? Schema.int()(Schema.number) : Schema.number;
                const lessThanOrEqualTo = Predicate.isNullable(min)
                    ? Function.identity
                    : Schema.greaterThanOrEqualTo(min);
                const greaterThanOrEqualTo = Predicate.isNullable(max)
                    ? Function.identity
                    : Schema.lessThanOrEqualTo(max);
                const lessThan = Predicate.isNullable(exclusiveMin)
                    ? Function.identity
                    : Schema.greaterThan(exclusiveMin);
                const greaterThan = Predicate.isNullable(exclusiveMax)
                    ? Function.identity
                    : Schema.lessThan(exclusiveMax);
                return Function.flow(lessThanOrEqualTo, greaterThanOrEqualTo, lessThan, greaterThan)(number);
            }
        ),
        // ---------------------------------------------
        // Handle string types
        // ---------------------------------------------
        Match.when(isJsonSchema7String, ({ description, maxLength, minLength, pattern }) => {
            const withMaxLength = Predicate.isNullable(maxLength) ? Function.identity : Schema.maxLength(maxLength);
            const withMinLength = Predicate.isNullable(minLength) ? Function.identity : Schema.minLength(minLength);
            const withPattern = Predicate.isNullable(pattern) ? Function.identity : Schema.pattern(new RegExp(pattern));
            const withDescription = Predicate.isNullable(description)
                ? Function.identity
                : Schema.description(description);
            return Function.flow(withMaxLength, withMinLength, withPattern, withDescription)(Schema.string);
        }),
        // ---------------------------------------------
        // Handle objects (will do recursive calls for the properties)
        // ---------------------------------------------
        Match.when(isJsonSchema7Object, ({ additionalProperties, patternProperties, properties, required }) => {
            const fields = Object.entries(properties).map(([name, property]) => {
                const isRequired = required.includes(name);
                const decodedProperty = decodeWithReferences(property, references);
                const withOptional = isRequired ? decodedProperty : Schema.optional(decodedProperty, { exact: true }); // FIXME: How do I know if this is "exact" / will it always be "exact" here?
                return [name, withOptional] as const;
            });

            const initialStruct = Schema.struct(Object.fromEntries(fields)) as UnknownSchema;
            const hasPatternProperties =
                Predicate.isNotNullable(patternProperties) && Object.keys(patternProperties).length;
            const hasUnknownAdditionalProperties = additionalProperties === true;
            const hasKnownAdditionalProperties =
                Predicate.isNotUndefined(additionalProperties) &&
                !Predicate.isBoolean(additionalProperties) &&
                Object.keys(additionalProperties).length;

            const withPattern: UnknownSchemaIdentity = hasPatternProperties
                ? (Schema.extend(
                      Schema.record(
                          Schema.string.pipe(Schema.pattern(new RegExp(Object.keys(patternProperties)[0]!))),
                          decodeWithReferences(patternProperties[Object.keys(patternProperties)[0]!], references)
                      )
                  ) as UnknownSchemaIdentity)
                : (Function.identity as UnknownSchemaIdentity);

            const withUnknownAdditional = hasUnknownAdditionalProperties
                ? (Schema.extend(Schema.record(Schema.string, Schema.unknown)) as UnknownSchemaIdentity)
                : (Function.identity as UnknownSchemaIdentity);

            const withKnownAdditional = hasKnownAdditionalProperties
                ? (Schema.extend(
                      Schema.record(Schema.string, decodeWithReferences(additionalProperties, references))
                  ) as UnknownSchemaIdentity)
                : (Function.identity as UnknownSchemaIdentity);

            return Function.flow(withPattern, withUnknownAdditional, withKnownAdditional)(initialStruct);
        }),
        // ---------------------------------------------
        // Handle arrays and tuples (will do recursive call for the inner type)
        // ---------------------------------------------
        Match.when(isJsonSchema7Array, ({ additionalItems, items, maxItems: _maxItems, minItems }) => {
            if (!items) {
                return Schema.tuple();
            }

            const itemsArray = Array.isArray(items) ? items : [items];
            if (Predicate.isUndefined(minItems)) {
                return Schema.array(decodeWithReferences(itemsArray[0], references));
            }

            const [elements, optionalElements] = Function.pipe(
                itemsArray,
                ReadonlyArray.map((a) => decodeWithReferences(a, references)),
                ReadonlyArray.splitAt(minItems ?? 0)
            );

            const applyOptionalElements = Stream.fromIterable(optionalElements).pipe(
                Stream.map(Schema.optionalElement),
                Stream.runFold(
                    Function.identity as (_: Schema.Schema<any, any>) => Schema.Schema<any, any>,
                    (state, a) => Function.compose(state, a)
                ),
                Effect.runSync
            );

            const applyRest: (_: Schema.Schema<any, any>) => Schema.Schema<any, any> =
                additionalItems === true
                    ? Schema.rest(Schema.unknown)
                    : additionalItems
                      ? Schema.rest(decodeWithReferences(additionalItems, references))
                      : Function.identity;

            return Schema.tuple(...elements)
                .pipe(applyOptionalElements)
                .pipe(applyRest);
        }),
        // ---------------------------------------------
        // Handle unions (will do recursive calls for the inner types)
        // ---------------------------------------------
        Match.when(isJsonSchema7AnyOf, ({ anyOf }) =>
            Schema.union(...anyOf.map((x) => decodeWithReferences(x, references)))
        ),
        Match.when(isJsonSchema7OneOf, ({ oneOf }) =>
            Schema.union(...oneOf.map((x) => decodeWithReferences(x, references)))
        ),
        // ---------------------------------------------
        // Handle references
        // ---------------------------------------------
        Match.when(isJsonSchema7Ref, ({ $ref }) => {
            const reference = String($ref.replace(DEFINITION_PREFIX, ""));
            return Schema.identifier(reference)(Schema.suspend(() => references[reference]));
        }),
        // ---------------------------------------------
        // Handle unknowns (malformed json schemas that can't be parsed)
        // ---------------------------------------------
        Match.orElse(() => {
            throw new Error(`Cannot convert ${JSON.stringify(input)} to Effect Schema`);
        }),
        // ---------------------------------------------
        // Add description and example annotations
        // ---------------------------------------------
        (schema) => {
            const record = input as unknown as Record<string, unknown>;
            const withDescription =
                Predicate.isNotNullable(record["description"]) && Predicate.isString(record["description"])
                    ? Schema.description(record["description"])
                    : Function.identity;
            const withExamples =
                Predicate.isNotNullable(record["examples"]) && Predicate.isString(record["examples"])
                    ? Schema.examples([record["examples"]])
                    : Function.identity;

            return Function.flow(withDescription, withExamples)(schema as UnknownSchema);
        }
    );

const getAllReferencedSchemaNames = (schema: JsonSchema.JsonSchema7 | JsonSchema.JsonSchema7Root): Array<string> => {
    const referencesFromTopLevel = traverse(schema);
    const referencesFromDefs = isJsonSchema7Root(schema) ? Object.values(schema.$defs ?? {}).map(traverse) : [];
    const allReferences = Stream.mergeAll([referencesFromTopLevel, ...referencesFromDefs], {
        concurrency: "unbounded",
    });

    return allReferences.pipe(
        Stream.filter(isJsonSchema7Ref),
        Stream.map(({ $ref }) => $ref),
        Stream.runCollect,
        Effect.orDie,
        Effect.runSync,
        Chunk.map((ref) => ref.replace(DEFINITION_PREFIX, "")),
        Chunk.dedupe,
        Chunk.toArray
    );
};

export const decodeMultiSchema = (schema: JsonSchema.JsonSchema7Root): Record<string, UnknownSchema> => {
    const allReferences = getAllReferencedSchemaNames(schema);
    const initialReferences: Record<string, UnknownSchema> = Object.fromEntries(
        allReferences.map((name) => [name, Function.unsafeCoerce(undefined)])
    );

    for (const [name, json] of Object.entries(schema.$defs ?? {})) {
        initialReferences[name] = decodeWithReferences(json, initialReferences);
    }

    return initialReferences;
};

export const decodeSingleSchema = (
    schema: JsonSchema.JsonSchema7Root | JsonSchema.JsonSchema7
): Schema.Schema<unknown, unknown> => {
    // Trivial case when schema is not a root object (shouldn't contain any references since it's not a root schema)
    if (!isJsonSchema7Root(schema)) {
        const allReferences = getAllReferencedSchemaNames(schema);
        if (allReferences.length > 0) {
            throw new Error("Cannot decode a single schema with references");
        }
        return decodeWithReferences(schema, {});
    }

    // Non trivial case when schema is a root object
    const initialReferences = decodeMultiSchema(schema);
    return decodeWithReferences(schema, initialReferences);
};
