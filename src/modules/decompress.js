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
import {
    sep
} from 'path'
import {
    join
} from "node:path";
let osSep = sep

let decompress = (readStream, brotli, writeStream) => {
    const stream = pipeline(readStream, brotli, writeStream, (err) => {
        if (err) console.error(("FS operation failed!!"));
    })

    stream.on('finish', () => {
        console.log('Done decompressing 😎');
    });
}


export let decompressFile = async (pathOne, pathTwo, currDirectory) => {
    const readStream = createReadStream(`${currDirectory}${osSep}${pathOne}`);


    const brotli = createBrotliDecompress();

    if (!readStream) return console.error(("FS operation failed"));

    let nameFile = pathOne.split('.')
    nameFile.pop()


    if (pathTwo.startsWith('./') || pathTwo.startsWith('../')) {
        ('newFaile', nameFile.join('.'))
        const writeStream = createWriteStream(`${join(currDirectory, pathTwo)}${osSep}${nameFile.join('.')}`);
        decompress(readStream, brotli, writeStream)
    } else {
        const writeStream = createWriteStream(`${pathTwo}${osSep}${nameFile.join('.')}`);
        decompress(readStream, brotli, writeStream)
    }

}