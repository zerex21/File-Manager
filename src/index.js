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

import {
    lstat
} from 'fs';

import * as readline from 'node:readline';
import {
    resolve
} from 'path';
import {
    list
} from './modules/ls.js';



const project = async () => {
    /* list() */
    const userName = getUserName()
    const textCurrDir = showCurrDirectory;

    console.log(`Welcome to the File Manager, ${userName}!`);
    console.log(textCurrDir(homedir()))


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

    /******************** */




    // Write your code here


    /************************************ */
    rl.on('line', text => {
        if (text === '.exit') {
            /* text = '' */
            goodbyeUser()
            process.exit();
        }
        if (text === 'ls') {
            list()
            /* res.then(function (data) {
                console.log(data)
            }) */

        }
    })









}

await project()