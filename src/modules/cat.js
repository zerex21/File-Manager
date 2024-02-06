import {
    createReadStream
} from 'node:fs';

import {
    stdout
} from 'node:process';

import {
    sep
} from 'path'

let osSep = sep

export const cat = async (fileRead, currDirectory) => {
    const input = createReadStream(`${currDirectory}${osSep}${fileRead}`, {
        encoding: 'utf-8'
    });
    input.on('error', (err) => {
        if (err) console.error(("FS operation failed"))
    })
    input.on('data', (chunk) => {
        console.log(chunk)
    })

};