import process from "node:process";
/**
 * Determine whether this process is executing as root user.
 * 
 * > **🛡️ Permissions**
 * >
 * > | **Target** | **Type** | **Coverage** |
 * > |:--|:--|:--|
 * > | Deno | System Info (`allow-sys`) | `uid` (For Non-Windows) |
 * @returns {boolean} Determine result.
 */
export function isEnvironmentRoot(): boolean {
	return (
		(typeof Deno !== "undefined" && Deno.uid() === 0) ||
		process.getuid?.() === 0
	);
}
export default isEnvironmentRoot;
