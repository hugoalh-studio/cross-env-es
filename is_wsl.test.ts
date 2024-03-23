import { isEnvironmentWSL } from "./is_wsl.ts";
Deno.test("Main", {
	permissions: {
		read: ["/proc/version"]
	}
}, async () => {
	console.log(await isEnvironmentWSL());
});
