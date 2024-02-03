import {
    createReadStream,
    createWriteStream
} from 'node:fs';
import {
    stdout
} from 'node:process';

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

//const fileRead = join(__dirname, 'files', 'fileToRead.txt');

export const cat = async (fileRead) => {
    const input = createReadStream(fileRead,{encoding:'utf-8'});
    input.pipe(stdout);
    // Write your code here
};

//await read();