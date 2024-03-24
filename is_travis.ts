import env from "./env.ts";
import { isEnvironmentCI } from "./is_ci.ts";
/**
 * Determine whether this process is inside Travis.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 * @returns {boolean} Determine result.
 */
export function isEnvironmentTravis(): boolean {
	return (isEnvironmentCI() && env.has("TRAVIS"));
}
export default isEnvironmentTravis;
