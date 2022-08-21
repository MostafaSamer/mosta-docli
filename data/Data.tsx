import allCommand from "./all-commands"
import apiCall from "../API/api";

// interface command {
//     command: String,
//     description: String,
//     singlepage: Boolean
// }

// interface line {
//     name: String,
//     description: String,
//     categories: Array<String>,
//     namespace: String,
//     commands: Array<command>
// }

const getAllCommands = () => {
    return allCommand;
}

const getSingleCommand = async (name: string) => {
    let res = await apiCall("post", "/readfiles", {fileName: name});
    return res;
}

export default {
    getAllCommands,
    getSingleCommand
};