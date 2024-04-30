import env from "./env.ts";
/**
 * Determine whether this process is inside Heroku.
 * 
 * > **🛡️ Permissions**
 * >
 * > | **Target** | **Type** | **Coverage** |
 * > |:--|:--|:--|
 * > | Deno | Environment Variable (`allow-env`) | `DYNO` |
 * > | Deno | Environment Variable (`allow-env`) | `HEROKU` |
 * > | Deno | Environment Variable (`allow-env`) | `HOME` |
 * @returns {boolean} Determine result.
 */
export function isEnvironmentHeroku(): boolean {
	return (
		env.has("HEROKU") ||
		(env.has("DYNO") && env.get("HOME") === "/app")
	);
}
export default isEnvironmentHeroku;
