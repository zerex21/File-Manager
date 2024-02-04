import {
    pipeline
} from 'node:stream';
import {
    createReadStream,
    createWriteStream
} from 'node:fs';
import {
    createBrotliDecompress
} from 'node:zlib';


export let decompressFile = async (pathOne, pathTwo) => {
    const readStream = createReadStream(pathOne);
    const writeStream = createWriteStream(pathTwo);

    const brotli = createBrotliDecompress();

    if (!readStream) return console.error(("FS operation failed"));

    const stream = pipeline(readStream, brotli, writeStream, (err) => {
        if (err) console.error(("FS operation failed"));
    })

    stream.on('finish', () => {
        console.log('Done decompressing 😎');
    });
}