import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Show from './components/Show';

function App() {
  
  return (
    <div className='p-5'>
      <nav className='flex justify-center gap-5 bg-red-100'>
        <Link to='/'>Home</Link>
        <Link to='/services'>Services</Link>
        <Link to='/show'>Show</Link>
      </nav>
      <br />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/show' element={<Show/>}/>
      </Routes>
    </div>
  )
}

export default App