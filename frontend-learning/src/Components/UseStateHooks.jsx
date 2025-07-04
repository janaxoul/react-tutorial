import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";


function UseStateHooks() {
    const [val,setval]=useState(false)
    return (
        <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
            <div className="relative flex w-60 h-32 bg-zinc-500 rounded overflow-hidden">
                <img className={`shrink-0 transition-transform duration-1000 ease-in-out ${val===false? "-translate-x-[0%]": "-translate-x-[100%]"} w-full h-full object-cover`} src="https://cdn.pixabay.com/photo/2012/11/01/02/13/glacier-bay-63727_1280.jpg" alt="" />
                <img className={`shrink-0 transition-transform duration-1000 ease-in-out ${val===false? "-translate-x-[0%]": "-translate-x-[100%]"} w-full h-full object-cover`} src="https://cdn.pixabay.com/photo/2022/05/10/14/37/glacier-7187291_1280.jpg" alt="" />
                <span onClick={()=>setval(()=>!val)} className='w-10 h-10 flex items-center justify-center rounded-full bg-[#dadada8b] absolute bottom-[2%] left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <FaArrowRight size={".8em"}/>
                </span>
            </div>
        </div>
    )
}

export default UseStateHooks






// function UseStateHooks() {
//     const[val, setVal]=useState(true);
//     return (
//         <div>
//         <h1>
//             {val?"Go on":"Don't Go"}
//         </h1>
//         <button onClick={()=>{
//             setVal((elem)=>!elem)
//             }}
//         className="px-3 py-1 rounded-full bg-blue-400 text-white">Change</button>
//         </div>
//     )
// }

// export default UseStateHooks