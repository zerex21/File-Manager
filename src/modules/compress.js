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

/* import {
    stat
} from "node:fs/promises"


const checkFile = async (path) => {
    let stats = stat(path)
    return (await stats).isFile()
}

const checkDir = async (path) => {
    let stats = stat(path)
    return (await stats).isDirectory()
} */

export let compressFile = async (pathOne, pathTwo) => {
    const readStream = createReadStream(pathOne);
    const writeStream = createWriteStream(pathTwo);
    const brotli = createBrotliCompress();

    if (!readStream) return console.error(("FS operation failed"));

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