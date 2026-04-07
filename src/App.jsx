import { Route, Routes,Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Navbar from './components/Navbar';
import { useState } from 'react';



function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  
  return(
  <>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Projects' element={<Projects/>} />
      <Route path='/Skills' element={<Skills/>} />
      <Route path='/Contact' element={<Contact/>} />

    </Routes>

  </>
  );
  
}

export default App
