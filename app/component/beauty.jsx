import React from 'react'

const Beauty = () => {
  return (
    <>
    <div className='my-10'>
        <div>
            <h1 className='flex justify-center items-center text-4xl goudy'>
                THE BEAUTY OF STONES
            </h1>
        </div>

        <div className='flex justify-around items-center gap-x-8 h-[55vh] w-[100vw] kra my-10'>
         <div className='bg-[url("/beauty1.jpg")] flex justify-center items-end bg-cover h-[100%] w-[100%]'>
             <p className='text-white text-xl '>
              YELLOW SAPHIRE
             </p>
         </div> 
         <div className='bg-[url("/beauty2.jpg")] flex justify-center items-end h-full w-full'>
         <p className='text-white text-xl '>
              BLUE SAPHIRE
             </p>
</div>
<div className='bg-[url("/beauty3.webp")] flex justify-center items-end h-full w-full'>
<p className='text-white text-xl '>
              EMERALD
             </p>
</div>
<div className='bg-[url("/beauty4.webp")] flex justify-center items-end h-full w-full'>
<p className='text-white text-xl '>
              RUBY
             </p>
</div>
        </div>
    </div>
    
    </>
  )
}

export default Beauty