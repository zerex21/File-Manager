import {
    unlink
} from "node:fs"

export const remove = async (fileDelete) => {
    unlink(fileDelete, (err) => {
        if (err) console.error(("FS operation failed"));
    })
};