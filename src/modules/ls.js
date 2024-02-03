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
        return arr
    })
    /*  }) */
}



const asd = async (files) => {
    /* let files = await rm()
    console.log(files) */
    /* return new Promise((resolve, reject) => { */
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


    /*   arr.forEach(async element => {
          await (element).then(function (m) {
              return (m)
          }).then(function (m) {
              m = console.log(m)
              return m
          });
      }) */
    /*  console.log('arr', arr) */
    /*  resolve(arr) */
    /* }) */
    return arr
}

/* let files = await rm() */
/* console.log(files) */
/* await asd(await rm()) */
/* async function f() {
    const x = await asd(['asdasd.ds', 'asdasd', '123213'])
    console.log(x)
}

f() */
/* rm().then(data => asd(data)).then(data => console.log('data', data)) */


let myArr = []
let finRes;
const getPath = () => {
    return new Promise(async (resolve, reject) => {
        readdir(myPathFile, async (err, files) => {
            if (err) throw new Error("FS operation failed");
            finRes = files

            resolve()
        })
    })
}




const submitData = async (files) => {
    /*  let userObj = {
         userName: newData.username,
         password: newData.email,
         id: newData.id
     } */

    await files.forEach(async (element) => {
        let stats = await stat(`${myPathFile}/${element}`);
        let res = await ((stats.isFile()) ? ({
            Name: `${myPathFile}/${element}`,
            Type: 'file'
        }) : ({
            Name: `${myPathFile}/${element}`,
            Type: 'directory'
        }))

        /*  (stats.then(data => data.isFile() ? ({
             Name: `${myPathFile}/${element}`,
             Type: 'file'
         }) : ({
             Name: `${myPathFile}/${element}`,
             Type: 'directory'
         }))); */
        /* console.log('res', res) */
        myArr.push(res);
        /*   console.log(myArr) */
    });

    /* for (let i = 0; i < files.length; i++) {
        let stats = stat(`${myPathFile}/${files[i]}`);
        let res = (stats.then(data => data.isFile() ? ({
            Name: `${myPathFile}/${files[i]}`,
            Type: 'file'
        }) : ({
            Name: `${myPathFile}/${files[i]}`,
            Type: 'directory'
        })));
        console.log('res', res)
        myArr.push(res);
    } */



    //it is showing undefined as you have not initialized database with any value, here an array
    /* return myArr */
}
/*
handleInputs() */

export const handleInputs = async () => {
    /* setTimeout(() => console.table(myArr), 2000) */
    await getPath();
    /* console.log('fin', finRes) */
    await submitData(finRes);
    (console.table(myArr))

}