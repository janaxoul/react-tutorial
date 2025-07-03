import { useState } from "react";

function App() {
  const [val, setVal] = useState([{name:"Mark", age:19}, {name:"Messi", age: 38}, {name:"Robert",age: 33}]);
  return (
    <div className="p-5">
      {val.map((elem, index) => (
        <div key={index}>
          <h1>{elem.name}</h1>
          <h1>{elem.age}</h1>
          <br />
        </div>
      ))}
      <button
        onClick={()=>{setVal(()=>val.map((item)=>item.name==="Messi"?{name:"Messi", age:37}: item))}}
        className="px-3 py-1 rounded-full bg-blue-400 text-white"
      >
        click
      </button>
    </div>
  )
}

export default App;
