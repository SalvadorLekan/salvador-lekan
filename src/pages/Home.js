import React, { useRef,useEffect } from 'react'
import { random, Power3 } from 'gsap/gsap-core'
import { useHistory } from 'react-router-dom'
import tl from '../tl'


function Home() {
    const pushTo=location=>history.push(location)
    const ref = useRef(null)
    const history = useHistory()
    
    useEffect(() => {
        tl
        .from(ref.current.children,{duration:.5,x: `${random(-100, 100)}vh`, opacity:0,stagger:.3, ease:Power3.easeOut})
        .from('.boxx', {opacity:0, duration:.5, y:100, stagger:.3, ease:Power3.easeInOut})
    }, [])

    return (
    <div ref={el=>ref.current=el} className='w-auto font-bold p-4 sm:p-0 min-h-full inline-flex flex-col justify-center'>
        <p className='text-3xl'> Hi,</p>
        <h1 className='text-4xl my-1 p-0 md:text-5xl xl:text-6xl'>I'm Salvador A 'Lekan.</h1>
        <p className='text-3xl text-right'>A Web Developer.</p>

        <div className='flex flex-wrap justify-evenly mt-10'>
            <button className='py-2 px-4 text-gray-200 hover:bg-green-700 font-semibold mb-4 hover:text-gray-100 rounded-lg bg-green-800 boxx' onClick={()=>pushTo('/projects')}>View My Projects</button>
            <button className='py-2 px-4 text-gray-200 hover:bg-green-700 font-semibold mb-4 hover:text-gray-100 rounded-lg bg-green-800 boxx' onClick={()=>pushTo('/contact')}>Contact Me.</button>
        </div>
     </div>
    )
}

export default Home
