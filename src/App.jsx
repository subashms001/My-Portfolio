import { Route, Routes,Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';



function App() {
  
  return(
  <>
    <Navbar/>
    <ScrollToTop/>
    
    <Routes>
      <Route path='/' element={<><Home/> <Contact/> </>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Projects' element={<Projects/>} />
      <Route path='/Skills' element={<Skills/>} />

    </Routes>

    

  </>
  );
  
}

export default App
