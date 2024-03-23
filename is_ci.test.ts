import { isEnvironmentCI } from "./is_ci.ts";
Deno.test("Main", {
	permissions: {
		env: true
	}
}, () => {
	console.log(isEnvironmentCI());
});
