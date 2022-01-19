import React from 'react';
import dp from "../images/profile.jpg"
import { Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const Main = () => {
    return (
        <>

            <div className="contaniner main-div  ">
                {/* <div>  <Navbar /> </div> */}
               
                <div className='row  lg-d-flex  sm-d-grid ' >
                    <div className='col    main-left-col'>
                        <p id='text-0'>Hello ! This is KAUSHAL KARki
                    
                        </p>
                        <h1 id='text-1' className=''>
                            FRONT END DEVELOPER
                        </h1>
                        <h3 id='text-2'>"I like to craft solid and scalable frontend products with greater user experiences"</h3>

                       <NavLink to={"/skills"}> <Button className='bg-danger' id='btn1'>PORTFOLIO</Button></NavLink>
                       {/* <a href={"../public/Resume2022.pdf"} download="Resume2022.pdf"><Button className='bg-danger' id='btn2'>DOWNLOAD RESUME</Button></a> */}
                    </div>
                    <div className='col sm-pl-3 sm-pr-3  main-right-col'>
                        <img src={dp} id='pic' alt="profile pic" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;
