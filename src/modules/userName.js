import {
    homedir, userInfo
} from 'os'

export const getUserName = async () =>{
    //const userName = homedir().split('')
    console.log(userInfo())
}