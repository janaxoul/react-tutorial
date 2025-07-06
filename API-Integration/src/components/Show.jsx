import axios from '../utilities/Axios';
import { useEffect, useState } from 'react';

function Show() {
    const [product, setProduct]=useState([])
    
    const getProducts=()=>{
        const api= "https://fakestoreapi.com/products";
        axios
        .get("/products ")
        .then(products=>{
            setProduct(products.data)
        })
        .catch(err=> console.log(err))
    }
    useEffect(()=>{
        getProducts()
    },[])
    return (
        <>
            <div className='p-4'>
                {/* <button onClick={getProducts} className=' border-[1px] border-black cursor-pointer k px-3 py-3 bg-red-400 text-white rounded-md'> Get API</button> */}
            </div>
            <br />
            <ul>
            {product.length>0? product.map((item,index)=>{
                return <li key={index} className='rounded-md w-fit p-5 mb-2 bg-red-200'>{item.title}</li>}):"Loading..."}
            </ul>
        </>
    )
}

export default Show