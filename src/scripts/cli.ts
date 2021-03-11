import arg from 'arg';
import { Options } from '../typings/index';
import { ARGUMENTS, ALIAS } from '../utils/constants/index';

function parseArgumentsIntoOptions(rawArgs: string[]): Options {
    const args = arg(
        {
            [ARGUMENTS.GIT]: Boolean,
            [ARGUMENTS.YES]: Boolean,
            [ARGUMENTS.INSTALL]: Boolean,
            [ALIAS.GIT]: ARGUMENTS.GIT,
            [ALIAS.YES]: ARGUMENTS.YES,
            [ALIAS.INSTALL]: ARGUMENTS.INSTALL,
        }, 
        {argv: rawArgs.slice(2)}
    );

    return {
        skipPrompts: !!args[ARGUMENTS.YES],
        git: !!args[ARGUMENTS.GIT],
        template: args._[0],
        runInstall: !!args[ARGUMENTS.INSTALL];
        targetDir: process.cwd();
    }
}

// async function promptFormMissingOptions(options: Options): {
    
// }

export async function cli(args: string[]){
    let options = parseArgumentsIntoOptions(args);
    // options = await promptFormMissingOptions(options);
    return options;
}
