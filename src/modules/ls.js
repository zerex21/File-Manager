import {
    readdir
} from "node:fs"

import {
    lstat,
    stat
} from "node:fs/promises"
import {
    sep
} from 'path'
let osSep = sep

const myPathFile = `F:/` //Заменить на путь передающий

const structForListTable = (nameFile, typeFile) => {
    return ({
        Name: nameFile,
        Type: typeFile
    })
}


let myArr = []

const getPath = (myPathFile) => {
    return new Promise(async (resolve, reject) => {
        readdir(myPathFile, async (err, files) => {
            if (err) console.error(("FS operation failed"));
            resolve(files)
        })
    })
}


const submitData = async (files, myPathFile) => {
    await files.forEach(async (element) => {
        let stats = await stat(`${myPathFile}${osSep}${element}`);
        let res = ((stats.isDirectory()) ? structForListTable(`${myPathFile}${osSep}${element}`, 'directory') :
            structForListTable(`${myPathFile}${osSep}${element}`, 'file')
        )
        myArr.push(res);
    });
}


export const handleInputs = async (myPathFile) => {
    return await getPath(myPathFile).then(data => submitData(data, myPathFile)).then(setTimeout(() => console.table(myArr), 10)).then(myArr = []);
}