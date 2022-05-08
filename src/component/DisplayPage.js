import React from 'react'
import { useSelector } from 'react-redux';

const DisplayPage = (props) => {
    debugger
    const productData = useSelector((state) => state.allproduct)
    let productValue = [productData.products]
    let len = productValue.length
    console.log(productValue);
    return (
        <div className="p-3 col-lg-4 col-md-6 col-sm-12 ">DisplayPage
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">sr.no</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        productValue != undefined && Array.from({ length: len }, productValue.map((k, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{k.email}</td>
                                <td>{k[index + 1]}</td>
                            </tr>)))}
                </tbody>
            </table>


        </div>
    )
}

export default DisplayPage