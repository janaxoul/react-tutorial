import { useState } from "react";

function App() {
const[val, setVal]=useState(true);
  return (
    <div>
      <h1>
        {val?"Go on":"Don't Go"}
      </h1>
      <button onClick={()=>{
          setVal((elem)=>!elem)
        }}
      className="px-3 py-1 rounded-full bg-blue-400 text-white">Change</button>
    </div>
  )
}

export default App;
