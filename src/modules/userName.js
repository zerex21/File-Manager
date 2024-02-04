import {
    userInfo
} from 'os'

export const getUserName = async () => {
    console.log(userInfo())
}