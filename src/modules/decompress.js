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

    const stream = pipeline(readStream, brotli, writeStream, (err) => {
        if (err) throw err
    })

    stream.on('finish', () => {
        console.log('Done decompressing 😎');
    });
}