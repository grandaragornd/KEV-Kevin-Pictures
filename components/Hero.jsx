import React from 'react'

function Hero({heading, message}) {
  return (
    <>
        <div className='items-center text-center h-screen bg-center bg-cover bg-fixed custom-img' id='home'>
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]'>
            <div className='text-white items-center justify-center z-[2] py-[200px] m-10'>
                <h1 className='text-5xl py-3'>{heading}</h1>
                <p className='text-2xl py-3'>{message}</p>
            </div>
            </div>
        </div>
    </>
  )
}

export default Hero