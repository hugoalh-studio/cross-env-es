import { getEnv, hasEnv } from "./env.ts";
/**
 * Determine whether this process is inside Heroku.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 * >   - `DYNO`
 * >   - `HEROKU`
 * >   - `HOME`
 * @returns {boolean} Determine result.
 */
export function isEnvironmentHeroku(): boolean {
	return (
		hasEnv("HEROKU") ||
		(hasEnv("DYNO") && getEnv("HOME") === "/app")
	);
}
export default isEnvironmentHeroku;
