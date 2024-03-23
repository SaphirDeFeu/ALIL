import { parseArgs } from "@std/cli/parse_args.ts";
import { SemanticVersion } from "../__index__.ts";

export function main(version: SemanticVersion): number {
  const args = parseArgs(Deno.args);

  if (args.h || args.help) {
    displayHelp();
    return 0;
  }

  if (args.V || args.version) {
    console.log(
      `ALIL ${version.Major}.${version.minor}.${version.patch} by TSMStudios`
    );
    return 0;
  }

  if (args._.length == 0) {
    displayHelp();
    return 0;
  }

  return 0;
}

function displayHelp() {
  console.log(
    `ALIL - Assembly-Like Interpreted Language\n\nUsage: alil [options] <file>\n\nOptions:\n  -h, --help     Print help message\n  -V, --version  Print version info\n  -v, --verbose  Allow printing of ALIL log messages\n  -c, --config   Specify a config file for the interpreter to use\n`
  );
}
