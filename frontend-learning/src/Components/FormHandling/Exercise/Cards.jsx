import React from 'react'
import Card from './Card'

function Cards({users, handleRemove}) {
  return (
    <div className='w-full h-100 max-h-100 overflow-auto p-4 flex justify-center gap-3 flex-wrap'>
        {users.map((item,index)=>{
            return<Card key={index} user={item} handleRemove={handleRemove} index={index} />
        })}
    </div>
  )
}

export default Cards