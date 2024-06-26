import process from "node:process";
/**
 * Cross runtime environment variables interface.
 * 
 * > **🛡️ Permissions**
 * >
 * > | **Target** | **Type** | **Coverage** |
 * > |:--|:--|:--|
 * > | Deno | Environment Variable (`allow-env`) | Resource |
 */
export interface CrossEnv {
	/**
	 * Delete an environment variable.
	 * 
	 * > **🛡️ Permissions**
	 * >
	 * > | **Target** | **Type** | **Coverage** |
	 * > |:--|:--|:--|
	 * > | Deno | Environment Variable (`allow-env`) | Resource |
	 * @param {string} key Key of the environment variable.
	 * @returns {void}
	 */
	delete(key: string): void;
	/**
	 * Get the value of an environment variable.
	 * 
	 * > **🛡️ Permissions**
	 * >
	 * > | **Target** | **Type** | **Coverage** |
	 * > |:--|:--|:--|
	 * > | Deno | Environment Variable (`allow-env`) | Resource |
	 * @param {string} key Key of the environment variable.
	 * @returns {string | undefined} Value of the environment variable.
	 */
	get(key: string): string | undefined;
	/**
	 * Get a snapshot of the environment variables at invocation as a simple object of keys and values.
	 * 
	 * > **🛡️ Permissions**
	 * >
	 * > | **Target** | **Type** | **Coverage** |
	 * > |:--|:--|:--|
	 * > | Deno | Environment Variable (`allow-env`) | All |
	 * @returns {{ [key: string]: string; }} A snapshot of the environment variables.
	 */
	getAll(): { [key: string]: string; };
	/**
	 * Check whether an environment variable is present.
	 * 
	 * > **🛡️ Permissions**
	 * >
	 * > | **Target** | **Type** | **Coverage** |
	 * > |:--|:--|:--|
	 * > | Deno | Environment Variable (`allow-env`) | Resource |
	 * @param {string} key Key of the environment variable.
	 * @returns {boolean} Determine result.
	 */
	has(key: string): boolean;
	/**
	 * Set an environment variable.
	 * 
	 * > **🛡️ Permissions**
	 * >
	 * > | **Target** | **Type** | **Coverage** |
	 * > |:--|:--|:--|
	 * > | Deno | Environment Variable (`allow-env`) | Resource |
	 * @param {string} key Key of the environment variable.
	 * @param {string} value Value of the environment variable.
	 * @returns {void}
	 */
	set(key: string, value: string): void;
}
const envViaDeno: CrossEnv = Object.freeze({
	delete: Deno.env.delete,
	get: Deno.env.get,
	getAll: Deno.env.toObject,
	has: Deno.env.has,
	set: Deno.env.set
});
const envViaProcess: CrossEnv = Object.freeze({
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
});
/**
 * Cross runtime environment variables interface.
 * 
 * > **🛡️ Permissions**
 * >
 * > | **Target** | **Type** | **Coverage** |
 * > |:--|:--|:--|
 * > | Deno | Environment Variable (`allow-env`) | Resource |
 */
export const env: CrossEnv = (typeof Deno === "undefined") ? envViaProcess : envViaDeno;
export default env;
/**
 * Delete an environment variable.
 * 
 * > **🛡️ Permissions**
 * >
 * > | **Target** | **Type** | **Coverage** |
 * > |:--|:--|:--|
 * > | Deno | Environment Variable (`allow-env`) | Resource |
 * @param {string} key Key of the environment variable.
 * @returns {void}
 */
export function deleteEnv(key: string): void {
	return env.delete(key);
}
/**
 * Get a snapshot of the environment variables at invocation as a simple object of keys and values.
 * 
 * > **🛡️ Permissions**
 * >
 * > | **Target** | **Type** | **Coverage** |
 * > |:--|:--|:--|
 * > | Deno | Environment Variable (`allow-env`) | All |
 * @returns {{ [key: string]: string; }} A snapshot of the environment variables.
 */
export function getAllEnv(): { [key: string]: string; } {
	return env.getAll();
}
/**
 * Get the value of an environment variable.
 * 
 * > **🛡️ Permissions**
 * >
 * > | **Target** | **Type** | **Coverage** |
 * > |:--|:--|:--|
 * > | Deno | Environment Variable (`allow-env`) | Resource |
 * @param {string} key Key of the environment variable.
 * @returns {string | undefined} Value of the environment variable.
 */
export function getEnv(key: string): string | undefined {
	return env.get(key);
}
/**
 * Check whether an environment variable is present.
 * 
 * > **🛡️ Permissions**
 * >
 * > | **Target** | **Type** | **Coverage** |
 * > |:--|:--|:--|
 * > | Deno | Environment Variable (`allow-env`) | Resource |
 * @param {string} key Key of the environment variable.
 * @returns {boolean} Determine result.
 */
export function hasEnv(key: string): boolean {
	return env.has(key);
}
/**
 * Set an environment variable.
 * 
 * > **🛡️ Permissions**
 * >
 * > | **Target** | **Type** | **Coverage** |
 * > |:--|:--|:--|
 * > | Deno | Environment Variable (`allow-env`) | Resource |
 * @param {string} key Key of the environment variable.
 * @param {string} value Value of the environment variable.
 * @returns {void}
 */
export function setEnv(key: string, value: string): void {
	return env.set(key, value);
}
