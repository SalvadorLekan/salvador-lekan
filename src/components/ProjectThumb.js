import React from 'react'

function ProjectThumb({small,big,note,alt}) {
    return (
        <div className='max-w-full grid my-2'>
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