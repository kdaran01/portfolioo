import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Education from './Components/Education/Education'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Project from './Components/Projects/Project'
import Skills from './Components/Skills/Skills'

function App() {
  return (
   <div>
    <Header />
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Education />
      <Project />
      <Contact />
    </main>
    
   </div>
  )
}

export default App
