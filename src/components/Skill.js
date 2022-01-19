import React from 'react'
import { ProgressBar } from "react-bootstrap"
const Skill = () => {

    // const[myState,setMyState]=useState[(0)]
    return (
        <div className="skills-div d-grid w-100">
            <div className='row w-100'>
                <div className='col skills-col '>
                    <ul>
                        <li className='skill-list'>HTML
                            <ProgressBar className='bars'  variant="info" animated="true" min={0}  now={90} label={`90%`} />
                        </li>
                        <li className='skill-list'>CSS
                            <ProgressBar className='bars' variant="info" animated="true" now={90} label={`90%`}/>

                        </li>
                        <li className='skill-list'>JavaScript
                            <ProgressBar className='bars' variant="info" animated="true" now={70} label={`70%`}/>

                        </li>
                        <li className='skill-list'>ReactJS
                            <ProgressBar className='bars' variant="info" animated="true" now={70} label={`70%`}/>
                        </li>
                        <li className='skill-list'>C
                            <ProgressBar className='bars' variant="info" animated="true" now={80} label={`80%`}/>
                        </li>



                    </ul>

                </div>
                <div className='col skills-col  '>
                    <ul>
                    <li className='skill-list'>Java
                        <ProgressBar className='bars' variant="info" animated="true" now={70} label={`70%`}/>
                    </li>
                    <li className='skill-list'>NodeJS
                        <ProgressBar className='bars' variant="info" animated="true" now={50} label={`50%`}/>
                    </li>

                    <li className='skill-list'>MongoDB
                        <ProgressBar className='bars' variant="info" animated="true" now={70}label={`70%`} />
                    </li>

                    <li className='skill-list'>MySQL
                        <ProgressBar className='bars' variant="info" animated="true" now={75} label={`75%`}/>
                    </li>

                    <li className='skill-list'>Git
                        <ProgressBar className='bars' variant="info" animated="true" now={70}label={`70%`} />
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skill;