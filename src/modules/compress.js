import {
    pipeline
} from 'node:stream';
import {
    createReadStream,
    createWriteStream
} from 'node:fs';
import {
    createBrotliCompress
} from 'node:zlib';
import {
    sep
} from 'path'
import {
    join
} from "node:path";
let osSep = sep

let compress = (readStream, brotli, writeStream) => {
    const stream = pipeline(readStream, brotli, writeStream, (err) => {
        if (err) console.error(("FS operation failed"));
    })
    stream.on('error', (err) => {
        if (err) console.error(("FS operation failed"))
    })
    stream.on('finish', () => {
        console.log('Done compressing 😎');
    });
}

export let compressFile = async (pathOne, pathTwo, currDirectory) => {
    const readStream = createReadStream(`${currDirectory}${osSep}${pathOne}`);

    const brotli = createBrotliCompress();
    if (!readStream) return console.error(("FS operation failed"));

    if (pathTwo.startsWith('./') || pathTwo.startsWith('../')) {
        const writeStream = createWriteStream(`${join(currDirectory, pathTwo)}${osSep}${pathOne}.br`);
        compress(readStream, brotli, writeStream)
    } else {

        const writeStream = createWriteStream(`${pathTwo}${osSep}${pathOne}.br`);
        compress(readStream, brotli, writeStream)
    }

}