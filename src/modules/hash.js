import {
    createReadStream
} from 'node:fs';
import {
    stdout
} from 'node:process';
const {
    createHash
} = await import('node:crypto');


export const calculateHash = async (fileForHash) => {

    const hash = createHash('sha256');
    const input = createReadStream(fileForHash);
    input.pipe(hash).setEncoding('hex').pipe(stdout);

};