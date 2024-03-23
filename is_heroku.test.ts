import { isEnvironmentHeroku } from "./is_heroku.ts";
Deno.test("Main", {
	permissions: {
		env: [
			"DYNO",
			"HEROKU",
			"HOME"
		]
	}
}, () => {
	console.log(isEnvironmentHeroku());
});
