import process from "node:process";
import { envDelimitation } from "./_delimitation.ts";
const isOSWindows: boolean = process.platform === "win32";
/**
 * Cross runtime environment variables `PATHEXT` interface.
 * 
 * > **🛡️ Permissions**
 * >
 * > | **Target** | **Type** | **Coverage** |
 * > |:--|:--|:--|
 * > | Deno | Environment Variable (`allow-env`) | `PATHEXT` (For Windows Only) |
 */
export interface CrossEnvPathExt {
	/**
	 * Add value to the environment variable `PATHEXT`.
	 * 
	 * > **🛡️ Permissions**
	 * >
	 * > | **Target** | **Type** | **Coverage** |
	 * > |:--|:--|:--|
	 * > | Deno | Environment Variable (`allow-env`) | `PATHEXT` (For Windows Only) |
	 * @param {...string} values Value that need to add to the environment variable `PATHEXT`.
	 * @returns {void}
	 */
	add(...values: string[]): void;
	/**
	 * Delete value from the environment variable `PATHEXT`.
	 * 
	 * > **🛡️ Permissions**
	 * >
	 * > | **Target** | **Type** | **Coverage** |
	 * > |:--|:--|:--|
	 * > | Deno | Environment Variable (`allow-env`) | `PATHEXT` (For Windows Only) |
	 * @param {...string} values Value that need to delete from the environment variable `PATHEXT`.
	 * @returns {void}
	 */
	delete(...values: string[]): void;
	/**
	 * Get the values of the environment variable `PATHEXT`; Always return `null` for non-Windows operate system.
	 * 
	 * > **🛡️ Permissions**
	 * >
	 * > | **Target** | **Type** | **Coverage** |
	 * > |:--|:--|:--|
	 * > | Deno | Environment Variable (`allow-env`) | `PATHEXT` (For Windows Only) |
	 * @returns {string[] | null} Values of the environment variable `PATHEXT`.
	 */
	get(): string[] | null;
}
/**
 * Cross runtime environment variables `PATHEXT` interface.
 * 
 * > **🛡️ Permissions**
 * >
 * > | **Target** | **Type** | **Coverage** |
 * > |:--|:--|:--|
 * > | Deno | Environment Variable (`allow-env`) | `PATHEXT` (For Windows Only) |
 */
export const envPathExt: CrossEnvPathExt = Object.freeze({
	add(...values: string[]): void {
		values.forEach((value: string): void => {
			if (!value.startsWith(".")) {
				throw new SyntaxError(`\`${value}\` is not an valid file extension!`);
			}
		});
		if (isOSWindows && values.length > 0) {
			const target: Set<string> = envDelimitation.get("PATHEXT");
			for (const value of values) {
				target.add(value.toUpperCase());
			}
			envDelimitation.set("PATHEXT", target);
		}
	},
	delete(...values: string[]): void {
		values.forEach((value: string): void => {
			if (!value.startsWith(".")) {
				throw new SyntaxError(`\`${value}\` is not an valid file extension!`);
			}
		});
		if (isOSWindows && values.length > 0) {
			const target: Set<string> = envDelimitation.get("PATHEXT");
			for (const value of values) {
				target.delete(value);
			}
			envDelimitation.set("PATHEXT", target);
		}
	},
	get(): string[] | null {
		if (!isOSWindows) {
			return null;
		}
		const values: Set<string> = envDelimitation.get("PATHEXT");
		if (values.size > 0) {
			return Array.from(values.values());
		}
		return [".EXE", ".CMD", ".BAT", ".COM"];
	}
});
export default envPathExt;
