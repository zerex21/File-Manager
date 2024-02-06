import {
    cpus,
    EOL,
    homedir,
    userInfo,
    arch
} from "node:os";

export let getArch = () => {
    return (arch())
}