import { useNavigate, useParams } from 'react-router-dom';

function UserDetail() {
    const {name} = useParams();
    const navigate= useNavigate();
    const goBackHandler=()=>{
        navigate("/user");
        // navigate(-1);
    }
    return (
        <div className=" m-auto mt-10">
            <h1 className='text-xl text-red-400'>UserDetail</h1>
            <h1 className='text-5xl mt-3'>Hi,    {name}</h1>
            <button onClick={goBackHandler} className='cursor-pointer px-3 py-1 mt-4 rounded-md bg-sky-600'>Go back</button>
        </div>
    )
}

export default UserDetail