import { delimiter as pathDelimiter } from "node:path";
import env from "./env.ts";
/**
 * Cross runtime environment variables delimitation interface.
 * 
 * > **🛡️ Permissions**
 * >
 * > | **Target** | **Type** | **Coverage** |
 * > |:--|:--|:--|
 * > | Deno | Environment Variable (`allow-env`) | All |
 */
export interface CrossEnvDelimitation {
	/**
	 * Get the value of an environment variable with inter-handle delimiter.
	 * 
	 * > **🛡️ Permissions**
	 * >
	 * > | **Target** | **Type** | **Coverage** |
	 * > |:--|:--|:--|
	 * > | Deno | Environment Variable (`allow-env`) | All |
	 * @param {string} key Key of the environment variable.
	 * @returns {Set<string>} Values of the environment variable.
	 */
	get(key: string): Set<string>;
	/**
	 * Set an environment variable with inter-handle delimiter.
	 * 
	 * > **🛡️ Permissions**
	 * >
	 * > | **Target** | **Type** | **Coverage** |
	 * > |:--|:--|:--|
	 * > | Deno | Environment Variable (`allow-env`) | All |
	 * @param {string} key Key of the environment variable.
	 * @param {Set<string>} values Values of the environment variable.
	 * @returns {void}
	 */
	set(key: string, values: Set<string>): void;
}
/**
 * Cross runtime environment variables delimitation interface.
 * 
 * > **🛡️ Permissions**
 * >
 * > | **Target** | **Type** | **Coverage** |
 * > |:--|:--|:--|
 * > | Deno | Environment Variable (`allow-env`) | All |
 */
export const envDelimitation: CrossEnvDelimitation = Object.freeze({
	get(key: string): Set<string> {
		return new Set<string>((env.get(key) ?? "").split(pathDelimiter));
	},
	set(key: string, values: Set<string>): void {
		return env.set(key, Array.from(values.values()).join(pathDelimiter));
	}
});
