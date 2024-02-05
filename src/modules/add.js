import {
  appendFile
} from 'node:fs';

import {
  sep
} from 'path'

let osSep = sep

export const add = async (fileName, currDirectory) => {
  appendFile(`${currDirectory}${osSep}${fileName}`, '', (err) => {
    if (err) console.error(("FS operation failed"));
    console.log('The file was added!');
  });
}