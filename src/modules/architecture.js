import os from "node:os";

export let getArch = async () =>{
    console.log(os.arch())
}