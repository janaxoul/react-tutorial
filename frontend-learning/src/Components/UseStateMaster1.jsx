import { useState } from 'react';


function UseStateMaster1() {
const [val, setVal] = useState([{name:"Mark", age:19}, {name:"Messi", age: 38}, {name:"Robert",age: 33}]);
    return (
        <div className="p-5">
        {val.map((elem, index) => (
            <div key={index}>
            <h1>{elem.name}</h1>
            <h1>{elem.age}</h1>
            <br />
            </div>
        ))}
        <button
            onClick={()=>{setVal(()=>val.map((item)=>item.name==="Messi"? {name:"Messi", age:37} : item))}}
            className="px-3 py-1 rounded-full bg-blue-400 text-white"
        >
            click
        </button>
        </div>
    )
}

export default UseStateMaster1


// function UseStateMaster1() {
//     const [val, setVal] = useState([1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14]);
//     console.log(val.length)
//     return (
//         <div className="p-5">
//         {val.map((elem, index) => (
//             <h1 key={index}>{elem}</h1>
//         ))}
//         <button
//             onClick={()=>setVal([...val,15,16])}
//             className="px-3 py-1 rounded-full bg-blue-400 text-white"
//         >
//             click
//         </button>
//         </div>
//     );
// }

// export default UseStateMaster1


//     function UseStateMaster1() {
//     const [val, setVal] = useState([1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14]);
//     console.log(val.length)
//     return (
//         <div className="p-5">
//         {val.map((elem, index) => (
//             <h1 key={index}>{elem}</h1>
//         ))}
//         <button
//             onClick={()=>setVal(()=>val.filter((item)=>item%2 !== 0))}
//             className="px-3 py-1 rounded-full bg-blue-400 text-white"
//         >
//             click
//         </button>
//         </div>
//     );
//     }

// export default UseStateMaster1;

//     function UseStateMaster1() {
//     const [val, setVal] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
//     console.log(val.length)
//     return (
//         <div className="p-5">
//         {val.map((elem, index) => (
//             <h1 key={index}>{elem}</h1>
//         ))}
//         <button
//             onClick={() => setVal(()=>val.filter((item,index)=>index!=val.length-1))}
//             className="px-3 py-1 rounded-full bg-blue-400 text-white"
//         >
//             click
//         </button>
//         </div>
//     );
//     }

// export default UseStateMaster1;


// function UseStateMaster1() {
//     const[val, setVal]= useState({name:"harsh", age:24})
//     return (
//     <div>
//         <button onClick={()=>setVal({...val, gender:"male"})}>click</button>
//     </div>
//     )
// }

// export default UseStateMaster1



// function UseStateMaster1() {
//     const [val, setval] = useState({ name: "Jana", isBanned: false });
//     return (
//     <div className="p-5">
//         <h1>Name: {val.name}</h1>
//         <h2>Banned: {val.isBanned.toString()}</h2>
//         <button
//             onClick={() => setval({ ...val, isBanned: !val.isBanned })}
//             className={`px-3 py-1 rounded-full ${
//             !val.isBanned ? "bg-blue-400" : "bg-red-400"
//             } text-white`}
//         >Change
//         </button>
//     </div>
//     )
// }
