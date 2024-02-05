import {
    userInfo
} from "node:os";


export const getUserName = async () => {
    console.log(userInfo().username)
}