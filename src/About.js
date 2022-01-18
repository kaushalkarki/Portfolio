import React from 'react'
import Navbar from './Navbar'

const About = () => {
    return (
        <div>
             <div className="about-div d-grid w-100">
                <div>  <Navbar /> </div>
                <div id="me-div">
                    <p id="me" >
                        Hello My name is Kaushal Karki. I am from Haldwani Uttarakhand. I have done graduation as Bachelor
                         of Science from Kumaun University Nainital in the year 2018. Currently I am pursuing Master in Computer Application from Govind 
                         Ballabh Pant University of Agriculture and Technology.


                    </p>
                    <p id="me">
                            I have done 3 Months Internship at Grey Scientific Labs (work from home) from September 2021 to December 2021. 
                        During the internship I worked on Front End Development for that I used HTML, CSS, JavaScript and ReactJS. 
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About
