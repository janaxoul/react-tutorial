import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import User from './components/User';
import Userdetails from './components/Userdetails';

function App() {
  
  return (
    <div>
      <nav className='p-5 flex justify-center gap-10 bg-green-100'>
        <Link className=' px-2 py-2 rounded-md bg-purple-200' to='/'>Home</Link>
        <Link className=' px-2 py-2 rounded-md bg-purple-200' to='/user'>User</Link>
        <Link className=' px-2 py-2 rounded-md bg-purple-200' to='/about'>About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path='/user/:usernameid' element={<Userdetails/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App