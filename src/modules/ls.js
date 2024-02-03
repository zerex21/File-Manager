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

const myPathFile = `/Users/zerex/Desktop/Node` ;//`C:/Users/oleq2/OneDrive/Рабочий стол/Node` //Заменить на путь передающий

const structForListTable = (nameFile, typeFile) => {
    return ({
        Name: nameFile,
        Type: typeFile
    })
}
let structDates = []
let el = '';



const rm = async () => {
    let arr = []
    /* return new Promise((resolve, reject) => { */
    readdir(myPathFile, async (err, files) => {
        if (err) throw new Error("FS operation failed");
        /* resolve(files) */

        /* await */
        files.forEach(async element => {
            const stats = stat(`${myPathFile}/${element}`);
            arr.push(stats.then(data => data.isFile() ? ({
                Name: `${myPathFile}/${element}`,
                Type: 'file'
            }) : ({
                Name: `${myPathFile}/${element}`,
                Type: 'directory'
            })));

        });
        return arr
    })
    /*  }) */
}



const asd = async (files) => {

    let arr = []
    await files.forEach(async element => {
        const stats = stat(`${myPathFile}/${element}`);
        arr.push(stats.then(data => data.isFile() ? ({
            Name: `${myPathFile}/${element}`,
            Type: 'file'
        }) : ({
            Name: `${myPathFile}/${element}`,
            Type: 'directory'
        })));
    });

    return arr
}


let myArr = []
let finRes;
const getPath = () => {
    return new Promise(async (resolve, reject) => {
        readdir(myPathFile, async (err, files) => {
            if (err) throw new Error("FS operation failed");

            resolve(files)
        })
    })
}




const submitData = async (files) => {

    await files.forEach(async (element) => {
        let stats = await stat(`${myPathFile}/${element}`);
        let res = await ((stats.isFile()) ? ({
            Name: `${myPathFile}/${element}`,
            Type: 'file'
        }) : ({
            Name: `${myPathFile}/${element}`,
            Type: 'directory'
        }))
      await  myArr.push(res);
    });


}


export const handleInputs = async () => {
    /* setTimeout(() => console.table(myArr), 2000) */
    await getPath().then(data => submitData(data)).then(setTimeout(()=>console.table(myArr),10)).then(myArr=[]);
    /* console.log('fin', finRes) */



}