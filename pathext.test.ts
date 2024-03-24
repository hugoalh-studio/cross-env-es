import envPathExt from "./pathext.ts";
Deno.test("Get", {
	permissions: {
		env: ["PATHEXT"]
	}
}, () => {
	console.log(envPathExt.get());
});
