import React, { useRef,useEffect } from 'react'
import gsap from 'gsap'
import { random,Bounce } from 'gsap/gsap-core'

function Home() {
    const ref = useRef(null)

    useEffect(() => {
        gsap.from(ref.current.children,{duration:1,x: `${random(-100, 100)}vh`, opacity:0,stagger:.5, ease:Bounce.easeOut})
    }, [])

    return (
    <div ref={el=>ref.current=el} className='w-auto font-bold p-4 sm:p-0 min-h-full inline-flex flex-col justify-center'>
        <p className='text-3xl'> Hi,</p>
        <h1 className='text-4xl my-1 p-0 md:text-5xl xl:text-6xl'>I'm Salvador A 'Lekan.</h1>
        <p className='text-3xl text-right'>A Web Developer.</p>
     </div>
    )
}

export default Home
