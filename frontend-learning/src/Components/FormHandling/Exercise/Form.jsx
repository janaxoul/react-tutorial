import { useForm } from 'react-hook-form'
function Form({handleFormSubmitData}) {
    const{register, handleSubmit, reset}=useForm()
    const handleFormSubmit =(data)=>{
        handleFormSubmitData(data);
        reset();
    }
    return (
    <div className='mt-10 flex justify-center '>
        <form className='flex gap-4' onSubmit={handleSubmit(handleFormSubmit)}>
            <input {...register('name')} className='rounded-md bg-zinc-100 px-2 py-1 text-base outline-none' type="text" placeholder='Name' />
            <input {...register('email')} className='rounded-md bg-zinc-100 px-2 py-1 text-base outline-none' type="text" placeholder='Email' />
            <input {...register('image')} className='rounded-md bg-zinc-100 px-2 py-1 text-base outline-none' required type="true" placeholder='Image URL' />
            <input className='rounded-md px-4 py-2 bg-blue-500 text-xs cursor-pointer text-white' type="submit" value="Submit" placeholder='submit' />
        </form>
    </div>
    )
}

export default Form