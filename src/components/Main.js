import React from 'react';
import dp from "../images/profile.jpg"
import { Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const Main = () => {
    return (
        <>

            <div className="contaniner main-div d-lg-flex d-sm-grid w-100    ">
                {/* <div>  <Navbar /> </div> */}
               
                <div className='row  d-lg-flex  sm-d-grid align-items-center' >
                    <div className='col-lg-6  mt-lg-5 '>
                        <p id='text-0'>Hello ! This is KAUSHAL KARki
                    
                        </p>
                        <h1 id='text-1' className=''>
                            FRONT END DEVELOPER
                        </h1>
                        <h3 id='text-2'>"I like to craft solid and scalable frontend products with greater user experiences"</h3>

                       <Button className=' d-flex mx-auto my-5' id='btn1'> <NavLink className="btn1" to={"/skills"}>PORTFOLIO</NavLink></Button>
                       {/* <a href={"../public/Resume2022.pdf"} download="Resume2022.pdf"><Button className='bg-danger' id='btn2'>DOWNLOAD RESUME</Button></a> */}
                    </div>
                    <div className='col-lg-6 mt-lg-5 '>
                        <img src={dp} id='pic' className="d-flex mx-auto my-auto" alt="profile pic" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;
