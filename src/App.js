import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Portfolio/Home/Home';
import About from './Portfolio/Home/About';
import Project from './Portfolio/Home/Project';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Contact from './Portfolio/Home/Contact';

import { useEffect, useState } from 'react';
import './App.css'
import { Example } from './Portfolio/axample/Example';
import {BsFillFileArrowUpFill} from 'react-icons/bs'
import {motion} from 'framer-motion'

function App() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScrollButton = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false)
    }
    window.addEventListener('scroll', handleScrollButton)
    return () => {
      window.removeEventListener('scroll', handleScrollButton)
    }
  }, [])

  const handleScrollToTop = () => {
    window.scroll({top: 0, behavior: 'smooth'})
  }

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <Example />
      {
        showButton && (
          <div className={`ScrollToTop`}>
            <motion.button 
            whileHover={{scale: 1.2}}
            className='fixed bottom-20 right-7 cursor-pointer z-50 p-4 ' onClick={handleScrollToTop}>
              <BsFillFileArrowUpFill className='text-5xl text-blue-600'/>
            </motion.button>
          </div>
        )
      }

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Project />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
