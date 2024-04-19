import React, { useEffect } from 'react'
import "../Headercompo/Head.css"
import Aos from 'aos';
import 'aos/dist/aos.css'

export const TimeLine = () => {
 
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='border p-1' id='skil'>
      <div className="container">
      <h1 className='mt-3' id='Abou'>TimeLine</h1>
      <hr />
        <div className="row">
          <div className="col-sm-12 mt-4">
          <ul class="timeline" className=''>
        <li class="timeline-item">
          <div class="timeline-item-content" data-aos="fade-up">
            <span class="timeline-item-date">2020-01-01</span>
            <h5>
              Backend Developer</h5>
            <p>Contributed to the development of a new social networking platform targeting niche communities.</p>
          </div>
        </li>
        <li class="timeline-item">
          <div class="timeline-item-content" data-aos="fade-up">
            <span class="timeline-item-date">2020-03-15</span>
            <h5>
             Software Developer</h5>
            <p>Contributed to the development of a new social networking platform targeting niche communities.</p>
          </div>
        </li>
        <li class="timeline-item">
          <div class="timeline-item-content" data-aos="fade-up">
            <span class="timeline-item-date">2020-06-30</span>
            <h5>
              FullStack  Developer</h5>
            <p>Contributed to the development of a new social networking platform targeting niche communities.</p>
          </div>
        </li>
        <li class="timeline-item">
          <div class="timeline-item-content" data-aos="fade-up">
            <span class="timeline-item-date">2020-06-30</span>
            <h5>
              FullStack  Developer</h5>
            <p>Contributed to the development of a new social networking platform targeting niche communities.</p>
          </div>
        </li>
        <li class="timeline-item">
          <div class="timeline-item-content" data-aos="fade-up">
            <span class="timeline-item-date">2020-01-01</span>
            <h5>
              Backend Developer</h5>
            <p>Contributed to the development of a new social networking platform targeting niche communities.</p>
          </div>
        </li>
      </ul>
          </div>
        </div>
      </div>
  
    </div>
  )
}
