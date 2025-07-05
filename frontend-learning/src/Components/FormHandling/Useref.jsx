import React from 'react'

function Useref() {
    const name=useRef(null);
    const age=useRef(null);

    const handlesubmit=(event)=>{
        event.preventDefault()
        console.log(name.current.value, age.current.value)
    }
    return (
        <div>
        <form action="" onSubmit={handlesubmit}>
            <input ref={name} type="text" name="" id="" placeholder='name' />
            <input ref={age} type="text" name="" id="" placeholder='age' />
            <input type="submit" value="Submit" />
        </form>
        </div>
    )
}

export default Useref