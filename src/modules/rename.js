import {
    rename as renameFile
} from "node:fs"


export const rename = async (pathOne, pathTwo) => {

    renameFile(pathOne, pathTwo, (err) => {
        if (err) console.error(("FS operation failed"));
    })

};