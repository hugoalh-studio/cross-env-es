import { delimiter as pathDelimiter } from "node:path";
import env from "./env.ts";
/**
 * Join the environment variable value with inter handle of the operate system specific delimiter.
 * @access private
 * @param {Set<string>} item
 * @returns {string}
 */
function joinEnvDelimitation(item: Set<string>): string {
	return Array.from<string>(item.values()).join(pathDelimiter);
}
/**
 * Split the environment variable value with inter handle of the operate system specific delimiter.
 * @access private
 * @param {string} item
 * @returns {Set<string>}
 */
function splitEnvDelimitation(item: string): Set<string> {
	return new Set<string>(item.split(pathDelimiter).map<string>((value: string): string => {
		return value.trim();
	}).filter((value: string): boolean => {
		return (value.length > 0);
	}));
}
/**
 * Add value to an environment variable with inter handle of the operate system specific delimiter.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 * @param {string} key Key of the environment variable.
 * @param {...string} values
 * @returns {void}
 */
export function addEnvDelimitation(key: string, ...values: string[]): void {
	const targetValues: Set<string> = splitEnvDelimitation(env.get(key) ?? "");
	for (const value of values) {
		targetValues.add(value);
	}
	env.set(key, joinEnvDelimitation(targetValues));
}
/**
 * Get the value of an environment variable with inter handle of the operate system specific delimiter.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 * @param {string} key Key of the environment variable.
 * @returns {string[]} Values of the environment variable.
 */
export function getEnvDelimitation(key: string): string[] {
	return Array.from<string>(splitEnvDelimitation(env.get(key) ?? "").values());
}
