import { isEnvironmentHyper } from "./is_hyper.ts";
Deno.test("Main", {
	permissions: {
		env: ["TERM_PROGRAM"]
	}
}, () => {
	console.log(isEnvironmentHyper());
});
