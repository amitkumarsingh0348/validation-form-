import React from 'react'
import { Link } from 'react-router-dom'
import constant from '../constant'
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'

const Dasboard = (props) => {
    console.log('props', props);
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={constant.url.register}>Register</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
                <div className="p-3 col-lg-4 col-md-6 col-sm-12" style={{ width: '100%', height: '50%', display: 'flex' }}>
                    <img src={img1} class="rounded" alt="..." />
                    <img src={img2} class="rounded" alt="..." />
                    <img src={img3} class="rounded" alt="..." />

                </div>
        </React.Fragment>
    )
}

export default Dasboard