import React, { useEffect } from 'react'
import './Project.css'
import portfolio from '../../assets/portfolio.png'
import tour from '../../assets/tour.png'
import chatgpt from '../../assets/chatgpt.png'
import chatbot from '../../assets/chatbot.png'
import railway from '../../assets/railway.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import railway_demo from "../../assets/railway_demo.pdf"

const Project = () => {
    useEffect(()=>{
        AOS.init({
          duration : 2000
        });
      },[])

    const data = [
        {
            img : portfolio,
            title : "My first Portfolio",
            subtitle : "My personal responsive portfolio using HTML, CSS, JavaScript.",
            link : "https://kdaran01.github.io/portfolio/"
        },
        {
            img : chatgpt,
            title : "ChatGPT Clone",
            subtitle : "An interactive AI web application using ChatGPT API.",
            link : "https://clonegpt-lake.vercel.app/"
        },
        {
            img : tour,
            title : "Tour and Travel Website",
            subtitle : "A responsive ReactJs Web application for Tour Agency",
            link : "https://tour-sable-phi.vercel.app/"
        },
        {
            img : railway,
            title : "Railway Reservation System",
            subtitle: "A Java application which allows users to book train tickets",
            link : railway_demo
        },
        {
            img : chatbot,
            title: "An interactive ChatBot",
            subtitle : "A Python application which makes use of Python Libraries to create a ChatBot",
            link: ""
        }

    ]
  return (
    <section className='project section' id='projects'>
        <h2 className="section__title" data-aos="fade-down">Projects</h2>
        <span className="section__subtitle" data-aos="fade-down">My Recent Works</span>

        <div className="project__container container grid">
            {data.map((item)=>{
               return(
                <div className="project__box" data-aos="fade-up">
                <div className="project__data">
                    <img src={item.img} alt="" className='project__img'/>
                    <div className="project__title">{item.title}</div>
                    <div className="project__subtitle">{item.subtitle}</div>
                    <div>
                      <a href={item.link} className="project__link" target='_blank'>Demo</a>
                      <i className="uil uil-angle-right project__icon"></i>
                    </div>
                    
                </div>
            </div>
               )
            })}
            
        </div>

    </section>
  )
}

export default Project