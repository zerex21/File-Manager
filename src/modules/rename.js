import {
    rename as renameFile
} from "node:fs"
import {
    sep
} from 'path'

let osSep = sep

export const rename = async (currDirectory, pathOne, pathTwo, ) => {

    renameFile(`${currDirectory}${osSep}${pathOne}`, `${currDirectory}${osSep}${pathTwo}`, (err) => {
        if (err) console.error(("FS operation failed"));
    })

};