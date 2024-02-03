import {
    unlink
} from "node:fs"

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

//const fileDelete = join(__dirname, "files", "fileToRemove.txt")

export const remove = async (fileDelete) => {
    unlink(fileDelete, (err) => {
        if (err) throw new Error("FS operation failed");
    })
    // Write your code here
};

//await remove();