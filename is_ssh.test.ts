import { isEnvironmentSSH } from "./is_ssh.ts";
Deno.test("Main", {
	permissions: {
		env: ["SSH_CLIENT"]
	}
}, () => {
	console.log(isEnvironmentSSH());
});
