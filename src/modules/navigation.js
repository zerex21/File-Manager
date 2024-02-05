import {
    sep
} from 'path'

import {
    join
} from "node:path";
import {
    access,
    exists
} from 'fs';


let osSep = sep

export const moveUpDir = (path) => {


    let newPath = path.split(osSep)
    /* console.log('upModerDir', path) */
    if (newPath.length <= 2) {
        /* newPath.push(osSep) */

        newPath.pop()
        return newPath + osSep
    }
    /* console.log(path, newPath, newPath.length) */
    newPath.pop()
    return newPath.join(osSep)
}

export const moveToDir = async (path, dest = '') => {

    if (dest.startsWith('./') || dest.startsWith('../')) {
        return new Promise(async (resolve, reject) => {
            access(join(path, dest), (err) => {
                if (err) {
                    console.error(("FS operation failed"))
                } else {
                    let newPath = join(path, dest).split('')

                    /* newPath.pop() */
                    resolve( /* newPath  */ newPath.join(''))
                }
            })
        })
    } else {
        return new Promise(async (resolve, reject) => {
            access(dest, (err) => {
                if (err) {
                    console.error(("FS operation failed"))
                } else {
                    /* console.log('path2', dest) */
                    /* let newPath = join(path).split('')
                    newPath.pop() */
                    resolve(join(`${dest}${osSep}`) /* newPath.join('') */ )
                }
            })
        })
    }





}