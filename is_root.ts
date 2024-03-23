import process from "node:process";
/**
 * Determine whether this process is executing as root user.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - System Info (`allow-sys`)
 * >   - `uid` *(For Non-Windows Only)*
 * @returns {boolean} Determine result.
 */
export function isEnvironmentRoot(): boolean {
	return (process.getuid?.() === 0);
}
export default isEnvironmentRoot;
