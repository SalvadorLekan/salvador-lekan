import React, { useEffect, useRef } from 'react'
import { SiHtml5,
    SiCss3,SiJavascript,SiSass,SiBootstrap,SiReact,SiRedux,
    SiTailwindcss,SiGreensock,SiGithub } from 'react-icons/si'
import gsap from 'gsap'
import { ImAccessibility } from 'react-icons/im'
import { DiResponsive } from 'react-icons/di'

function About() {
    const ref = useRef(null)
    const under= useRef(null)
    useEffect(() => {
        gsap.from(ref.current.children,{duration:2,stagger:.5,opacity:0,y:20});
        gsap.from(under.current,{duration:4, css:{width:0}})
    }, [])





    return (
        <div className='pt-10'>
            <article ref={el=>ref.current=el} className='min-h-full flex flex-col'>
                <section className='inline-block self-start'><span className='text-xl sm:text-2xl font-semibold xl:text-3xl'>Salvador AbdulRahman Lekan</span><span ref={el=>under.current=el} className=' block w-full bg-red-600 h-1'></span></section>
                <section className='text-xl sm:text-2xl font-serif pt-1'>
                    <p>A front-end developer fluent in HTML5, CSS3, ES6 syntax.</p>
                    <p>I am also fluent in frameworks and libraries like SASS, React, Redux, Bootstrap, GSAP and TailwindCSS.</p> 
                </section>
                <section>
                    <p className='my-3 text-xl sm:text-2xl font-semibold xl:text-3xl'>
                        Languages.
                    </p>
                    <div className='flex flex-wrap justify-evenly'>
                        <section className='flex flex-col items-center'><SiHtml5 className='text-6xl text-red-400'/><p className='text-xl sm:text-2xl sm:font-semibold'>HTML5</p></section>
                        <section className='flex flex-col items-center'><SiCss3 className='text-6xl text-blue-600'/><p className='text-xl sm:text-2xl sm:font-semibold'>CSS3</p></section>
                        <section className='flex flex-col items-center'><SiJavascript className='text-6xl text-yellow-400'/><p className='text-xl sm:text-2xl sm:font-semibold'>ES6</p></section>
                    </div>
                </section>
                <section>
                    <p className='my-3 text-xl sm:text-2xl font-semibold xl:text-3xl'>
                        Frameworks.
                    </p>
                    <div className='flex flex-wrap justify-evenly'>
                        <section className='flex flex-col items-center'><SiSass className='text-6xl text-red-300'/><p className='text-xl sm:text-2xl sm:font-semibold'>SASS</p></section>
                        <section className='flex flex-col items-center'><SiReact className='text-6xl text-blue-900'/><p className='text-xl sm:text-2xl sm:font-bold'>React</p></section>
                        <section className='flex flex-col items-center'><SiGreensock className='text-6xl text-green-600'/><p className='text-xl sm:text-2xl sm:font-bold'>GSAP</p></section>
                        <section className='flex flex-col items-center'><SiBootstrap className='text-6xl text-purple-800'/><p className='text-xl sm:text-2xl sm:font-bold'>Bootstrap</p></section>
                        <section className='flex flex-col items-center'><SiRedux className='text-6xl text-purple-700'/><p className='text-xl sm:text-2xl sm:font-bold'>Redux</p></section>
                        <section className='flex flex-col items-center'><SiTailwindcss className='text-6xl text-green-500'/><p className='text-xl sm:text-2xl sm:font-bold'>TailwindCSS</p></section>
                    </div>
                </section>
                <section>
                    <p className='my-3 text-xl sm:text-2xl font-bold xl:text-3xl'>
                        Skills.
                    </p>
                    <p className='my-3 text-xl sm:text-2xl font-serif pt-1'>A result and detail oriented developer who is skilled in making websites accessible to all people. <br/> A team player who is open-minded to new technologies and ideas. <br/> An avid learner with the intention of building solutions to real life problems.</p>
                    <div className='flex flex-wrap justify-evenly'>
                        <section className='flex flex-col items-center'><DiResponsive className='text-6xl text-purple-700'/><p className='text-xl sm:text-2xl sm:font-bold'>Responsiveness</p></section>
                        <section className='flex flex-col items-center'><ImAccessibility className='text-6xl text-purple-700'/><p className='text-xl sm:text-2xl sm:font-bold'>Accessibility</p></section>
                        <section className='flex flex-col items-center'><SiGithub className='text-6xl text-black'/><p className='text-xl sm:text-2xl sm:font-bold'>Team Projects</p></section>
                    </div>
                </section>
            </article> 
        </div>
    )
}

export default About
