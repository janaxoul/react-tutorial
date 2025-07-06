import { Route, Routes } from 'react-router-dom'
import About from '../components/About'
import Home from '../components/Home'
import User from '../components/User'
import UserDetail from '../components/UserDetail'
function Routing() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/user' element={<User/>} >
                    <Route path='/user/:name' element={<UserDetail/>}/>
                </Route>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </div>
    )
}

export default Routing