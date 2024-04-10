import process from "node:process";
/**
 * Cross runtime environment variables interface.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 */
export interface CrossEnv {
	/**
	 * Delete an environment variable.
	 * 
	 * > **🛡️ Require Permission**
	 * >
	 * > - Environment Variable (`allow-env`)
	 * @param {string} key Key of the environment variable.
	 * @returns {void}
	 */
	delete(key: string): void;
	/**
	 * Get the value of an environment variable.
	 * 
	 * > **🛡️ Require Permission**
	 * >
	 * > - Environment Variable (`allow-env`)
	 * @param {string} key Key of the environment variable.
	 * @returns {string | undefined} Value of the environment variable.
	 */
	get(key: string): string | undefined;
	/**
	 * Get a snapshot of the environment variables at invocation as a simple object of keys and values.
	 * 
	 * > **🛡️ Require Permission**
	 * >
	 * > - Environment Variable (`allow-env`)
	 * @returns {{ [key: string]: string; }} A snapshot of the environment variables.
	 */
	getAll(): { [key: string]: string; };
	/**
	 * Check whether an environment variable is present.
	 * 
	 * > **🛡️ Require Permission**
	 * >
	 * > - Environment Variable (`allow-env`)
	 * @param {string} key Key of the environment variable.
	 * @returns {boolean} Determine result.
	 */
	has(key: string): boolean;
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
	set(key: string, value: string): void;
}
const envViaDeno: CrossEnv = {
	delete: Deno.env.delete,
	get: Deno.env.get,
	getAll: Deno.env.toObject,
	has: Deno.env.has,
	set: Deno.env.set
};
const envViaProcess: CrossEnv = {
	delete(key: string): void {
		process.env[key] = undefined;
	},
	get(key: string): string | undefined {
		return process.env[key];
	},
	getAll(): { [key: string]: string; } {
		return Object.fromEntries(Object.entries(process.env).filter(([_key, value]: [string, string | undefined]): boolean => {
			return (typeof value !== "undefined");
		}) as [string, string][]);
	},
	has(key: string): boolean {
		return (typeof process.env[key] !== "undefined");
	},
	set(key: string, value: string): void {
		process.env[key] = value;
	}
};
/**
 * Cross runtime environment variables interface.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 */
export const env: CrossEnv = Object.freeze((typeof Deno === "undefined") ? envViaProcess : envViaDeno);
export default env;
/**
 * Delete an environment variable.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 * @param {string} key Key of the environment variable.
 * @returns {void}
 * @deprecated Replaced by method {@linkcode env.delete}.
 */
export function deleteEnv(key: string): void {
	return env.delete(key);
}
/**
 * Get a snapshot of the environment variables at invocation as a simple object of keys and values.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 * @returns {{ [key: string]: string; }} A snapshot of the environment variables.
 * @deprecated Replaced by method {@linkcode env.getAll}.
 */
export function getAllEnv(): { [key: string]: string; } {
	return env.getAll();
}
/**
 * Get the value of an environment variable.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 * @param {string} key Key of the environment variable.
 * @returns {string | undefined} Value of the environment variable.
 * @deprecated Replaced by method {@linkcode env.get}.
 */
export function getEnv(key: string): string | undefined {
	return env.get(key);
}
/**
 * Check whether an environment variable is present.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 * @param {string} key Key of the environment variable.
 * @deprecated Replaced by method {@linkcode env.has}.
 * @returns {boolean} Determine result.
 */
export function hasEnv(key: string): boolean {
	return env.has(key);
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
 * @deprecated Replaced by method {@linkcode env.set}.
 */
export function setEnv(key: string, value: string): void {
	return env.set(key, value);
}
