import { appendFile } from 'node:fs';

export const add = async (fileName) =>{
    appendFile(fileName, '', (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });
}
