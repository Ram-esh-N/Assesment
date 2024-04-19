import React, { useEffect } from 'react'
import "../Headercompo/Head.css"
import Aos from 'aos'
import 'aos/dist/aos.css'

export const About = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])
    return (
        <div className='border' id='skill'>
            <div className="container" id='About'>
                <div className="row">
                    <div className="col-sm-12" data-aos="fade-up">
                        <h2 className='mt-5 p-2'>About me</h2>
                        <hr className=''/>
                        <p className='p-2'>As a React developer with 5 years of experience, I have honed my skills in JavaScript and am currently learning TypeScript to expand my expertise. I pride myself on being a quick learner and attentive listener, which allows me to collaborate effectively with clients to create efficient and scalable solutions. My focus is on developing user-friendly applications that solve real-world problems.</p>
                        <br />
                        <p className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quos saepe tenetur sunt natus eum dolore reprehenderit, rem voluptate quia aspernatur numquam necessitatibus labore quod.</p>
                        <br />
                        <p className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quos saepe tenetur sunt natus eum dolore reprehenderit, rem voluptate quia aspernatur numquam necessitatibus labore quod.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
