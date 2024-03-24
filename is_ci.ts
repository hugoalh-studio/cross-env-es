import env from "./env.ts";
const regexpEnvFalsy = /^(?:0|false)$/i;
/**
 * Determine whether this process is in CI (Continuous Integration) mode.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 * @returns {boolean} Determine result.
 */
export function isEnvironmentCI(): boolean {
	const envCIShort: string | undefined = env.get("CI");
	if (typeof envCIShort !== "undefined" && !regexpEnvFalsy.test(envCIShort)) {
		return true;
	}
	const envCILong: string | undefined = env.get("CONTINUOUS_INTEGRATION");
	if (typeof envCILong !== "undefined" && !regexpEnvFalsy.test(envCILong)) {
		return true;
	}
	return Object.entries(env.getAll()).some(([key, value]: [string, string]): boolean => {
		return (key.startsWith("CI_") && !regexpEnvFalsy.test(value));
	});
}
export default isEnvironmentCI;
