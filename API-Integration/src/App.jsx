import axios from 'axios';
import { useState } from 'react';

function App() {
  const [product, setProduct]=useState([])
  const getProducts=()=>{
    const api= "https://fakestoreapi.com/products";
    axios
      .get(api)
      .then(products=>{
        setProduct(products.data)
      })
      .catch(err=> console.log(err))
  }

  const addProducts=()=>{
    const api= "https://fakestoreapi.com/products";
    axios
      .post(api,{
        "id": 33,
        "title": "Test Product",
        "price": 0.1,
        "description": "Nice product",
        "category": "Category",
        "image": "http://example.com"
      })
      .then(resp=>{
        console.log(resp.data);
      })
      .catch(err=> console.log(err))
  }
  console.log(product)
  return (
    <>
    <div className='p-4'>
      <button onClick={getProducts} className=' border-[1px] border-black cursor-pointer k px-3 py-3 bg-red-400 text-white rounded-md'> Get API</button>
    </div>
    <div className='p-4'>
      <button onClick={addProducts} className=' border-[1px] border-black cursor-pointer k px-3 py-3 bg-green-400 text-white rounded-md'> Post API</button>
    </div>
    <hr />
    <ul>
      {product.length>0? product.map((item,index)=>{
        return <li key={index} className='rounded-md w-fit p-5 mb-2 bg-red-200'>{item.title}</li>}):"Loading..."}
    </ul>
    </>
  )
}

export default App