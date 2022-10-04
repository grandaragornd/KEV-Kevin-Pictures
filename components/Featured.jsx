import React from 'react'
import Link from 'next/link'

function Featured() {
  return (
    <div className='w-full p-10 custom-img bg-cover bg-fixed' id='vscocards'>
     <div className='grid sm:grid-cols-2 text-center text-white w-full items-center justify-center gap-10'>
        <div className='shadow-2xl rounded-2xl shadow-black black p-5 w-full '>
          <h1 className='text-2xl'>VSCO Collection</h1>
          <Link href='https://vsco.co/saintkevinst/gallery' target='_blank' rel="noreferrer"><button className='p-2 m-4 border-solid border-2 border-white rounded-xl shadow-2xl shadow-black'>Check it out!</button></Link>
        </div>
        <div className='shadow-2xl rounded-2xl shadow-black p-5 w-full bg-stone-900/50'>
          <h1 className='text-2xl'>Unsplash Collection</h1>
          <Link href='https://unsplash.com/@grandaragornd' target='_blank' rel="noreferrer"><button className='p-2 m-4 border-solid border-2 border-white rounded-xl shadow-xl'>Check it out!</button></Link>
        </div>
     </div>
    </div>
  )
}

export default Featured