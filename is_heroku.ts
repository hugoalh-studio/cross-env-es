import env from "./env.ts";
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
		env.has("HEROKU") ||
		(env.has("DYNO") && env.get("HOME") === "/app")
	);
}
export default isEnvironmentHeroku;
