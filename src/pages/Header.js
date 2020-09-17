import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';


function Header() {
    const [hide, sethide] = useState(true)
    return (
        <header className='px-2 pt-0 absolute top-0 w-full z-10'>
     <nav id="navbar">
  <Link to='/' className='hidden md:block' id="logo"><img src={Logo} alt='logo' className='pr-1'/> <span className=' sm:hidden'>SalvadorLekan</span> </Link>
        <div id="lg-menu">
                <ul>
                    
                    <li><NavLink to="/about" activeStyle={{fontWeight: "bold",color: "navy"}}>About</NavLink></li>
                    <li><NavLink to="/exp" activeStyle={{fontWeight: "bold",color: "navy"}}>Experience</NavLink></li>
                    <li><NavLink to="/projects" activeStyle={{fontWeight: "bold",color: "navy"}}>Work</NavLink></li>
                    <li><NavLink to="/contact" activeStyle={{fontWeight: "bold",color: "navy"}}>Contact</NavLink></li>
                    <li><NavLink onClick={e=>e.preventDefault()} className='box-border border-dashed border-4 border-pink-800 rounded-full' to="/resume" activeStyle={{fontWeight: "bold",color: "navy"}}>Resume</NavLink></li>
                </ul>
            <div id="toggler" className='animate-shake' onClick={()=>{sethide(false)}}>&#9776;</div>
        </div>
    </nav>
    <div id="sm-menu" className={hide?"hide":''}>
        <div id="hider" onClick={()=>{sethide(true)}}>&times;</div>
        <ul>
            <li><NavLink to="/about" activeStyle={{fontWeight: "bold",color: "navy"}}>About</NavLink></li>
            <li><NavLink to="/exp" activeStyle={{fontWeight: "bold",color: "navy"}}>Experience</NavLink></li>
            <li><NavLink to="/projects" activeStyle={{fontWeight: "bold",color: "navy"}}>Work</NavLink></li>
            <li><NavLink to="/contact" activeStyle={{fontWeight: "bold",color: "navy"}}>Contact</NavLink></li>
            <li><NavLink className='border-dashed border-4 border-pink-800 rounded-full' to="/">Resume</NavLink></li>
        </ul>
    </div>
     </header>
    )
}

export default Header
