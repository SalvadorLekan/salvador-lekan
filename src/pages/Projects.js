import gsap,{Power4} from 'gsap/gsap-core'
import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import ProjectThumb from '../components/ProjectThumb'

import { CalculatorMin, GeoSearchBig, GeoSearchMin, CalculatorBig, PomoDoroMin, PomoDoroBig, RanqMin, RanqBig } from '../Images'

const projectLists=[
    {alt:'Geo Search',small:GeoSearchMin,big:GeoSearchBig,note:'A website used to search geo-location of places', link:'https://salva-geo-search.netlify.app/'},
    {alt:'Calculator App',small:CalculatorMin,big:CalculatorBig,note:'A Simple Calculator app using Vanilla JS', link:'https://salva-calcu.netlify.app/'},
    {alt:'Pomodoro Clock',small:PomoDoroMin,big:PomoDoroBig,note:'A Productivity timer using React and CSS3', link:'https://pomo-doro.netlify.app/'},
    {alt:'Geo Search',small:RanqMin,big:RanqBig,note:'A Random Quote Generator', link:'https://ranq.netlify.app/'},
]


function Projects() {
    const ref = useRef(null)
    const history=useHistory()
    
    useEffect(() => {
        gsap.from(ref.current.children,{scale:0,duration:1,stagger:.2, ease:Power4.easeInOut})
    }, [])
    return (
        <div ref={el=>ref.current=el} className='p-10'>
            {projectLists.map(({...project},ind)=><ProjectThumb {...project} key={ind}/>)}
            <p className='text-gray-800 text-center'>You are at the end of the portfolio</p>
            <button onClick={()=>history.push('/contact')} className='py-1 px-3 bg-red-400 text-black font-bold text-xl rounded-lg hover:bg-red-900 hover:text-white mx-auto block'>Get in Touch.</button>
        </div>
    )
}

export default Projects
