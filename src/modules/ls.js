import {
    readdir
} from "node:fs"

import {
    stat
} from "node:fs/promises"

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
            if (err) throw new Error("FS operation failed");
            resolve(files)
        })
    })
}


const submitData = async (files, myPathFile) => {
    await files.forEach(async (element) => {
        let stats = await stat(`${myPathFile}/${element}`);
        let res = ((stats.isFile()) ? structForListTable(`${myPathFile}/${element}`, 'file') :
            structForListTable(`${myPathFile}/${element}`, 'directory')
        )
        myArr.push(res);
    });
}


export const handleInputs = async (myPathFile) => {
    return await getPath(myPathFile).then(data => submitData(data, myPathFile)).then(setTimeout(() => console.table(myArr), 10)).then(myArr = []);
}