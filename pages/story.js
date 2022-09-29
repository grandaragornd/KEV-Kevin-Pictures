import React from 'react'
import Image from 'next/image'
function story() {
  return (
    <div className='bg-fixed py-[150px] px-[40px] relative items-center justify-center'>
        <div className='grid md:grid-cols-2 gap-4 w-full text-white'>
            <div className='flex'>
                <Image 
                    src='https://images.unsplash.com/photo-1470178364044-beb4ee6fed41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
                    height='1000px'
                    width='1000px'
                    objectFit='cover'
                />
            </div>
            <div className='flex'>
            <Image 
                    src='https://kevinspictures.netlify.app/images/setups/IMG_20220425_211618.jpg'
                    height='1000px'
                    width='1000px'
                    objectFit='cover'
                />
            </div>
        </div>
    </div>
  )
}

export default story