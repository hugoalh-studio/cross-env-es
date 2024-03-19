import process from "node:process";
/**
 * Cross runtime environment variables interface.
 */
export class CrossEnv {
	/**
	 * Delete an environment variable.
	 * @param {string} key
	 * @returns {void}
	 */
	static delete(key: string): void {
		if (typeof Deno !== "undefined") {
			return Deno.env.delete(key);
		}
		process.env[key] = undefined;
	}
	/**
	 * Get the value of an environment variable.
	 * @param {string} key
	 * @returns {string | undefined}
	 */
	static get(key: string): string | undefined {
		if (typeof Deno !== "undefined") {
			return Deno.env.get(key);
		}
		return process.env[key];
	}
	/**
	 * Get a snapshot of the environment variables at invocation as a simple object of keys and values.
	 * @returns {{ [key: string]: string; }}
	 */
	static getAll(): { [key: string]: string; } {
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
	 * Check whether an environment variable is present.
	 * @param {string} key
	 * @returns {boolean}
	 */
	static has(key: string): boolean {
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
	static set(key: string, value: string): void {
		if (typeof Deno !== "undefined") {
			return Deno.env.set(key, value);
		}
		process.env[key] = value;
	}
}
export default CrossEnv;
/**
 * Delete an environment variable.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 * @param {string} key Key of the environment variable.
 * @returns {void}
 */
export function deleteEnv(key: string): void {
	return CrossEnv.delete(key);
}
/**
 * Get a snapshot of the environment variables at invocation as a simple object of keys and values.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 * @returns {{ [key: string]: string; }} Snapshot of the environment variables.
 */
export function getAllEnv(): { [key: string]: string; } {
	return CrossEnv.getAll();
}
/**
 * Get the value of an environment variable.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 * @param {string} key Key of the environment variable.
 * @returns {string | undefined} Value of the environment variable.
 */
export function getEnv(key: string): string | undefined {
	return CrossEnv.get(key);
}
/**
 * Check whether an environment variable is present.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 * @param {string} key Key of the environment variable.
 * @returns {boolean} Determine result.
 */
export function hasEnv(key: string): boolean {
	return CrossEnv.has(key);
}
/**
 * Set an environment variable.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 * @param {string} key Key of the environment variable.
 * @param {string} value Value of the environment variable.
 * @returns {void}
 */
export function setEnv(key: string, value: string): void {
	return CrossEnv.set(key, value);
}
