import React from 'react'

const About = () => {
    return (

        <div className="container  ">
            <div id="me-div " className='d-grid mt-5 '  >
                <p className='text-justify' id="me" >
                    Hello My name is Kaushal Karki. I am from Haldwani Uttarakhand. I have done graduation as Bachelor
                    of Science from Kumaun University Nainital in the year 2018. Currently I am pursuing Master in Computer Application from
                    <a className='text-decoration-none text-success' rel="noreferrer" href='https://www.gbpuat.ac.in/' target="_blank"> <u>Govind Ballabh Pant University of Agriculture and Technology</u></a>
                    , Pantnagar.

                </p>
                <p id="me">
                    I have done 3 Months <a className='text-decoration-none text-success' href='https://drive.google.com/file/d/1-Hwz_7DfOB835sjXlCXOYmO5RT3KvIAH/view?usp=sharing'
                        target="_blank" rel="noreferrer"><u>Internship</u> </a>
                    at Grey Scientific Labs (work from home) from September 2021 to December 2021.
                    During the internship I worked on Front End Development for that I used HTML, CSS, JavaScript and ReactJS.
                </p>

            </div>
            <div className='d-flex mt-lg-5 justify-content-center'>
                <h1>SOCIAL ACCOUNTS</h1>
            </div>
            <div className='row mt-lg-5  d-lg-flex d-sm-grid justify-content-between align-items-center'>


                <div className='col-lg-3 text-center text-danger  '>
                    <i className="zmdi zmdi-email mr-1"></i>
                    <span className='ml-3 '> kaushalkarki20@gmail.com</span>

                </div>
                <div className='col-lg-3 text-center'>
                    <a href='https://www.linkedin.com/in/kaushal-karki-a4137319b' className='text-decoration-none  text-primary' target="_blank" rel="noreferrer">
                        <i class="zmdi zmdi-linkedin"></i>
                        <span> LinkedIn</span>
                    </a>
                </div>
                <div className='col-lg-3 text-center'>
                    <a href='https://github.com/kaushalkarki' className='text-decoration-none  text-success' target="_blank" rel="noreferrer">
                        <i class="zmdi zmdi-github-alt"></i>
                        <span className='ml-3'> GitHub</span>
                    </a>
                </div>
                <div className='col-lg-3 text-center '>
                    <a href='https://www.hackerrank.com/kaushalkarki20' className='text-decoration-none  text-info' target="_blank" rel="noreferrer">
                        <i class="zmdi zmdi-code"></i>
                        <span> HackerRank</span>
                    </a>
                </div>
            </div>

        </div>


    )
}

export default About
