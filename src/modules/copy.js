import {
    cp,
    stat
} from 'node:fs';

import {
    fileURLToPath
} from 'url';

import {
    dirname
} from 'path';

import {
    join
} from "node:path";


const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);

const pathsToCheck = [join(__dirname, "files"), join(__dirname, "files_copy")];

export const copy = async (pathOne,pathTwo) => {

    cp(pathOne, pathTwo, {
        recursive: true,
        force: false,
        errorOnExist: true
    }, (err) => {
        if (err) throw new Error("FS operation failed");
    });
};

//await copy();