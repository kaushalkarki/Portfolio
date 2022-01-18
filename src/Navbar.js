import React from 'react'
import "./style.css";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <>

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
            </div>

        </>
    )
}

export default Navbar;
