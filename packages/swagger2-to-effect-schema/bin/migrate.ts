#!/usr/bin/env node

import * as Cli from "@effect/cli";
import * as PlatformNode from "@effect/platform-node";
import * as JsonSchema from "@effect/schema/JSONSchema";
import * as Codegen from "effect-schema-codegen";
import * as Effect from "effect/Effect";

import { version } from "../package.json";
import { decodeMultiSchema } from "../src/index.js";

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
            const jsonSchema7: JsonSchema.JsonSchema7Root = JSON.parse(data) as unknown as JsonSchema.JsonSchema7Root;
            const schemaEntries = Object.entries(decodeMultiSchema(jsonSchema7));

            const schemas = schemaEntries
                .map(([definitionName, schema]) => ({
                    name: definitionName,
                    code: Codegen.codegen(schema.ast, schemaModuleImportIdentifier, indentationSize),
                }))
                .map(({ code, name }) =>
                    code.startsWith("S.struct")
                        ? `export class ${name} extends S.Class<${name}>()${code.slice("S.struct".length)} {}`
                        : `export const ${name} = ${code}`
                )
                .join("\n\n");

            const importHeader = `import * as ${schemaModuleImportIdentifier} from "../src/Schema.js"\n\n`;
            yield* _(fs.writeFileString("./bin/test.ts", importHeader + schemas));
        })
);

const cli = Cli.Command.run(command, {
    name: "json-schema-to-effect-schema",
    version,
});

Effect.suspend(() => cli(process.argv.slice(2))).pipe(
    Effect.provide(PlatformNode.NodeContext.layer),
    PlatformNode.Runtime.runMain
);
