import {
  appendFile
} from 'node:fs';

export const add = async (fileName) => {
  appendFile(fileName, '', (err) => {
    if (err) console.error(("FS operation failed"));
    console.log('The "data to append" was appended to file!');
  });
}