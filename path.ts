import { addEnvDelimitation, getEnvDelimitation } from "./_delimitation.ts";
/**
 * Add value to the environment variable `PATH`.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 * >   - `PATH`
 * @param {...string} paths
 * @returns {void}
 */
export function addPATH(...paths: string[]): void {
	addEnvDelimitation("PATH", ...paths);
}
/**
 * Get values of the environment variable `PATH`.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 * >   - `PATH`
 * @returns {string[]} Values of the environment variable `PATH`.
 */
export function getPATH(): string[] {
	return getEnvDelimitation("PATH");
}
