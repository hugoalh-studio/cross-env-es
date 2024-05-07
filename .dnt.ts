import { transform, type TransformOutput } from "DNT/transform";
import { copy as fsCopy } from "STD/fs/copy";
import { emptyDir } from "STD/fs/empty-dir";
import { ensureDir } from "STD/fs/ensure-dir";
import { walk as readDir, type WalkEntry } from "STD/fs/walk";
import { dirname as pathDirname } from "node:path";
const pathsMain: WalkEntry[] = await Array.fromAsync(readDir("."));
const transformResult: TransformOutput = await transform({
	entryPoints: [
		"mod.ts",
		"env.ts",
		"is_ci.ts",
		"is_docker.ts",
		"is_heroku.ts",
		"is_hyper.ts",
		"is_podman.ts",
		"is_root.ts",
		"is_ssh.ts",
		"is_travis.ts",
		"is_wsl.ts",
		"path.ts",
		"pathext.ts"
	],
	mappings: {
		"node:fs": { name: "node:fs" },
		"node:fs/promises": { name: "node:fs/promises" },
		"node:path": { name: "node:path" },
		"node:process": { name: "node:process" }
	},
	shims: [],
	target: "Latest"
});
const npmOutputDir = "npm";
const npmOutputDirDist = `${npmOutputDir}/dist`;
const npmOutputDirSource = `${npmOutputDir}/src`;
await ensureDir(npmOutputDirDist);
await ensureDir(npmOutputDirSource);
await emptyDir(npmOutputDirDist);
await emptyDir(npmOutputDirSource);
for (const { filePath, fileText } of transformResult.main.files) {
	const filePathOutput = `${npmOutputDirSource}/${filePath}`;
	await ensureDir(pathDirname(filePathOutput));
	await Deno.writeTextFile(filePathOutput, fileText);
}
for (const { path } of pathsMain) {
	if (
		/^LICENSE[^\\\/]*\.md$/.test(path) ||
		/^README[^\\\/]*\.md$/.test(path)
	) {
		await fsCopy(path, `${npmOutputDir}/${path}`, {
			overwrite: true,
			preserveTimestamps: true
		});
	}
}
await new Deno.Command("pwsh", {
	args: ["-NonInteractive", "-Command", "$ErrorActionPreference = 'Stop'; npm install; npm run build; npm publish --dry-run"],
	cwd: `${Deno.cwd()}/${npmOutputDir}`,
	stderr: "inherit",
	stdin: "inherit",
	stdout: "inherit"
}).output();
