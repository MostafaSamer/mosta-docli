import apiCall from "../API/api";

const getAllCommands = async () => {
    let res = await apiCall("get", "/allfiles");
    return res;
}

const getSingleCommand = async (name: string) => {
    let res = await apiCall("post", "/readfiles", {fileName: name});
    return res;
}

const searchCommands = async (text: string) => {
    let res = await apiCall("post", "/searchcommands", {searchInput: text});
    return res;
}

export default {
    getAllCommands,
    getSingleCommand,
    searchCommands
};