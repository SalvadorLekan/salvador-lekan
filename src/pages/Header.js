import gsap from 'gsap/gsap-core';
import React,{useState,useRef} from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom';
import Logo from '../assets/logo.png';


function Header() {
    const history=useHistory().location.pathname
    const [hide, sethide] = useState(true)
    const ref = useRef(null)
    return (
        <header className='px-2 pt-0 absolute top-0 w-full z-10'>
     <nav id="navbar">
  <Link to='/' className='flex p-1 text-xl font-bold' id="logo"><img src={Logo} alt='logo' className='pr-1'/> <span className=' sm:hidden'>SalvadorLekan</span> </Link>
        <div id="lg-menu">
                <ul>
                    
                    <li><NavLink to="/about" activeStyle={{fontWeight: "bold",color: "navy"}}>About</NavLink></li>
                    <li><NavLink to="/exp" activeStyle={{fontWeight: "bold",color: "navy"}}>Experience</NavLink></li>
                    <li><NavLink to="/projects" activeStyle={{fontWeight: "bold",color: "navy"}}>Work</NavLink></li>
                    <li><NavLink to="/contact" activeStyle={{fontWeight: "bold",color: "navy"}}>Contact</NavLink></li>
                    {/* <li><NavLink onClick={e=>e.preventDefault()} className='box-border border-SOLID border-4 border-pink-800 rounded-full' to="/resume" activeStyle={{fontWeight: "bold",color: "navy"}}>Resume</NavLink></li> */}
                </ul>
            <div id="toggler" className={history==='/'?'animate-shake':''} onClick={()=>{sethide(false);gsap.from(ref.current.children,{duration:1,stagger:.1,x:300})}}>&#9776;</div>
        </div>
    </nav>
    <div id="sm-menu" className={hide?"hide":''} onClick={()=>{sethide(true)}}>
        <div id="hider">&times;</div>
        <ul ref={el=>ref.current=el}>
            <li><NavLink to="/about" activeStyle={{fontWeight: "bold",color: "navy"}}>About</NavLink></li>
            <li><NavLink to="/exp" activeStyle={{fontWeight: "bold",color: "navy"}}>Experience</NavLink></li>
            <li><NavLink to="/projects" activeStyle={{fontWeight: "bold",color: "navy"}}>Work</NavLink></li>
            <li><NavLink to="/contact" activeStyle={{fontWeight: "bold",color: "navy"}}>Contact</NavLink></li>
            {/* <li><NavLink onClick={e=>e.preventDefault()} className='border-solid border-4 border-pink-800 rounded-full' to="/">Resume</NavLink></li> */}
        </ul>
    </div>
     </header>
    )
}

export default Header
