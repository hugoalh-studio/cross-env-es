import process from "node:process";
/**
 * Delete an environment variable.
 * @param {string} key
 * @returns {void}
 */
export function deleteEnv(key: string): void {
	if (typeof Deno !== "undefined") {
		return Deno.env.delete(key);
	}
	process.env[key] = undefined;
}
/**
 * Get a snapshot of the environment variables at invocation as a simple object of keys and values.
 * @returns {{ [key: string]: string; }}
 */
export function getAllEnv(): { [key: string]: string; } {
	if (typeof Deno !== "undefined") {
		return Deno.env.toObject();
	}
	const result: { [key: string]: string; } = {};
	for (const [key, value] of Object.entries(process.env)) {
		if (typeof value !== "undefined") {
			result[key] = value;
		}
	}
	return result;
}
/**
 * Get the value of an environment variable.
 * @param {string} key
 * @returns {string | undefined}
 */
export function getEnv(key: string): string | undefined {
	if (typeof Deno !== "undefined") {
		return Deno.env.get(key);
	}
	return process.env[key];
}
/**
 * Check whether an environment variable is present.
 * @param {string} key
 * @returns {boolean}
 */
export function hasEnv(key: string): boolean {
	if (typeof Deno !== "undefined") {
		return Deno.env.has(key);
	}
	return (typeof process.env[key] !== "undefined");
}
/**
 * Set an environment variable.
 * @param {string} key
 * @param {string} value
 * @returns {void}
 */
export function setEnv(key: string, value: string): void {
	if (typeof Deno !== "undefined") {
		return Deno.env.set(key, value);
	}
	process.env[key] = value;
}
