import { isEnvironmentDocker } from "./is_docker.ts";
Deno.test("Main", {
	permissions: {
		read: [
			"/.dockerenv",
			"/proc/self/cgroup"
		]
	}
}, async () => {
	console.log(await isEnvironmentDocker());
});
