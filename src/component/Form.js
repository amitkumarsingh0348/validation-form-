import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '../action/action-type';
import { validateFormData } from "../utils";
import DisplayPage from './DisplayPage';

const Form = () => {
    const counter = useSelector((state) => state.allproduct)
    let Data = counter.products
    console.log('counter', Data);
    let dispatch = useDispatch()

    const [formValue, setFormValues] = useState({})
    const [counterInput, setCounterInput] = useState(1)
    const [color, setColor] = useState('')

    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setFormValues({ ...formValue, [name]: value })
        console.log(formValue);
    }

    const handleInputClick = () => {
        setCounterInput(counterInput + 1)
        console.log(counterInput);
    }

    const submit = (e) => {

        e.preventDefault()
        setFormErrors(validateFormData(formValue, counterInput))
        setIsSubmit(true)
    }


    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            dispatch({ type: ActionTypes.WORDS_FETCH_DATA_SUCCESS, payload: formValue })
            console.log(formValue);
        }
    }, [formErrors])

    return (
        <React.Fragment>
            {Data === undefined ?
                <div className='container' style={{ backgroundColor: `${color}` }}>
                    <div className='row-text'>Form Here</div>
                    <form className='shadow p-2 border-1' onSubmit={submit}>
                        <div className='col-lg-12 d-flex flex-wrap justify-content-center'>

                            <div className="p-3 col-lg-4 col-md-6 col-sm-12 ">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="text" className=" input-box form-control" id="exampleInputEmail1" name='email' value={formValue.email} onChange={handleChange} aria-describedby="emailHelp" />
                                <p className='p-size' >{formErrors.email != null || formErrors.email != undefined ? formErrors.email : ``}</p>
                            </div>

                            {Array.from({ length: counterInput }, (c, index) => (
                                <div className="p-3 col-lg-4 col-md-6 col-sm-12" key={c}>
                                    <label htmlFor="exampleInputAddress1" className="form-label">Address</label>
                                    <input type="text" className=" input-box form-control" name={(index + 1)} value={formValue.address} onChange={handleChange} id="exampleInputAddress1" />
                                    <p className='p-size' >{formErrors[index + 1] != null || formErrors[index + 1] != undefined ? formErrors[index + 1] : ``}</p>
                                </div>
                            ))}
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                    <div className="p-3 col-lg-4 col-md-6 col-sm-12">
                        <button className="btnadd btn-primary" onClick={handleInputClick}>Add Field</button>
                    </div>
                    <button className="btnadd btn-primary" onClick={() => setColor("#" + ((1 << 24) * Math.random() | 0).toString(16))}>Change Background</button>

                </div>
                : <DisplayPage />}
        </React.Fragment>

    )
}

export default Form