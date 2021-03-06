import arg from 'arg';
import { Options } from '../typings/index';
import { ARGUMENTS, ALIAS } from '../utils/constants/index';

function parseArgumentsIntoOptions(rawArgs: string[]): Options {
    // console.log(rawArgs);
    // return {
    //     skipPrompts: '';
    //     git: boolean;
    //     template: string;
    //     runInstall: boolean;
    //     targetDir: string;
    // }
}

export async function cli(args: string[]){
    // let options = parseArgumentsIntoOptions(args)
    console.log(arg);
}