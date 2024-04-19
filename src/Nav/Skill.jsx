import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import "../Headercompo/Head.css"
import Aos from 'aos';
import 'aos/dist/aos.css'


export const Skill = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])
    return (
        <div className='border p-4'>
            <div className="container p-4">
                <h1 className='mt-5' id='Abou'>Skils</h1>
                <hr />
                <div className="row">
                    <div className="col-sm-4" id='c' data-aos="fade-up">
                        <h1>HTML</h1>
                        {/* <input type="ratio" /> */}
                        <Form.Label className='text-primary'>85%</Form.Label>
                        <Form.Range />
                    </div>
                    <div className="col-sm-4" id='c' data-aos="fade-up">
                        <h1>CSS</h1>
                        <Form.Label className='text-primary'>85%</Form.Label>
                        <Form.Range />
                    </div>
                    <div className="col-sm-4" data-aos="fade-up">
                        <h1>JAVA SCRIPT</h1>
                        <Form.Label className='text-primary'>85%</Form.Label>
                            <Form.Range />  
                    </div>
                </div>
            </div>

            <div className="container p-4">
                <div className="row">
                    <div className="col-sm-4" data-aos="fade-up">
                        <h1>BOOSTRAP</h1>
                        {/* <input type="ratio" /> */}
                        <Form.Label className='text-primary'>75%</Form.Label>
                        <Form.Range />
                    </div>
                    <div className="col-sm-4" data-aos="fade-up">
                        <h1>TAILWIND</h1>
                        <Form.Label className='text-primary'>85%</Form.Label>
                        <Form.Range />
                    </div>
                    <div className="col-sm-4" data-aos="fade-up">
                        <h1>REACT JS</h1>
                        <Form.Label className='text-primary'>85%</Form.Label>
                            <Form.Range />  
                    </div>
                </div>
            </div>

            <div className="container p-4">
                <div className="row">
                    <div className="col-sm-4" data-aos="fade-up">
                        <h1>VERSEL</h1>
                        {/* <input type="ratio" /> */}
                        <Form.Label className='text-primary'>95%</Form.Label>
                        <Form.Range />
                    </div>
                    <div className="col-sm-4" data-aos="fade-up">
                        <h1>GIT UP</h1>
                        <Form.Label className='text-primary'>95%</Form.Label>
                        <Form.Range />
                    </div>
                    <div className="col-sm-4" data-aos="fade-up">
                        <h1>Redex</h1>
                        <Form.Label className='text-primary'>95%</Form.Label>
                            <Form.Range />  
                    </div>
                </div>
            </div>
        </div>

    )
}
