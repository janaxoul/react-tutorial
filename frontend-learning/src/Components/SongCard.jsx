
function SongCard() {
    const data=[
        {  
    "name": "Smells Like Teen Spirit",  
    "albumName": "Nevermind",  
    "artist": "Nirvana",  
    "duration": "5:01",  
    "description": "Often called the anthem of 90s grunge, this song's raw energy and rebellious lyrics captured the angst of a generation."  
  },  
  {  
    "name": "I Will Always Love You",  
    "albumName": "The Bodyguard Soundtrack",  
    "artist": "Whitney Houston",  
    "duration": "4:31",  
    "description": "A powerful ballad that became one of the best-selling singles ever, showcasing Houston's stunning vocal range and emotional delivery."  
  },  
  {  
    "name": "Wonderwall",  
    "albumName": "(What's the Story) Morning Glory?",  
    "artist": "Oasis",  
    "duration": "4:18",  
    "description": "A Britpop anthem known for its memorable guitar riff and heartfelt lyrics, beloved worldwide as a 90s classic."  
  },  
  {  
    "name": "No Scrubs",  
    "albumName": "FanMail",  
    "artist": "TLC",  
    "duration": "3:39",  
    "description": "An empowering R&B hit promoting self-respect and independence, it became a defining track of late 90s pop."  
  },  
  {  
    "name": "One Sweet Day",  
    "albumName": "Daydream",  
    "artist": "Mariah Carey & Boyz II Men",  
    "duration": "4:43",  
    "description": "A heartfelt collaboration that held the Billboard Hot 100 record for longest time at No. 1, with poignant lyrics about loss."  
  },  
  {  
    "name": "Black Hole Sun",  
    "albumName": "Superunknown",  
    "artist": "Soundgarden",  
    "duration": "5:18",  
    "description": "A haunting grunge classic with psychedelic undertones and surreal lyrics that showcased Soundgarden’s musical depth."  
  },  
  {  
    "name": "Smooth",  
    "albumName": "Supernatural",  
    "artist": "Santana feat. Rob Thomas",  
    "duration": "4:56",  
    "description": "A Latin-infused rock hit that won multiple Grammys and dominated late 90s airwaves with its infectious groove."  
  },  
  {  
    "name": "Vogue",  
    "albumName": "I'm Breathless",  
    "artist": "Madonna",  
    "duration": "4:50",  
    "description": "A dancefloor classic celebrating fashion and style, with infectious beats that became synonymous with 90s pop culture."  
  },  
  {  
    "name": "Creep",  
    "albumName": "Pablo Honey",  
    "artist": "Radiohead",  
    "duration": "3:56",  
    "description": "An emotionally raw alternative rock ballad capturing feelings of alienation and self-doubt in the 90s youth."  
  },  
  {  
    "name": "Waterfalls",  
    "albumName": "CrazySexyCool",  
    "artist": "TLC",  
    "duration": "4:40",  
    "description": "A socially conscious R&B hit addressing drug abuse and AIDS, distinguished by its soulful melodies and poignant message."  
  }
    ]
    const handleClickDownload=()=>{
        alert("Hey");
    }
return (
    <div className='py-2 w-full h-full bg-zinc-400 flex flex-col gap-4 items-center justify-center'>
        {data.map((item, index)=>(
            <div className="song w-90 px-3 py-2 bg-zinc-100 rounded-xl">
            <h3 className='font-semibold text-xl'>{item.name}</h3>
            <h5 className='font-s'>
                <span>{item.artist}</span>
                <span> | </span>
                <span>{item.albumName}</span>
                <span> | </span>
                <span>{item.duration}</span>
            </h5>
            <p className='text-xs mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, excepturi?</p>
            <button onClick={handleClickDownload} className='mt-2 px-2 py-1 bg-blue-400 text-xs rounded-md'>Download now</button>
        </div>
        ))}
    </div>
)
}

export default SongCard