import {
    copyFile,
    cp
} from 'node:fs';

import {
    sep
} from 'path'

let osSep = sep

export const copy = async (currDirectory, pathOne, pathTwo) => {
    console.log(pathOne, pathTwo)
    copyFile(`${currDirectory}${osSep}${pathOne}`, `${pathTwo}${osSep}${pathOne}`, (err) => {
        if (err) console.error(("FS operation failed"));
    });
};