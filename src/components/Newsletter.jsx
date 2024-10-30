import React from 'react';

const Newsletter = () => {
    const onSubmitHandler = (event) =>
    {
        event.preventDefault();
    }
    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
            <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, eum. At iure laborum atque itaque impedit sed delectus explicabo ab.</p>
            <form action="" onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border p1-3'>
                <input type="email" name="" id="" placeholder='Enter your email' className='w-full sm:flex-1 outline-none px-1' required/>
                <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
            </form>
        </div>
    );
};

export default Newsletter;