
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

//const READ_FILE_NAME = 'data.txt';
//const WRITE_FILE_NAME = 'compressedData.txt.br';

// Create read and write streams


// Create brotli compress object


// Pipe the read and write operations with brotli compression
export let compressFile = async (pathOne, pathTwo) => {
    const readStream = createReadStream(pathOne);
    const writeStream = createWriteStream(pathTwo);
    const brotli = createBrotliCompress();

    const stream = pipeline(readStream, brotli, writeStream,(err) =>{
        if(err) throw err
    })
 //   readStream.pipe(brotli).pipe(writeStream);

    stream.on('finish', () => {
      console.log('Done compressing 😎');
    });
}
