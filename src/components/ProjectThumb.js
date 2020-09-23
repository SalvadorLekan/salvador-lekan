import React from 'react'

function ProjectThumb({small,big,note,alt,link}) {
    return (
        <div className='max-w-full p-5 justify-center grid my-10 cursor-pointer shadow-xl md:shadow-none rounded-lg text-center hover:shadow-lg' onClick={()=>{
             window.location = link; return null;
        }}>
            <picture>
                <source media='(max-width:650px)' srcSet={small}/>
                <source media='(min-width:651px)' srcSet={big}/>
                <img src={small} alt={alt}/>
            </picture>
            <div>
                <h2 className='font-medium md:font-semibold text-2xl md:text-3xl'>{alt}</h2>
                <p className='text-xl md:text-2xl'>{note}</p>
            </div>
        </div>
    )
}

export default ProjectThumb
