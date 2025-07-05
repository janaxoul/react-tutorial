import React, { useState } from 'react'
import Cards from './Components/FormHandling/Exercise/Cards'
import Form from './Components/FormHandling/Exercise/Form'
function App() {
  const[users, setUsers]=useState([])

  const handleFormSubmitData=(data)=>{
    setUsers([...users, data])
  }

  const handleRemove=(id)=>{
    return setUsers(()=>users.filter((item, index)=> index!=id))
  }
  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center'>
      <div className=" w-[90vw] container mx-auto p-10">
        <Cards handleRemove={handleRemove} users={users}/>
        <Form handleFormSubmitData={handleFormSubmitData}/>
      </div>
    </div>
  )
}

export default App