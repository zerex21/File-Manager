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

import {
    handleInputs
} from './modules/ls.js';
import {
    cat
} from './modules/cat.js';
import {
    add
} from './modules/add.js';
import {
    rename
} from './modules/rename.js';
import {
    copy
} from './modules/copy.js';
import {
    remove
} from './modules/remove.js';
import {
    copyAndRemove
} from './modules/copyAndRemove.js';
import {
    eol
} from './modules/oel.js';
import {
    getCpus
} from './modules/cpus.js';
import {
    getArch
} from './modules/architecture.js';
import {
    calculateHash
} from './modules/hash.js';
import {
    compressFile
} from './modules/compress.js';
import {
    decompressFile
} from './modules/decompress.js';



const project = async () => {

    let currDirectory = homedir()
    const userName = getUserName()
    const textCurrDir = showCurrDirectory;

    console.log(`Welcome to the File Manager, ${userName}!`);
    console.log(textCurrDir(currDirectory))


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

        let [oper, pathOne, pathTwo] = text.split(' ')
        if (oper === '.exit') {
            goodbyeUser()
            process.exit();
        }
        if (oper === 'ls') {
            let res = (handleInputs)
            /* console.log('pathOne', pathOne) */
            res(currDirectory)
            setTimeout(() => {
                console.log(textCurrDir(currDirectory))
            }, 10)
        }
        if (oper === 'cat') {
            cat(pathOne)
            console.log(textCurrDir(currDirectory))
        }
        if (oper === 'add') {
            add(pathOne)
            console.log(textCurrDir(currDirectory))
        }
        if (oper === 'rn') {
            rename(pathOne, pathTwo)
            console.log(textCurrDir(currDirectory))
        }
        if (oper === 'cp') {
            copy(pathOne, pathTwo)
            console.log(textCurrDir(currDirectory))
        }
        if (oper === 'mv') {
            copyAndRemove(pathOne, pathTwo)
            console.log(textCurrDir(currDirectory))
        }
        if (oper === 'rm') {
            remove(pathOne)
            console.log(textCurrDir(currDirectory))
        }
        if (oper === 'os' && pathOne === '--EOL') {
            eol()
            console.log(textCurrDir(currDirectory))
        }
        if (oper === 'os' && pathOne === '--cpus') {
            getCpus()
            console.log(textCurrDir(currDirectory))
        }
        if (oper === 'os' && pathOne === '--homedir') {
            console.log(homedir())
            return console.log(textCurrDir(currDirectory))
        }
        if (oper === 'os' && pathOne === '--username') {
            console.log(getUserName())
            console.log(textCurrDir(currDirectory))
        }
        if (oper === 'os' && pathOne === '--architecture') {
            console.log(getArch())
            console.log(textCurrDir(currDirectory))
        }
        if (oper === 'hash') {
            calculateHash(pathOne)
            console.log(textCurrDir(currDirectory))
        }
        if (oper === 'compress') {
            compressFile(pathOne, pathTwo)
            console.log(textCurrDir(currDirectory))
        }
        if (oper === 'decompress') {
            decompressFile(pathOne, pathTwo)
            console.log(textCurrDir(currDirectory))
        }
    })
}

await project()