import {
    copyFile,
    cp
} from 'node:fs';

import {
    sep
} from 'path'
import {
    join
} from "node:path";
let osSep = sep

export const copy = async (currDirectory, pathOne, pathTwo) => {
    if (pathTwo.startsWith('./') || pathTwo.startsWith('../')) {
        copyFile(`${currDirectory}${osSep}${pathOne}`, `${join(currDirectory, pathTwo)}${osSep}${pathOne}`, (err) => {
            if (err) console.error(("FS operation failed"));
        });
    } else {
        copyFile(`${currDirectory}${osSep}${pathOne}`, `${pathTwo}${osSep}${pathOne}`, (err) => {
            if (err) console.error(("FS operation failed"));
        });
    }

};