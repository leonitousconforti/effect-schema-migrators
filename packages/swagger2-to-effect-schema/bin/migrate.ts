#!/usr/bin/env node

import * as Cli from "@effect/cli";
import * as PlatformNode from "@effect/platform-node";
import * as JsonSchema from "@effect/schema/JSONSchema";
import * as Schema from "@effect/schema/Schema";
import * as Codegen from "effect-schema-codegen";
import * as Effect from "effect/Effect";

import { decodeSingleSchema } from "json-schema-to-effect-schema";
import packageJson from "../package.json" assert { type: "json" };

const command = Cli.Command.make(
    "json-schema-to-effect-schema",
    {
        file: Cli.Args.file({ exists: "yes" }),
        indentationSize: Cli.Options.integer("indentationSize").pipe(Cli.Options.withDefault(2)),
        schemaModuleImportIdentifier: Cli.Options.text("schemaModuleImportIdentifier").pipe(
            Cli.Options.withDefault("S")
        ),
    },
    ({ file, indentationSize, schemaModuleImportIdentifier }) =>
        Effect.gen(function* (_: Effect.Adapter) {
            const fs = yield* _(PlatformNode.FileSystem.FileSystem);

            const data = yield* _(fs.readFileString(file));
            const json: Record<string, unknown> = JSON.parse(data) as Record<string, unknown>;
            const definitions = json["definitions"] as Record<string, JsonSchema.JsonSchema7>;
            const jsonSchema7: JsonSchema.JsonSchema7Root = {
                $defs: definitions,
                oneOf: Object.keys(definitions).map((key) => ({ $ref: `#/$defs/${key}` })),
            } as JsonSchema.JsonSchema7Root;

            const test = Codegen.codegen(
                decodeSingleSchema(jsonSchema7).pipe(Schema.identifier("testing")).ast,
                schemaModuleImportIdentifier,
                indentationSize
            );

            // const schemaEntries = Object.entries(decodeMultiSchema(jsonSchema7));
            // const schemas = schemaEntries
            //     .map(([definitionName, schema]) => ({
            //         name: definitionName,
            //         code: Codegen.codegen(
            //             schema.pipe(Schema.identifier(definitionName)).ast,
            //             schemaModuleImportIdentifier,
            //             indentationSize
            //         ),
            //     }))
            // .map(({ code, name }) =>
            //     code.startsWith("S.struct")
            //         ? `export class ${name} extends S.Class<${name}>()${code.slice("S.struct".length)} {}`
            //         : `export const ${name} = ${code}`
            // )
            // .map(({ code }) => code)
            // .join("\n\n");

            const importHeader = `import * as ${schemaModuleImportIdentifier} from "@effect/schema/Schema"\n\n`;
            yield* _(fs.writeFileString("./schema.ts", importHeader + test));
        })
);

const cli = Cli.Command.run(command, {
    name: "json-schema-to-effect-schema",
    version: packageJson.version,
});

Effect.suspend(() => cli(process.argv.slice(2))).pipe(
    Effect.provide(PlatformNode.NodeContext.layer),
    PlatformNode.Runtime.runMain
);
