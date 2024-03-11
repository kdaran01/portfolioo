import React ,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Social = () => {
  useEffect(()=>{
    AOS.init({
      duration:2000
    });
  },[])
  return (
    <div className="home__social" data-aos="fade-right">
        <a href="https://www.linkedin.com/in/keerthidharan-t-890030179" className="home__social-icon" target='_blank'>
            <i class='bx bxl-linkedin-square' ></i>
        </a>
        <a href="https://github.com/" className="home__social-icon" target='_blank'>
            <i className='uil uil-github-alt'></i>
        </a>
        <a href="https://www.instagram.com" className="home__social-icon" target='_blank'>
            <i className='uil uil-instagram'></i>
        </a>
    </div>
  )
}

export default Social