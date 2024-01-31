import {
    getUserName
} from './modules/getUserName.js';

import {
    homedir
} from 'os'

import process from 'node:process';

import {
    showCurrDirectory
} from './modules/currDirectory.js';

import * as readline from 'node:readline';

const project = async () => {

    const userName = getUserName()
    const currDir = showCurrDirectory;

    console.log(`Welcome to the File Manager, ${userName}!`);
    console.log(currDir(homedir()))


    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    const goodbyeUser = () => {
        console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    }

    process.openStdin().on('keypress', function (chunk, key) {
        if (key && key.name === 'c' && key.ctrl || chunk == '.exit') {
            goodbyeUser()
            process.exit();
        }
    });

    rl.on('line', text => {
        if (text === '.exit') {
            /* text = '' */
            goodbyeUser()
            process.exit();

        }
    })









}

await project()