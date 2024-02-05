export const getUserName = () => {
    const args = process.argv.slice(2);
    const userArg = args[0];
    if (!userArg) {
        return "Anonyms";
    } else return userArg.split("=")[1].trim();
};