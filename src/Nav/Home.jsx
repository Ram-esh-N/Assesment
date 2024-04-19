import React, { useEffect } from 'react'
import "../Headercompo/Head.css"
import Aos from 'aos'
import 'aos/dist/aos.css'


export const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])
    return (
        <div>
            <div className="container-fluid p-4" id='m'>
                <div className="row">
                    <div className="col-sm-12 text-center" data-aos="fade-up">
                        <img id='img' className='w-50' src="https://storyblok-cdn.photoroom.com/f/191576/1200x800/0ec4c6d934/profile_picture_maker_after_.webp" alt="" />
                    </div>
                   
                </div>
            </div>
            <div className="container-fluid" id='m'>
                <div className="row">
            <div className="col-sm text-center bg-muted" data-aos="fade-up">
                        <h1 className='p-2 text-white'>Hello! I'm John doe
                            Software Developer
                        </h1>
                      
                    </div>
                </div>
            </div>
         
        </div>
    )
}
