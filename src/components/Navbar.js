import React,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const [menu, setMenu] = useState(true);
    const MenuToggler = () => {

        if (!menu) {
            setMenu(true)
        } else
            setMenu(false)
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid  ">
                    <a className="navbar-brand" href="home">PORTFOLIO</a>
                   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" onClick={MenuToggler}></span>
                        </button>
                        <div className='navbar-collapse ' id={menu === false ? "" : "menu-show"}>
                        <ul className="navbar-nav ml-auto " onClick={MenuToggler}>
                            <li className="nav-item ">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/skills">Skills</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
                            </li>
                           

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
