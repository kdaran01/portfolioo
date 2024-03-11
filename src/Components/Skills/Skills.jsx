import React, { useEffect } from 'react'
import './Skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {
  useEffect(()=>{
    AOS.init({
      duration : 2000
    });
  },[])
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title" data-aos="fade-down">My Skills</h2>
        <span className="section__subtitle" data-aos="fade-down">My Technical Level</span>

        <div className="skills__container container grid" data-aos="fade-up">
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}

export default Skills