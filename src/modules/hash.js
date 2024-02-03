import {
    createReadStream
} from 'node:fs';
import {
    stdout
} from 'node:process';
const {
    createHash
} = await import('node:crypto');

//const fileForHash = new URL('./files/fileToCalculateHashFor.txt',
 //   import.meta.url);

export const calculateHash = async (fileForHash) => {

    const hash = createHash('sha256');
    const input = createReadStream(fileForHash);
    input.pipe(hash).setEncoding('hex').pipe(stdout);

    // Write your code here
};

//await calculateHash();