# effect-schema-codegen

Migration and codegen utilities for @effect/schema

## Problem trying to solve

You already have a schema defined for your project, but are interested in using @effect/schema for your single source of truth! Manually converting large schemas can be cumbersome and tiring, wouldn't it be great if you could generate a starting point for your @effect/schema based on your current definitions?

## Other possible solutions explored

Why not implement this using [swagger-codegen](https://github.com/swagger-api/swagger-codegen) or [openapi-generator](https://github.com/OpenAPITools/openapi-generator)? I tried, but I found it difficult to handle all the edge cases using just string manipulation and their types, for example with swagger-codegen, don't always translate well to effect types. Instead, my approach is to parse the desired input to an @effect/schema AST (which proved much easier), then just let the effect-schema-codegen package handle generating the TS code from an @effect/schema AST.

## Example migrating the Moby project's swagger2.0 document to an effect schema

The Moby projects swagger2.0 document is over 10K lines full of documentation, types, routes, and examples that I would like to have in one of [my projects](https://github.com/leonitousconforti/the-moby-effect) as an @effect/schema. Let's see how we can migrate their swagger2.0 document

## Goals :white_check_mark:

- migrate json schemas to effect schemas
- migrate swagger2 documents to effect schemas
- In general, focusing on *migration* and building a strong starting point for your @effect/schema rather than on-the-fly-conversion/generation

## Non-Goals :wastebasket:

- While the effect-schema-codegen package might work with any AST you throw at it, it is really designed to support ASTs generated from other schema types like json or swagger documents. These other schema formats can't support the more complex features of @effect/schema, so most of the time I pretend like they are there. For example, it will throw an error if you give it an AST transform node without an identifier annotation. This is intention. I have some ideas about how it could generate the correct code for an arbitrary transform node but thats not the point of the project. Non of these migrators are meant to be used like EffectSchema->OtherSchemaType->EffectSchema, they are just meant to assist with the initial migration from OtherSchema->EffectSchema

## Todo/Future :bulb:

- I am personally interested in a prisma migrator, so I will be working on that

## Compatibility :closed_lock_with_key:

Until @effect/schema is stable, the packages here will be peered to exact versions of @effect/schema. I feel like this makes the most sense right now since my codegen implementations heavily rely on the internals of @effect/schema and @effect/schema is a constantly moving target where breaking changes are released all the time. I will try to keep up to date with @effect/schema

## Contributing and getting help :speech_balloon: :beers:

Contributions, suggestions, and questions are welcome! I'll review prs and respond to issues/discussion here on GitHub but if you want more synchronous communication you can find me in the [effect discord](https://discord.gg/effect-ts) as @leonitous
