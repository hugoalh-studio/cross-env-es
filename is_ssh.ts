import { hasEnv } from "./env.ts";
/**
 * Determine whether this process is inside SSH.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 * >   - `SSH_CLIENT`
 * @returns {boolean} Determine result.
 */
export function isEnvironmentSSH(): boolean {
	return hasEnv("SSH_CLIENT");
}
export default isEnvironmentSSH;
