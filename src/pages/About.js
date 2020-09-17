import React from 'react'
import { SiHtml5,SiCss3,SiJavascript,SiSass,SiBootstrap,SiReact,SiRedux,SiTailwindcss,SiGreensock } from 'react-icons/si'

function About() {
    return (
        <div className='pt-10'>
            <article className='min-h-full flex flex-col'>
                <section className='inline-block self-start'><span className='sm:text-2xl font-bold xl:text-3xl'>Salvador AbdulRahman Lekan</span><span className=' block w-full bg-red-600 h-1'></span></section>
                <section className='xl:sm:text-2xl font-serif pt-1'>
                    <p>A front-end developer fluent in HTML5, CSS3, ES6 syntax.</p>
                    <p>I am also fluent in frameworks and libraries like SASS, React, Redux, Bootstrap, GSAP and TailwindCSS.</p> 
                </section>
                <section>
                    <p className='sm:text-2xl font-bold xl:text-3xl'>
                        Languages.
                    </p>
                    <div className='flex flex-wrap justify-evenly'>
                        <section className='flex flex-col items-center'><SiHtml5 className='text-6xl text-red-400'/><p className='sm:text-xl sm:font-bold'>HTML5</p></section>
                        <section className='flex flex-col items-center'><SiCss3 className='text-6xl text-blue-600'/><p className='sm:text-xl sm:font-bold'>CSS3</p></section>
                        <section className='flex flex-col items-center'><SiJavascript className='text-6xl text-yellow-400'/><p className='sm:text-xl sm:font-bold'>ES6</p></section>
                    </div>
                </section>
                <section>
                    <p className='sm:text-xl sm:font-bold font-bold xl:text-3xl'>
                        Frameworks.
                    </p>
                    <div className='flex flex-wrap justify-evenly'>
                        <section className='flex flex-col items-center'><SiSass className='text-6xl text-red-300'/><p className='sm:text-xl sm:font-bold'>SASS</p></section>
                        <section className='flex flex-col items-center'><SiReact className='text-6xl text-blue-900'/><p className='sm:text-xl sm:font-bold'>React</p></section>
                        <section className='flex flex-col items-center'><SiGreensock className='text-6xl text-green-600'/><p className='sm:text-xl sm:font-bold'>GSAP</p></section>
                        <section className='flex flex-col items-center'><SiBootstrap className='text-6xl text-purple-800'/><p className='sm:text-xl sm:font-bold'>Bootstrap</p></section>
                        <section className='flex flex-col items-center'><SiRedux className='text-6xl text-purple-700'/><p className='sm:text-xl sm:font-bold'>Redux</p></section>
                        <section className='flex flex-col items-center'><SiTailwindcss className='text-6xl text-green-500'/><p className='sm:text-xl sm:font-bold'>TailwindCSS</p></section>
                    </div>
                </section>
                {/* <section>
                    <p className='sm:text-xl sm:font-bold font-bold xl:text-3xl'>
                        Skills.
                    </p>
                    <div className='flex flex-wrap justify-evenly'>
                        <section className='flex flex-col items-center'><p className='sm:text-xl sm:font-bold'></p></section>
                        <section className='flex flex-col items-center'><p className='sm:text-xl sm:font-bold'></p></section>
                        <section className='flex flex-col items-center'><p className='sm:text-xl sm:font-bold'></p></section>
                    </div>
                </section> */}
            </article> 
        </div>
    )
}

export default About
