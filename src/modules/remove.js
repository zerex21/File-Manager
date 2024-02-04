import {
    unlink
} from "node:fs"

export const remove = async (fileDelete) => {
    unlink(fileDelete, (err) => {
        if (err) throw new Error("FS operation failed");
    })
};