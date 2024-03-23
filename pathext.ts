import process from "node:process";
import { getEnvDelimitation } from "./_delimitation.ts";
/**
 * Get values of the environment variable `PATHEXT` (PATH extensions); Always return `null` for non-Windows operate system.
 *
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 * >   - `PATHEXT` *(For Windows Only)*
 * @returns {string[] | null} Values of the environment variable `PATHEXT`.
 */
export function getPATHEXT(): string[] | null {
	if (process.platform !== "win32") {
		return null;
	}
	const value: string[] = getEnvDelimitation("PATHEXT");
	if (value.length > 0) {
		return value;
	}
	return [".EXE", ".CMD", ".BAT", ".COM"];
}
