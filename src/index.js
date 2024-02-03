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
    handleInputs
} from './modules/ls.js';
import { cat } from './modules/cat.js';
import { add } from './modules/add.js';
import { rename } from './modules/rename.js';
import { copy } from './modules/copy.js';
import { remove } from './modules/remove.js';
import { copyAndRemove } from './modules/copyAndRemove.js';
import { eol } from './modules/oel.js';
import { getCpus } from './modules/cpus.js';
import { getArch } from './modules/architecture.js';
import { calculateHash } from './modules/hash.js';



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

        let [oper, pathOne, pathTwo] = text.split(' ')
       // console.log('oper:', oper, 'path:', path)
        if (oper === '.exit') {
            /* text = '' */
            goodbyeUser()
            process.exit();
        }
        if (oper === 'ls') {
            let res = (handleInputs)
            res()
        }
        if (oper === 'cat') {
            cat(`/Users/zerex/Desktop/Node/index.html`)
        }
        if (oper === 'add') {
            add(`/Users/zerex/Desktop/Node/xxx.html`)
        }
        if (oper === 'rn') {
            rename(`/Users/zerex/Desktop/Node/xxx.html`,`/Users/zerex/Desktop/Node/111.html`)
        }
        if (oper === 'cp') {
            copy(`/Users/zerex/Desktop/Node/111.html`,`/Users/zerex/Desktop/111.html`)
        }
        if (oper === 'mv') {
            copyAndRemove(`/Users/zerex/Desktop/Node/111.html`,`/Users/zerex/Desktop/111.html`)
        }
        if (oper === 'rm') {
            remove(`/Users/zerex/Desktop/111.html`)
        }
        if (oper === 'os' && pathOne === '--EOL') {
            eol()
        }
        if (oper === 'os' && pathOne === '--cpus') {
            getCpus()
        }
        if (oper === 'os' && pathOne === '--homedir') {
            console.log(homedir())
        }
        if (oper === 'os' && pathOne === '--username') {
            console.log(getUserName())
        }
        if (oper === 'os' && pathOne === '--architecture') {
            console.log(getArch())
        }
        if (oper === 'hash' ) {
            calculateHash(`/Users/zerex/Desktop/111.html`)
        }

    })









}

await project()