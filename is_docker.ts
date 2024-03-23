import { readFileSync, statSync as fsStatSync } from "node:fs";
import { readFile, stat as fsStat } from "node:fs/promises";
const regexpWordDocker = /docker/i;
/**
 * Determine whether this process is inside Docker.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - File System - Read (`allow-read`)
 * >   - `/.dockerenv`
 * >   - `/proc/self/cgroup`
 * @returns {Promise<boolean>} Determine result.
 */
export async function isEnvironmentDocker(): Promise<boolean> {
	try {
		await fsStat("/.dockerenv");
		return true;
	} catch {
		// Continue on error.
	}
	try {
		return regexpWordDocker.test(await readFile("/proc/self/cgroup", { encoding: "utf-8" }));
	} catch {
		return false;
	}
}
export default isEnvironmentDocker;
/**
 * Determine whether this process is inside Docker.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - File System - Read (`allow-read`)
 * >   - `/.dockerenv`
 * >   - `/proc/self/cgroup`
 * @returns {boolean} Determine result.
 */
export function isEnvironmentDockerSync(): boolean {
	try {
		fsStatSync("/.dockerenv");
		return true;
	} catch {
		// Continue on error.
	}
	try {
		return regexpWordDocker.test(readFileSync("/proc/self/cgroup", { encoding: "utf-8" }));
	} catch {
		return false;
	}
}
