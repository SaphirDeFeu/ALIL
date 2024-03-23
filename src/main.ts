import { parseArgs } from "@std/cli/parse_args.ts";
import { SemanticVersion } from "../__index__.ts";

export async function main(version: SemanticVersion): Promise<number> {
  const args = parseArgs(Deno.args);

  if (args.h || args.help) {
    displayHelp();
    return 0;
  }

  if (args.V || args.version) {
    console.log(`ALIL ${version.toString()} by TSMStudios`);
    console.log(`   \x1b[103mCLI\x1b[0m Fetching versions`);
    const latest_version: string = await (
      await fetch(
        "https://raw.githubusercontent.com/SaphirDeFeu/ALIL/master/version.txt"
      )
    ).text();
    const latest_sem_version: SemanticVersion = new SemanticVersion(
      latest_version
    );

    if (version.lessThan(latest_sem_version)) {
      console.log(
        `New version of ALIL available (${latest_sem_version.toString()}) : https://github.com/SaphirDeFeu/ALIL/releases/tag/v${latest_sem_version.toString()}`
      );
    } else {
      console.log(
        `You are running the latest version of ALIL (${version.toString()})`
      );
    }
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
