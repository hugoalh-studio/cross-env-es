import env from "./env.ts";
/**
 * Determine whether this process is inside SSH.
 * 
 * > **🛡️ Permissions**
 * >
 * > | **Target** | **Type** | **Coverage** |
 * > |:--|:--|:--|
 * > | Deno | Environment Variable (`allow-env`) | `SSH_CLIENT` |
 * @returns {boolean} Determine result.
 */
export function isEnvironmentSSH(): boolean {
	return env.has("SSH_CLIENT");
}
export default isEnvironmentSSH;
