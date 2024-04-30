import env from "./env.ts";
/**
 * Determine whether this process is inside [Hyper](https://hyper.is).
 * 
 * > **🛡️ Permissions**
 * >
 * > | **Target** | **Type** | **Coverage** |
 * > |:--|:--|:--|
 * > | Deno | Environment Variable (`allow-env`) | `TERM_PROGRAM` |
 * @returns {boolean} Determine result.
 */
export function isEnvironmentHyper(): boolean {
	const value: string | undefined = env.get("TERM_PROGRAM");
	return (
		value === "Hyper" ||
		value === "HyperTerm"
	);
}
export default isEnvironmentHyper;
