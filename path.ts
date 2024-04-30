import { isAbsolute as isPathAbsolute } from "node:path";
import { envDelimitation } from "./_delimitation.ts";
/**
 * Cross runtime environment variables `PATH` interface.
 * 
 * > **🛡️ Permissions**
 * >
 * > | **Target** | **Type** | **Coverage** |
 * > |:--|:--|:--|
 * > | Deno | Environment Variable (`allow-env`) | `PATH` |
 */
export interface CrossEnvPath {
	/**
	 * Add value to the environment variable `PATH`.
	 * 
	 * > **🛡️ Permissions**
	 * >
	 * > | **Target** | **Type** | **Coverage** |
	 * > |:--|:--|:--|
	 * > | Deno | Environment Variable (`allow-env`) | `PATH` |
	 * @param {...string} values Value that need to add to the environment variable `PATH`.
	 * @returns {void}
	 */
	add(...values: string[]): void;
	/**
	 * Delete value from the environment variable `PATH`.
	 * 
	 * > **🛡️ Permissions**
	 * >
	 * > | **Target** | **Type** | **Coverage** |
	 * > |:--|:--|:--|
	 * > | Deno | Environment Variable (`allow-env`) | `PATH` |
	 * @param {...string} values Value that need to delete from the environment variable `PATH`.
	 * @returns {void}
	 */
	delete(...values: string[]): void;
	/**
	 * Get the values of the environment variable `PATH`.
	 * 
	 * > **🛡️ Permissions**
	 * >
	 * > | **Target** | **Type** | **Coverage** |
	 * > |:--|:--|:--|
	 * > | Deno | Environment Variable (`allow-env`) | `PATH` |
	 * @returns {string[]} Values of the environment variable `PATH`.
	 */
	get(): string[];
}
/**
 * Cross runtime environment variables `PATH` interface.
 * 
 * > **🛡️ Permissions**
 * >
 * > | **Target** | **Type** | **Coverage** |
 * > |:--|:--|:--|
 * > | Deno | Environment Variable (`allow-env`) | `PATH` |
 */
export const envPath: CrossEnvPath = Object.freeze({
	add(...values: string[]): void {
		values.forEach((value: string): void => {
			if (!isPathAbsolute(value)) {
				throw new SyntaxError(`\`${value}\` is not an absolute path!`);
			}
		});
		if (values.length > 0) {
			const target: Set<string> = envDelimitation.get("PATH");
			for (const value of values) {
				target.add(value);
			}
			envDelimitation.set("PATH", target);
		}
	},
	delete(...values: string[]): void {
		values.forEach((value: string): void => {
			if (!isPathAbsolute(value)) {
				throw new SyntaxError(`\`${value}\` is not an absolute path!`);
			}
		});
		if (values.length > 0) {
			const target: Set<string> = envDelimitation.get("PATH");
			for (const value of values) {
				target.delete(value);
			}
			envDelimitation.set("PATH", target);
		}
	},
	get(): string[] {
		return Array.from(envDelimitation.get("PATH").values());
	}
});
export default envPath;
