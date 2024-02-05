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
import {
    moveToDir,
    moveUpDir
} from './modules/navigation.js';

const project = async () => {
    let asd = true

    let currDirectory = homedir()
    const userName = getUserName()
    /* const textCurrDir = showCurrDirectory; */

    console.log(`Welcome to the File Manager, ${userName}!`);
    console.log(showCurrDirectory(currDirectory))


    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    const goodbyeUser = () => {
        console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    }

    process.openStdin().on('keypress', function (chunk, key) {
        if (key && key.name === 'c' && key.ctrl || chunk == '.exit') {
            asd = false
            goodbyeUser()
            process.exit();
        }
    });


    /* while (asd) { */
    rl.on('line', text => {

        let [oper, pathOne, pathTwo] = text.split(' ')


        /******************Проверить вызоть расположения текущего******* */



        if (oper === 'up') {
            currDirectory = moveUpDir(currDirectory)
            showCurrDirectory(currDirectory)

        }

        if (oper === 'cd') {
            /* currDirectory = 'F:/Games/' */
            let res = moveToDir
            res(currDirectory, pathOne).then(data => {
                currDirectory = data
                showCurrDirectory(currDirectory)
                setTimeout(() => console.log('222222', currDirectory), 100)
            })
        }






        if (oper === '.exit') {
            asd = false
            goodbyeUser()
            process.exit();
        }
        if (oper === 'ls') {
            let res = (handleInputs)
            res(currDirectory)
            setTimeout(() => {
                showCurrDirectory(currDirectory)
            }, 10)
        }
        if (oper === 'cat') {
            if (!pathOne) {
                console.error(("FS operation failed"))
            } else {
                cat(pathOne)
                showCurrDirectory(currDirectory)
            }
        }
        if (oper === 'add') {
            if (!pathOne) {
                console.error(("FS operation failed"))
            } else {
                add(pathOne)
                showCurrDirectory(currDirectory)
            }
        }
        if (oper === 'rn') {
            if (!pathOne && !pathTwo) {
                console.error(("FS operation failed"))
            } else {
                rename(pathOne, pathTwo)
                showCurrDirectory(currDirectory)
            }
        }
        if (oper === 'cp') {
            if (!pathOne && !pathTwo) {
                console.error(("FS operation failed"))
            } else {
                copy(pathOne, pathTwo)
                showCurrDirectory(currDirectory)
            }
        }
        if (oper === 'mv') {
            if (!pathOne && !pathTwo) {
                console.error(("FS operation failed"))
            } else {
                copyAndRemove(pathOne, pathTwo)
                showCurrDirectory(currDirectory)
            }
        }
        if (oper === 'rm') {
            if (!pathOne) {
                console.error(("FS operation failed"))
            } else {
                remove(pathOne)
                showCurrDirectory(currDirectory)
            }
        }
        if (oper === 'os' && pathOne === '--EOL') {
            eol()
            showCurrDirectory(currDirectory)
        }
        if (oper === 'os' && pathOne === '--cpus') {
            getCpus()
            showCurrDirectory(currDirectory)
        }
        if (oper === 'os' && pathOne === '--homedir') {
            console.log(homedir())
            return showCurrDirectory(currDirectory)
        }
        if (oper === 'os' && pathOne === '--username') {
            console.log(getUserName())
            showCurrDirectory(currDirectory)
        }
        if (oper === 'os' && pathOne === '--architecture') {
            console.log(getArch())
            showCurrDirectory(currDirectory)
        }
        if (oper === 'hash') {
            if (!pathOne) {
                console.error(("FS operation failed"))
            } else {
                calculateHash(pathOne)
                showCurrDirectory(currDirectory)
            }
        }
        if (oper === 'compress') {
            if (!pathOne || !pathTwo) {
                console.error(("FS operation failed"))
            } else {
                compressFile(pathOne, pathTwo)
                showCurrDirectory(currDirectory)
            }
        }
        if (oper === 'decompress') {
            if (!pathOne || !pathTwo) {
                console.error(("FS operation failed"))
            } else {
                decompressFile(pathOne, pathTwo)
                showCurrDirectory(currDirectory)
            }
        }
        /* if (oper !== '.exit' || oper !== 'ls' || oper !== 'cat' || oper !== 'add' ||
            oper !== 'rn' || oper !== 'cp' || oper !== 'mv' || oper !== 'rm' ||
            oper !== 'os' || oper !== 'hash' || oper !== 'compress' || oper !== 'decompress' || oper !== 'up' || oper !== '' || oper !== 'cd') {
            console.error(("FS operation failed"))
        } */
    })


}

await project()