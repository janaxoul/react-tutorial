
function Card({user,handleRemove, index}) {
    const{name, email, image}=user
    console.log(name, email , image);
    return (
    <div className='w-40 h-fit bg-zinc-100 rounded-lg flex flex-col items-center p-2'>
        <div className='image w-12 h-12 rounded-full bg-zinc-400 overflow-hidden'>
            <img className='w-full h-full object-cover' src={image} alt="" />
        </div>
        <h1 className='mt-1 font-semibold'>{name}</h1>
        <h4 className='opacity-40 text-xs'>{email}</h4>
        <p className='mt-2 text-xs text-center font-regular leading-3 traking-tight'>Lorem ipsum dolo Consequuntur nisi porro, quae facere a laboriosam?</p>
        <button onClick={()=>handleRemove(index)} className='cursor-pointer px-3 py-1 bg-red-600 text-white text-xs mt-3 rounded-lg font-semibold'>Remove it</button>
    </div>
    )
}

export default Card