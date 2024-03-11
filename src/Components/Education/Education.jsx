import React, { useState, useEffect } from 'react'
import './Education.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Education = () => {
    const[toggle,setToggle]=useState(1)
    const toggleTab = (index) =>{
        setToggle(index);
    }
    useEffect(()=>{
        AOS.init({
          duration : 2000
        });
      },[])


  return (
    <section className={toggle === 1 ? "qualification section" : "qualification qualification__bottom section"} id='education'>
        <h2 className="section__title" data-aos="fade-down">Education and Experience</h2>
        <span className="section__subtitle" data-aos="fade-down">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggle === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={()=> toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> {" "}Education
                </div>
                <div className={toggle === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={()=> toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> {" "}Experience
                </div>
            </div>

            <div className="qualification__sections" data-aos="zoom-in">
                <div className={toggle === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Under Graduation, BTech-IT</h3>
                            <span className="qualification__subtitle">Meenakshi Sundararajan Engineering College,Chennai</span><br/>
                            <span className="qualification__subtitle">GPA : 9.1</span>
                            <div className="qualification__calender">
                                <i className='uil uil-calendar-alt'></i> 2019-2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span> 
                        </div>
                        <div>
                            <h3 className="qualification__title">Grade 12</h3>
                            <span className="qualification__subtitle">Achyuta Public School CBSE, Dindigul</span><br/>
                            <span className="qualification__subtitle">Percentage : 84%</span>
                            <div className="qualification__calender">
                                <i className='uil uil-calendar-alt'></i> 2018-2019
                            </div>
                        </div>
                        
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Grade 10</h3>
                            <span className="qualification__subtitle">Achyuta Public School CBSE, Dindigul</span><br/>
                            <span className="qualification__subtitle">CGPA : 10</span>
                            <div className="qualification__calender">
                                <i className='uil uil-calendar-alt'></i> 2016-2017
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>

                <div className={toggle === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data" >
                        <div>
                            <h3 className="qualification__title">Project Intern - Full Stack Developer</h3>
                            <span className="qualification__subtitle">Virtusa Consulting Services Pvt Ltd,Chennai</span><br/>
                            <div className="qualification__calender">
                                <i className='uil uil-calendar-alt'></i> 03/2023 - 06/2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education