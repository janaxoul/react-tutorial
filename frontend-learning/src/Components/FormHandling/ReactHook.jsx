import React from 'react'

function ReactHook() {
    const {register, handleSubmit} =useForm();
    console.log(register())
return (
    <div className='p-5'>
    <form action="" onSubmit={handleSubmit(data=>console.log(data))}>
        <input {...register('name')} type="text" placeholder='name' />
        <input {...register('email')}type="text" placeholder='email' />
        <input type="submit" placeholder='Submit'/>
    </form>
    </div>
)
}

export default ReactHook