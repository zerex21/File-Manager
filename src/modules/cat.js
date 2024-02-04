import {
    createReadStream
} from 'node:fs';

import {
    stdout
} from 'node:process';


export const cat = async (fileRead) => {
    const input = createReadStream(fileRead, {
        encoding: 'utf-8'
    });
    input.pipe(stdout);
};