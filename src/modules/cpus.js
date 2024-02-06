import os from "node:os";

export let getCpus = async () => {
    let res = os.cpus()

    res.forEach(element => {
        console.log(element.model)
    });

}