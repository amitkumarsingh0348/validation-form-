import axios from "axios";




export const validateFormData = (values, counterInput) => {

    let errors = {}
    const emailRegx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    for (let i = 1; i <= counterInput; i++) {
        if (!values[i]) {
            errors[i] = 'Address is Required'
        }
    }

    if (!values.email) {
        errors.email = 'Email is Required'
    }
    else if (!emailRegx.test(values.email)) {
        errors.email = 'Email is not valid'
    }

    return errors
}

export const axiosPost = async (method, exurl, data,) => {
    const url = `${process.env.REACT_APP_BASE_URL}${exurl}`;
    const response = await axios({ url: `${url}`, method: `${method}`, data })
        .catch((err) => {
            console.log("Err: ", err);
        });
    return response
}


