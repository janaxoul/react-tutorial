import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/Context'

function User() {
  const{users, setusers}=useContext(UserContext)
  console.log(users)
  return (
    <div className='w-1/2 flex flex-col items-center mt-4'>
        <h1 className='text-4xl'>User list</h1>
        <div className='mt-3 flex flex-col gap-2'>
          {users.map((item, index)=>(
            <Link key={index} className='bg-blue-200 p-1.5 rounded-md w-fit ' to={`${item.username}`}>{item.username}</Link>
          ))}
          
        </div>
    </div>
  )
}

export default User