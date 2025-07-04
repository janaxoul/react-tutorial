import React from 'react'

function PassingDataProp({image, name, job}) {
    return (
        <div className='w-52 bg-zinc-300 rounded-md overflow-hidden'>
            <div className='w-full h-52 bg-sky-200'>
                <img className='w-full h-full object-cover' src={image} alt={name} />
            </div>
            <div className='w-full p-3'>
                <h3 className='text-xl font-semibold'>{name}</h3>
            <h5 className='text-xs'>{job}</h5>
                <button className='px-3 py-1 text-xs text-white bg-blue-400 font-semibold mt-4 rounded-md'>Add Friend</button>
            </div>
        </div>
    )
}

export default PassingDataProp