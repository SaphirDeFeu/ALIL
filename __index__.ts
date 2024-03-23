import { main } from "./src/main.ts";

export interface SemanticVersion {
  Major: number;
  minor: number;
  patch: number;
}

const version: string[] = Deno.readTextFileSync("./version.txt").split(".");
const sem_ver: SemanticVersion = {
  Major: parseInt(version[0]),
  minor: parseInt(version[1]),
  patch: parseInt(version[2]),
};

Deno.exit(main(sem_ver));
