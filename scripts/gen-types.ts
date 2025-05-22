// scripts/gen-types.ts
import { writeFileSync } from "fs";
import sdk from "@prisma/sdk";
const { getDMMF } = sdk;


const outputPath = "./typings.d.ts";

(async () => {
	const dmmf = await getDMMF({
		datamodel: (
			await import("fs")
		).readFileSync("prisma/schema.prisma", "utf-8"),
	});

	const models = dmmf.datamodel.models;

	const lines = [`// AUTO-GENERATED FILE — DO NOT EDIT\n`];

	for (const model of models) {
		lines.push(`export interface ${model.name} {`);
		for (const field of model.fields) {
			const optional = field.isRequired ? "" : "?";
			const type = mapPrismaTypeToTS(field.type, field.isList);
			lines.push(`  ${field.name}${optional}: ${type};`);
		}
		lines.push(`}\n`);
	}

	writeFileSync(outputPath, lines.join("\n"), "utf-8");
	console.log(`✅ Prisma model interfaces generated in ${outputPath}`);
})();

function mapPrismaTypeToTS(type: string, isList: boolean): string {
	const map: Record<string, string> = {
		String: "string",
		Int: "number",
		Boolean: "boolean",
		Float: "number",
		DateTime: "Date",
		Json: "any",
	};

	const tsType = map[type] || type;
	return isList ? `${tsType}[]` : tsType;
}
