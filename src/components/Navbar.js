import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                    <a className="navbar-brand" href="home">PORTFOLIO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/skills">Skills</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
{/* 
                <div className=' div-nav'>
                    <div className='col-lg-6  w-70 h-10'>
                        <p id='title-text'> PORTFOLIO</p>
                    </div>
                    <div className='col w-30 d-flex inner-div'>
                        <li className='nav-items'>
                            <NavLink className="nl" to={"/"}> Home </NavLink>
                        </li>
                        <li className=' nav-items' text-decoration-none>
                            <NavLink className="nl" to={"/skills"} > Skills </NavLink>
                        </li>
                        <li className='nav-items'>
                            <NavLink className="nl" to={"/about"}> About </NavLink>
                        </li>
                        <li className='nav-items'>
                            <NavLink className="nl" to={"/contact"}> Contact </NavLink>
                        </li>
                    </div>
                </div> */}
            </nav>
        </>
    )
}

export default Navbar;
