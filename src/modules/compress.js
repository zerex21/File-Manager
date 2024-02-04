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


export let compressFile = async (pathOne, pathTwo) => {
    const readStream = createReadStream(pathOne);
    const writeStream = createWriteStream(pathTwo);
    const brotli = createBrotliCompress();

    const stream = pipeline(readStream, brotli, writeStream, (err) => {
        if (err) throw err
    })

    stream.on('finish', () => {
        console.log('Done compressing 😎');
    });
}