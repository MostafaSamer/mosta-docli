import allCommand from "./all-commands"
import apiCall from "../API/api";

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