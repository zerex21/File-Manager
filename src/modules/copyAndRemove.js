import {
    cp
} from 'node:fs';

import {
    unlink
} from "node:fs"


export const copyAndRemove = async (pathOne, pathTwo) => {

    cp(pathOne, pathTwo, {
        recursive: true,
        force: false,
        errorOnExist: true
    }, (err) => {
        if (err) throw new Error("FS operation failed");

        unlink(pathOne, (err) => {
            if (err) throw new Error("FS operation failed");
        })

    });
};

//await copy();