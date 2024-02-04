import {
    sep
} from 'path'

export const moveUpDir = (path) => {

    let osSep = sep
    let newPath = path.split(osSep)
    if (newPath.length <= 2) {
        newPath.pop()
        return newPath + osSep
    }
    /* console.log(path, newPath, newPath.length) */
    newPath.pop()
    return newPath.join(osSep)
}