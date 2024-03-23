import { getPATHEXT } from "./pathext.ts";
Deno.test("Get", {
	permissions: {
		env: ["PATHEXT"]
	}
}, () => {
	console.log(getPATHEXT());
});
