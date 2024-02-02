import {
    readdir
} from "node:fs"
import {
    lstat
} from 'fs';
import {
    stat
} from "node:fs/promises"
import * as readline from 'node:readline';
import {
    resolve
} from 'path';

const myPathFile = `C:/Users/oleq2/OneDrive/Рабочий стол/Node` //Заменить на путь передающий

const structForListTable = (nameFile, typeFile) => {
    return ({
        Name: nameFile,
        Type: typeFile
    })
}
let structDates = []
let el = '';
/* export const list = () => {
    readdir(myPathFile, (err, files) => {
        if (err) throw new Error("FS operation failed");


        for (let i = 0; i < files.length; i++) {
            lstat(`${myPathFile}/${files[i]}`, (err, stats) => {
                if (err) throw err;

                if (stats.isFile()) {
                    structDates.push(structForListTable(`${myPathFile}/${files[i]}`, 'file'))

                } else {
                    structDates.push(structForListTable(`${myPathFile}/${files[i]}`, 'directory'))

                }

            })


        }

    });
    return (console.table(structDates))
} */

const rm = () => {
    return new Promise((resolve, reject) => {
        readdir(myPathFile, (err, files) => {
            if (err) throw new Error("FS operation failed");
            resolve(files)
        })
    })
}

const asd = (files) => {
    return new Promise((resolve, reject) => {
        let arr = []
        files.forEach(element => {
            const stats = stat(`${myPathFile}/${element}`);
            arr.push(stats.then(data => data.isFile() ? ({
                Name: `${myPathFile}/${element}`,
                Type: 'file'
            }) : ({
                Name: `${myPathFile}/${element}`,
                Type: 'directory'
            })));

            /*  lstat(`${myPathFile}/${element}`, (err, stats) => {
                 if (err) throw err;

                 if (stats.isFile()) {
                     arr.push({
                         Name: `${myPathFile}/${element}`,
                         Type: 'file'
                     })

                 } else {
                     arr.push({
                         Name: `${myPathFile}/${element}`,
                         Type: 'directory'
                     })
                 }
             }) */
            /*  arr.push({
                 Name: element,
                 Type: 'typeFile'
             }) */
        });
        let str = {};
        console.log('arr', arr)
        arr.forEach(async element => {
            await (element).then(function (m) {
                console.log(m)
            })
        });
        resolve(arr)
    })
}

/* async function f() {
    const x = await asd(['asdasd.ds', 'asdasd', '123213'])
    console.log(x)
}

f() */
rm().then(data => asd(data)) /* .then(data => console.log(data)) */