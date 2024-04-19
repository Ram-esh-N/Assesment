import React, { useEffect } from 'react'
import "../Headercompo/Head.css"
import Aos from 'aos';
import 'aos/dist/aos.css'

export const Project = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])
  return (
    <div className='border'>
<div className="container">
     <div className="row">
          <div className="col mt-5">
               <h1 className='mt ' id="Abou">Projects</h1>
               <hr />
          </div>
     </div>
</div>
        <div className="">
            <div className="image text-center">
                <div className="imgae-con rounded m-3" id='k' data-aos="fade-left">
                     <img className='border bg-inf' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcMBvx-gMtZtgxnVVIzrqGkKWXotpnNNDiCqMA1sawKJDYB1mGjADGxRuDohZEi-aUBM&usqp=CAU" alt="" />
                    <h3>Tech Stack</h3>
                    <span>Reactjs,Boostrap,Html</span>
                </div>
                <div className="imgae-con m-3" data-aos="fade-up">
                     <img className='border bg-inf' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qzgIM6RvzJD44OHF4-lxrL_MpwxwNycd2hsKrsS_DZ1m3nKf_XZ6N7bb_z_UT3VN-mY&usqp=CAU" alt="" />
                    <h3>Tech Stack</h3>
                    <span>Reactjs,Boostrap,Html</span>
                </div>
                <div className="imgae-con m-3" data-aos="fade-right">
                     <img className='border bg-inf'    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKVw_e7Mkg8vtU-hZ6a6PG_1VJYCOlP4zC9jJMh0V6T84msKmFfRJ6UO278Njln5LQiWE&usqp=CAU" alt="" />
                    <h3>Tech Stack</h3>
                    <span>Reactjs,Boostrap,Html</span>
                </div>
            </div>
        </div>

        <div className="">
            <div className="image text-center">
                <div className="imgae-con m-3" data-aos="fade-up">
                     <img className='border'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6OCOxnMtXUqaeIC3SIWkIBdf-Y7GRgXfgifnJu2BAeqgigZQY_3bv3hlUOcKhXkdIshg&usqp=CAU" alt="" />
                      <h3>Tech Stack</h3>
                    <span>Reactjs,Boostrap,Html</span>   
                </div>
                <div className="imgae-con m-3" data-aos="fade-up">
                     <img className='border' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrivr9QKmCrgMqV_VMNILsWsSwRIwj_KxpF7B8FUCIuY57F9qPuIiEgAy4Uw7lNmyVcU&usqp=CAU" alt="" />
                      <h3>Tech Stack</h3>
                    <span>Reactjs,Boostrap,Html</span>   
                </div>
                <div className="imgae-con m-3" data-aos="fade-up">
                     <img className='border' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ApEAEYgS6JjUYLP54OTjqzY2uzNI87QOi9lVbvXPU2HCa-dIcuzwmrbnw8BaPpSYpYo&usqp=CAU" alt="" />
                      <h3>Tech Stack</h3>
                    <span>Reactjs,Boostrap,Html</span>   
                </div>
            </div>
        </div>

        <div className="">
            <div className="image  text-center">
                <div className="imgae-con m-3" data-aos="fade-let">
                     <img className='border' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXN1P3h_Nyy_HLJYjaLCEIFfV9-50VhN-z3vwHgezKQAJg13uDs_kAWRbdtwPY54RLPDo&usqp=CAU" alt="" />
                      <h3>Tech Stack</h3>
                    <span>Reactjs,Boostrap,Html</span>    
                </div>
                <div className="imgae-con m-3" data-aos="fade-up">
                     <img className='border' height={165} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuDMsKAwp7dii4vt_Wm08ffvGulHEMagHuHU-sRtoxTcDtlMir5Ww_0WuaBhZ08dyatE&usqp=CAU" alt="" />
                      <h3>Tech Stack</h3>
                    <span >Reactjs,Boostrap,Html</span>    
                </div>
                <div className="imgae-con m-3" data-aos="fade-right">
                     <img className='border' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN8CPTJeisjajvhKPOtqJWfQnpjIi1cMgq3w46Zj894vF7L5dbr7OIO8tuYd-8pXiA_uE&usqp=CAU" alt="" />
                      <h3>Tech Stack</h3>
                    <span>Reactjs,Boostrap,Html</span>    
                </div>
            </div>
        </div>
    </div>
  )
}
