import {
    copyFile,
    cp
} from 'node:fs';

import {
    unlink
} from "node:fs"
import {
    sep
} from 'path'
import {
    join
} from "node:path";
let osSep = sep


export const copyAndRemove = async (currDirectory, pathOne, pathTwo) => {

    if (pathTwo.startsWith('./') || pathTwo.startsWith('../')) {
        copyFile(`${currDirectory}${osSep}${pathOne}`, `${join(currDirectory, pathTwo)}${osSep}${pathOne}`, (err) => {
            if (err) console.error(("FS operation failed"));

            unlink(`${currDirectory}${osSep}${pathOne}`, (err) => {
                if (err) console.error(("FS operation failed"));
            })
        });
    } else {
        copyFile(`${currDirectory}${osSep}${pathOne}`, `${pathTwo}${osSep}${pathOne}`, (err) => {
            if (err) console.error(("FS operation failed"));

            unlink(`${currDirectory}${osSep}${pathOne}`, (err) => {
                if (err) console.error(("FS operation failed"));
            })
        });
    }









    /*    cp(pathOne, pathTwo, {
           recursive: true,
           force: false,
           errorOnExist: true
       }, (err) => {
           if (err) console.error(("FS operation failed"));

           unlink(pathOne, (err) => {
               if (err) console.error(("FS operation failed"));
           })

       }); */
};

//await copy();