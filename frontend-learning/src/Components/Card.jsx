
function Card() {
  return (
    <div className='w-full h-screen bg-zinc-200'>
        <div className=" w-52 bg-zinc-100 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-md overflow-hidden">
            <div className='w-full h-32 bg-zinc-300'>
                <img  className=" w-full h-full object-cover"src="https://st2.depositphotos.com/1083585/9931/i/450/depositphotos_99311424-stock-photo-amazon-box-seen-from-above.jpg" alt="" />
            </div>
            <div className='w-full px-3 py-3'>
                <h2 className='font-semibold'>Amazon Basics.</h2>
                <p className='text-xs mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aperiam debitis est fuga obcaecati! Doloremque.</p>
            </div>
        </div>
    </div>
  )
}

export default Card