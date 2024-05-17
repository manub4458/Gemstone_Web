import React from 'react'

const Guide = () => {
  return (
  <>
  <div className='my-10'>

     <div>
        <h1 className='text-4xl kra text-center'>
            
            GEMSTONE GUIDE
          
        </h1>
     </div>
    <div className='flex flex-col my-10 space-y-4 bg-[url("/guide.webp")] bg-cover justify-center items-center w-screen h-screen'>
          <div>
          <h2 className='text-3xl text-white'>
          INFORMATION OF GEMSTONES
          </h2>
          </div>

         <div>
         <button className='px-4 py-2 border border-white text-white hover:scale-105 hel2 '>
            READ MORE
          </button>
         
         </div>
      
    </div>
  </div>
  
  </>
  )
}

export default Guide