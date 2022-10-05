import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Portfolio/Home/Home';
import About from './Portfolio/Home/About';
import Project from './Portfolio/Home/Project';

import Contact from './Portfolio/Home/Contact';

function App() {
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
