import {
    createReadStream
} from 'node:fs';
import {
    stdout
} from 'node:process';
const {
    createHash
} = await import('node:crypto');

import {
    sep
} from 'path'

let osSep = sep

export const calculateHash = async (fileForHash, currDirectory) => {

    const hash = createHash('sha256');
    const input = createReadStream(`${currDirectory}${osSep}${fileForHash}`);
    input.pipe(hash).setEncoding('hex').pipe(stdout);

};