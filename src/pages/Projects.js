import gsap,{Power4} from 'gsap/gsap-core'
import React, { useEffect, useRef } from 'react'
import ProjectThumb from '../components/ProjectThumb'
import { CalculatorMin, GeoSearchBig, GeoSearchMin, CalculatorBig, PomoDoroMin, PomoDoroBig, RanqMin, RanqBig } from '../Images'

const projectLists=[
    {alt:'Geo Search',small:GeoSearchMin,big:GeoSearchBig,note:'A website used to search geo-location of places'},
    {alt:'Calculator App',small:CalculatorMin,big:CalculatorBig,note:'A website used to search geo-location of places'},
    {alt:'Pomodoro Clock',small:PomoDoroMin,big:PomoDoroBig,note:'A website used to search geo-location of places'},
    {alt:'Geo Search',small:RanqMin,big:RanqBig,note:'A website used to search geo-location of places'},
]


function Projects() {
    const ref = useRef(null)
    
    useEffect(() => {
        gsap.from(ref.current.children,{scale:0,duration:1,stagger:.2, ease:Power4.easeInOut})
    }, [])
    return (
        <div ref={el=>ref.current=el} className='p-10'>
            {projectLists.map(({...project},ind)=><ProjectThumb {...project} key={ind}/>)}
            <p className='text-gray-800 text-center'>You are at the end of the portfolio</p>
        </div>
    )
}

export default Projects
