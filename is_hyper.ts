import { getEnv } from "./env.ts";
/**
 * Determine whether this process is inside [Hyper](https://hyper.is).
 * 
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 * >   - `TERM_PROGRAM`
 * @returns {boolean} Determine result.
 */
export function isEnvironmentHyper(): boolean {
	const value: string | undefined = getEnv("TERM_PROGRAM");
	return (
		value === "Hyper" ||
		value === "HyperTerm"
	);
}
export default isEnvironmentHyper;
