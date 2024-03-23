import { isEnvironmentTravis } from "./is_travis.ts";
Deno.test("Main", {
	permissions: {
		env: true
	}
}, () => {
	console.log(isEnvironmentTravis());
});
