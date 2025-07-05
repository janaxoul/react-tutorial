import React from 'react'

function ControlledComponents() {
    const[val, setVal]=useState({name: "",email: ""})
    const handleName=(event)=>{
        return setVal({
            ...val, name: event.target.value
        })
    }
    const handleEmail=(event)=>{
        return setVal({
            ...val, email: event.target.value
        })
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(val);
    }
    return (
        <div className='p-5'>
            <form action="" onSubmit={()=>handleSubmit(event)}>
            <input type="text" placeholder="name" id="" onChange={()=>{handleName(event)}}/>
            <input type="text" placeholder="email" id="" onChange={()=>{handleEmail(event)}}/>
            <input className='ml-4' type="submit" value="submit" />
            </form>
        </div>
    )
}

export default ControlledComponents