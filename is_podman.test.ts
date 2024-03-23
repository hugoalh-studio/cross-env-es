import { isEnvironmentPodman } from "./is_podman.ts";
Deno.test("Main", {
	permissions: {
		read: ["/run/.containerenv"]
	}
}, async () => {
	console.log(await isEnvironmentPodman());
});
