import { readFileSync } from "node:fs";
import { readFile } from "node:fs/promises";
import process from "node:process";
const regexpWordMicrosoft = /microsoft/i;
/**
 * Determine whether this process is inside WSL (Windows Subsystem for Linux).
 * 
 * > **🛡️ Require Permission**
 * >
 * > - File System - Read (`allow-read`)
 * >   - `/proc/version`
 * @returns {Promise<boolean>} Determine result.
 */
export async function isEnvironmentWSL(): Promise<boolean> {
	if (process.platform !== "linux") {
		return false;
	}
	try {
		return regexpWordMicrosoft.test(await readFile("/proc/version", { encoding: "utf-8" }));
	} catch {
		return false;
	}
}
export default isEnvironmentWSL;
/**
 * Determine whether this process is inside WSL (Windows Subsystem for Linux).
 * 
 * > **🛡️ Require Permission**
 * >
 * > - File System - Read (`allow-read`)
 * >   - `/proc/version`
 * @returns {boolean} Determine result.
 */
export function isEnvironmentWSLSync(): boolean {
	if (process.platform !== "linux") {
		return false;
	}
	try {
		return regexpWordMicrosoft.test(readFileSync("/proc/version", { encoding: "utf-8" }));
	} catch {
		return false;
	}
}
