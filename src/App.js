import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Portfolio/Home/Home';
import About from './Portfolio/Home/About';
import Project from './Portfolio/Home/Project';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Contact from './Portfolio/Home/Contact';

import { useEffect } from 'react';
import './App.css'

function App() {
  
  useEffect(() => {
    AOS.init();
  },[])

  return (
    <div>
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
