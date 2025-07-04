
function MusicCard({data, handleClick, dataIndex}) {
  const{image,name, artist, added}=data
  return (
    <div className='w-60 bg-zinc-300 p-4 py-5 pb-10 rounded-md flex gap-3 mt-7 relative'>
      <div className='w-20 h-20 bg-orange-600 rounded-md overflow-hidden'>
        <img className='w-full h-full object-cover' src={image} alt="" />
      </div>
      <div className=''>
        <h3 className='text-base font-[600]'>{name}</h3>
        <h6 className='text-sm mt-1'>{artist}</h6>
      </div>
      <button onClick={()=>handleClick(dataIndex)} className={` cursor-pointer px-4 py-3 ${added?"bg-teal-600":"bg-orange-600"} whitespace-nowrap absolute text-white text-xs rounded-full bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%]`}>{added?"Added":"Add to favorites"}</button>
    </div>
  )
}

export default MusicCard


// import { useState } from "react";
// import MusicCard from "./Components/MusicComponents/MusicCard";
// import Nav from "./Components/MusicComponents/Nav";

// function App() {
//   const data = [
//     {
//       image: "https://i.pinimg.com/736x/ab/ff/c9/abffc98267ac0ad384e569c81ea01b12.jpg",
//       name: "...Baby One More Time",
//       artist: "Britney Spears",
//       added: true
//     },
//     {
//       image: "https://i.pinimg.com/736x/ab/ff/c9/abffc98267ac0ad384e569c81ea01b12.jpg",
//       name: "I Want It That Way",
//       artist: "Backstreet Boys",
//       added: false
//     },
//     {
//       image: "https://i.pinimg.com/736x/ab/ff/c9/abffc98267ac0ad384e569c81ea01b12.jpg",
//       name: "Smells Like Teen Spirit",
//       artist: "Nirvana",
//       added: true
//     },
//     {
//       image: "https://i.pinimg.com/736x/ab/ff/c9/abffc98267ac0ad384e569c81ea01b12.jpg",
//       name: "Wannabe",
//       artist: "Spice Girls",
//       added: false
//     },
//     {
//       image: "https://i.pinimg.com/736x/ab/ff/c9/abffc98267ac0ad384e569c81ea01b12.jpg",
//       name: "No Scrubs",
//       artist: "TLC",
//       added: true
//     },
//     {
//       image: "https://i.pinimg.com/736x/ab/ff/c9/abffc98267ac0ad384e569c81ea01b12.jpg",
//       name: "My Heart Will Go On",
//       artist: "Celine Dion",
//       added: false
//     },
//     {
//       image: "https://i.pinimg.com/736x/ab/ff/c9/abffc98267ac0ad384e569c81ea01b12.jpg",
//       name: "Losing My Religion",
//       artist: "R.E.M.",
//       added: true
//     },
//     {
//       image: "https://i.pinimg.com/736x/ab/ff/c9/abffc98267ac0ad384e569c81ea01b12.jpg",
//       name: "Tearin' Up My Heart",
//       artist: "*NSYNC",
//       added: false
//     },
//     {
//       image: "https://i.pinimg.com/736x/ab/ff/c9/abffc98267ac0ad384e569c81ea01b12.jpg",
//       name: "Livin' La Vida Loca",
//       artist: "Ricky Martin",
//       added: true
//     },
//     {
//       image: "https://i.pinimg.com/736x/ab/ff/c9/abffc98267ac0ad384e569c81ea01b12.jpg",
//       name: "Creep",
//       artist: "Radiohead",
//       added: false
//     }
//   ];
//   const[songData, setSongData]=useState(data)
//   const handleClick=(index)=>{
//     return setSongData(prev=>{
//       return prev.map((item, itemIndex)=>{
//         if(index === itemIndex){
//           return {...item, added:!item.added}
//         }
//         return item;
//       })
//     })
//   }
//   return (
//     <>
//     <div className="w-full h-screen bg-zinc-100">
//       <Nav data={songData}/>
//       <div className="px-20 flex gap-10 mt-5 flex-wrap">
//         {songData.map((item, index)=>(
//           <MusicCard data={item} handleClick={handleClick} dataIndex={index} key={index}/>
//           ))}
//       </div>
//     </div>
//     </>
//   )
// }

// export default App;
