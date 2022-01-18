import React from 'react';
import Navbar from './Navbar';
import dp from "./images/profile.jpg"
import { Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import Skill from './Skill';

const Main = () => {
    return (
        <>

            <div className="main-div ">
                {/* <div>  <Navbar /> </div> */}
               
                <div className='row mt-5 lg-w-100 sm-w-100 sm-d-grid sm-h-100' >
                    <div className='col lg-w-50 sm-w-100 mt-5 main-left-col'>
                        <p id='text-0'>Hello ! This is KAUSHAL KARki
                    
                        </p>
                        <h1 id='text-1' className='sm-w-100'>
                            FRONT END DEVELOPER
                        </h1>
                        <h3 id='text-2'>"I like to craft solid and scalable frontend products with greater user experiences"</h3>

                       <NavLink to={"/skills"}> <Button className='bg-danger' id='btn1'>PORTFOLIO</Button></NavLink>
                       {/* <a href={"../public/Resume2022.pdf"} download="Resume2022.pdf"><Button className='bg-danger' id='btn2'>DOWNLOAD RESUME</Button></a> */}
                    </div>
                    <div className='col w-50 main-right-col'>
                        <img src={dp} id='pic' alt="profile pic" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;
