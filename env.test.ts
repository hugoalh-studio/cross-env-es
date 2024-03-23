import { getAllEnv } from "./env.ts";
Deno.test("All", {
	permissions: {
		env: true
	}
}, () => {
	console.log(getAllEnv());
});
