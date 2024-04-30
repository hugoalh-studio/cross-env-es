import { statSync as fsStatSync } from "node:fs";
import { stat as fsStat } from "node:fs/promises";
/**
 * Determine whether this process is inside Podman.
 * 
 * > **🛡️ Permissions**
 * >
 * > | **Target** | **Type** | **Coverage** |
 * > |:--|:--|:--|
 * > | Deno | File System - Read (`allow-read`) | `/run/.containerenv` |
 * @returns {Promise<boolean>} Determine result.
 */
export async function isEnvironmentPodman(): Promise<boolean> {
	try {
		await fsStat("/run/.containerenv");
		return true;
	} catch {
		return false;
	}
}
export default isEnvironmentPodman;
/**
 * Determine whether this process is inside Podman.
 * 
 * > **🛡️ Permissions**
 * >
 * > | **Target** | **Type** | **Coverage** |
 * > |:--|:--|:--|
 * > | Deno | File System - Read (`allow-read`) | `/run/.containerenv` |
 * @returns {boolean} Determine result.
 */
export function isEnvironmentPodmanSync(): boolean {
	try {
		fsStatSync("/run/.containerenv");
		return true;
	} catch {
		return false;
	}
}
