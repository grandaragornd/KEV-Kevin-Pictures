import React from 'react'
import Link from 'next/link'

function Featured() {
  return (
    <div className='w-full p-4 custom-img2 bg-cover bg-fixed'>
     <div className='grid sm:grid-cols-2 text-center text-white w-full items-center justify-center gap-4'>
        <div className='shadow-2xl rounded-2xl shadow-black black p-5 w-full '>
          <h1 className='text-2xl'>VSCO Collection</h1>
          <Link href='https://vsco.co/saintkevinst/gallery' target='_blank' rel="noreferrer"><button className='p-2 m-4 border-solid border-2 border-white rounded-xl'>Check out!</button></Link>
        </div>
        <div className='shadow-xl rounded-2xl shadow-black p-5 w-full bg-stone-900/50'>
          <h1 className='text-2xl'>Unsplash Collection</h1>
          <Link href='https://unsplash.com/@grandaragornd' target='_blank' rel="noreferrer"><button className='p-2 m-4 border-solid border-2 border-white rounded-xl'>Check out!</button></Link>
        </div>
     </div>
    </div>
  )
}

export default Featured