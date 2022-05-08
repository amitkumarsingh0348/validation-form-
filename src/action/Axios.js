import axios from "axios";

export const axiosPost = async (method, exurl, data,) => {
    const url = `${process.env.REACT_APP_BASE_URL}`;
    const response = await axios({ url: `${url}${exurl}`, method: `${method}`, data })
        .catch((err) => {
            console.log("Err: ", err);
        });
    return response
}