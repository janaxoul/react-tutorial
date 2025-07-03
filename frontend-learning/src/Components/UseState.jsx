import React from 'react'

function UseState() {
    const[banned, setBanned]=useState(false)
    
    return (
    <div className='px-4 py-4'>
        <h1>{banned.toString()}</h1>
        <button onClick={()=>setBanned(!banned)} className='px-3 py-1 mt-2 rounded-full text-xs bg-blue-300'>Change State</button>
    </div>
        )
}

export default UseState