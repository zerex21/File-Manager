
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

//const READ_FILE_NAME = 'compressedData.txt.br';
//const WRITE_FILE_NAME = 'data.txt';

// Create read and write streams


export let decompressFile = async (pathOne, pathTwo) => {
    const readStream = createReadStream(pathOne);
    const writeStream = createWriteStream(pathTwo);

    // Create brotli decompress object
    const brotli = createBrotliDecompress();

    const stream = pipeline(readStream, brotli,writeStream, (err) => {
        if(err) throw err
    })
//    readStream.pipe(brotli).pipe(writeStream);

stream.on('finish', () => {
  console.log('Done decompressing 😎');
});
}

// Pipe the read and write operations with brotli decompression
