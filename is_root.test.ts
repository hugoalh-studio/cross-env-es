import { isEnvironmentRoot } from "./is_root.ts";
Deno.test("Main", {
	permissions: {
		sys: [
			"uid"
		]
	}
}, () => {
	console.log(isEnvironmentRoot());
});
