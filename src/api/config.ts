import axios from "axios";
//apiURL set part
const apiURL = "";

export const ApiInstance = axios.create({
    baseURL: `${apiURL}/api` as string,
});