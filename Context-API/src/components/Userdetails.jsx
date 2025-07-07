import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../context/Context'

function Userdetails() {
  const {usernameid}=useParams()
  const{users, setuser}=useContext(UserContext)
  // console.log(users)
  const userData = users.find((item) => item.username === usernameid);
  // console.log(userData);
  const navigate= useNavigate()
  const handleGoBack=()=>{
    navigate(-1)
  }
  return (
    <div className='p-10'>
    {userData ? (
      <div>
        <h1 className='text-4xl text-red-200 capitalize font-semibold'>{userData.username}</h1>
        <p className='text-l text-red-300 font-semibold' >{userData.country}</p>
        <p className='text-xl text-red-400'>Email: {userData.email}</p>
        <button onClick={handleGoBack} className='mt-3 cursor-pointer px-2 py-1 text-md rounded-full border-2'>Go back</button>
      </div>
    ) : (
      <p>User named {usernameid} not found</p>
    )}
  </div>

  )
}

export default Userdetails