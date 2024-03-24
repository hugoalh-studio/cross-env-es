import envPath from "./path.ts";
Deno.test("Get", {
	permissions: {
		env: ["PATH"]
	}
}, () => {
	console.log(envPath.get());
});
