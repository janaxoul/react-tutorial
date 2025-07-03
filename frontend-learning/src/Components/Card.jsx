//Conditional Rendering
function Card() {
  const data=[
    {image: "https://st2.depositphotos.com/1083585/9931/i/450/depositphotos_99311424-stock-photo-amazon-box-seen-from-above.jpg", name:"Amazon Basics", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aperiam debitis est fuga obcaecati! Doloremque.",instock:true},
    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvgqaobhdHO9V4kc9CUi2ifXU9It2IPQNu8A&s", name:"Bags", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aperiam debitis est fuga obcaecati! Doloremque.",instock:true},
    {image: "https://media.istockphoto.com/id/171302954/photo/groceries.jpg?s=612x612&w=0&k=20&c=D3MmhT5DafwimcYyxCYXqXMxr1W25wZnyUf4PF1RYw8=", name:"Grocery", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aperiam debitis est fuga obcaecati! Doloremque.",instock:false},
  ]
  return (
    <div className='w-full h-screen flex items-center justify-center gap-10 bg-sky-200'>
        {data.map((elem, index)=>(
          <div key={index} className=" w-52 bg-zinc-100 rounded-md overflow-hidden">
            <div className='w-full h-32 bg-zinc-300'>
                <img  className=" w-full h-full object-cover"src={elem.image} alt="" />
            </div>
            <div className='w-full px-3 py-3'>
                <h2 className='font-semibold'>{elem.name}</h2>
                <p className='text-xs mt-4'>{elem.description}</p>
                <button className={`mt-1 px-4 py-2 ${elem.instock?"bg-blue-500":"bg-red-700"} rounded-md text-xs text-zinc-900`}>{elem.instock? "In Stock" : "Out Of Stock"}</button>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Card