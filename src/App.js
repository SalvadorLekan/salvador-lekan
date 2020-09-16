import React, { useState } from 'react';
import Home from './pages/Home';
import Logo from './assets/logo.png';

function App() {
  const [hide, sethide] = useState(true)


  return (
    <div className="container h-screen relative bg-blue-400 flex justify-center">
     
     <Home/>


     <header className='absolute top-0 w-full z-10'>
     <nav id="navbar">
  <div id="logo"><img src={Logo} alt='logo' className='px-1'/> <span className=' sm:hidden'>SalvadorLekan</span> </div>
        <div id="lg-menu">
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Experience</a></li>
                    <li><a href="/">Work</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Resume</a></li>
                </ul>
            <div id="toggler" className='animate-shake' onClick={()=>{sethide(false)}}>&#9776;</div>
        </div>
    </nav>
    <div id="sm-menu" className={hide?"hide":''}>
        <div id="hider" onClick={()=>{sethide(true)}}>&times;</div>
        <ul>
            <li><a href="/">About</a></li>
            <li><a href="/">Experience</a></li>
            <li><a href="/">Work</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Resume</a></li>
        </ul>
    </div>
     </header>
    </div>
  );
}

export default App;
