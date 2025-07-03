
function UseStateAdvance() {
    const[val, setval]=useState({name:"Jana",isBanned:false})
    return (
        <div className='p-5'>
        <h1>Name: {val.name}</h1>
        <h2>Banned: {val.isBanned.toString()}</h2>
        <button onClick={()=>setval({...val, isBanned: !val.isBanned})} className='px-3 py-1 rounded-full bg-blue-400 text-white'>Change</button>
        </div>
    )
}

export default UseStateAdvance