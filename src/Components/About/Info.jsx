import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Info = () => {
  useEffect(()=>{
    AOS.init({
      duration : 2000
    });
  },[])
  return (
    <div className="about__info grid" data-aos="fade-up">
        <div className="about__box">
            <i className='bx bx-code-alt about__icon' ></i><br/>
            <span className="about__subtitle">Effective in Debugging and Code Optimization.</span>
        </div>
        <div className="about__box">
            <i className='bx bxs-briefcase about__icon'></i><br/>
            <span className="about__subtitle">Flexible and Determined.</span>
        </div>
        <div className="about__box">
            <i className='bx bx-group about__icon'></i><br/> 
            <span className="about__subtitle">Open for Collabrations.</span>
        </div>
    </div>
  )
}

export default Info