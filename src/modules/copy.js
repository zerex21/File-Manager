import {
    cp
} from 'node:fs';

export const copy = async (pathOne, pathTwo) => {

    cp(pathOne, pathTwo, {
        recursive: true,
        force: false,
        errorOnExist: true
    }, (err) => {
        if (err) throw new Error("FS operation failed");
    });
};