import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function User() {
  return (
    <div className=" w-1/2 m-auto mt-10">
      <h1 className='text-5xl'>User</h1>
      {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi vero quasi laudantium omnis temporibus placeat voluptas odio a dolorem impedit!</p>
      <button className='px-3 py-1 mt-2 rounded-md bg-sky-600'>User</button> */}
      <div className="flex flex-col w-1/2 mt-5">
        <Link className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300 rounded-md' to='/user/john'>John</Link>
        <Link className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300 rounded-md' to='/user/robert'>Robert</Link>
        <Link className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300 rounded-md' to='/user/ryan'>Ryan</Link>
      </div>
      <br />
      <Outlet/>
    </div>
  )
}

export default User