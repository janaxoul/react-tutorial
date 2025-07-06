import axios from '../utilities/Axios';
import React, { useEffect, useState } from 'react'

function Services() {
    const[users, setUser]=useState([])

    const getUsers=()=>{
        const api= "https://fakestoreapi.com/users";
        axios
        .get("/users")
        .then(users=>{
            // setProduct(products.data)
            console.log(users.data)
        })
        .catch(err=> console.log(err))
    }
    useEffect(()=>{
        getUsers()
    },[]);
    return (
        <div>
            
        </div>
    )
}

export default Services