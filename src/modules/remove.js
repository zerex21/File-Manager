import {
    unlink
} from "node:fs"

import {
    sep
} from 'path'

let osSep = sep

export const remove = async (fileDelete, currDirectory) => {
    unlink(`${currDirectory}${osSep}${fileDelete}`, (err) => {
        if (err) console.error(("FS operation failed"));
    })
};