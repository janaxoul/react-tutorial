import React from 'react'

function Prop({data, color}) {
    return (
        <button className={`px-3 py-1 ${color} text-white rounded-md m-5 cursor-pointer`}>{data}</button>
    )
}

export default Prop