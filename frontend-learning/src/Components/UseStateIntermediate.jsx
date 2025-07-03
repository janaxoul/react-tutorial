import React from 'react'

function UseStateIntermediate() {
  const[val,setVal]=useState(12)
    return (
    <div className='p-4'>
        <h1>{val}</h1>
        <button onClick={()=>setVal((prev)=>prev+1)} className='py-1 px-2 rounded-full bg-blue-400 '>change karo</button>
    </div>
    )
}

export default UseStateIntermediate