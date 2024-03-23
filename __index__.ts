import { main } from "./src/main.ts";

export class SemanticVersion {
  Major: number;
  minor: number;
  patch: number;

  constructor(version: string) {
    const split = version.split(".");
    this.Major = parseInt(split[0]);
    this.minor = parseInt(split[1]);
    this.patch = parseInt(split[2]);
  }

  toString(): string {
    return `${this.Major}.${this.minor}.${this.patch}`;
  }

  // If `other_version` is the latest of the two versions, return true. Otherwise, false
  lessThan(other_version: SemanticVersion): boolean {
    if (this.Major < other_version.Major) {
      return true;
    }

    if (this.minor < other_version.minor) {
      return true;
    }

    if (this.patch < other_version.patch) {
      return true;
    }

    return false;
  }
}

const version: string = Deno.readTextFileSync("./version.txt");
const sem_ver: SemanticVersion = new SemanticVersion(version);

Deno.exit(await main(sem_ver));
