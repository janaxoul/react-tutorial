import React from 'react'

function Nav({data}) {
  return (
    <div className='w-full px-20 py-3 flex justify-between items center'>
        <h3 className='font-semibold text-orange-600'>Orange</h3>
        <div className='flex gap-3 p-2 px-4 bg-orange-600 text-sm text-white rounded-full'>
            <h3>Favorite </h3>
            <h4 className=' px-2 rounded-full bg-[#dadada8b]'>{data.filter(item => item.added).length}</h4>
        </div>
    </div>
  )
}

export default Nav