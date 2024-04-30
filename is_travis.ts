import env from "./env.ts";
import { isEnvironmentCI } from "./is_ci.ts";
/**
 * Determine whether this process is inside Travis.
 * 
 * > **🛡️ Permissions**
 * >
 * > | **Target** | **Type** | **Coverage** |
 * > |:--|:--|:--|
 * > | Deno | Environment Variable (`allow-env`) | All |
 * @returns {boolean} Determine result.
 */
export function isEnvironmentTravis(): boolean {
	return (isEnvironmentCI() && env.has("TRAVIS"));
}
export default isEnvironmentTravis;
