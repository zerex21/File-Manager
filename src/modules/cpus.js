import os from "node:os";

export let getCpus = async () =>{
    console.log(os.cpus())
}