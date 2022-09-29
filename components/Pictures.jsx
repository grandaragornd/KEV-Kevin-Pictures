import Image from 'next/image';
import { SliderData } from './SliderData';
import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';



const Pictures = ({slides, title, description}) => {
    
   const [current, setCurrent] = useState(0)
   const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

  return (
    <>
    <div className='w-full h-auto p-10 text-white text-center' id='pictures'>
            <h1 className='text-3xl py-10'>Unsplash Pictures Slider</h1>
        <div className='items-center justify-center'>
        <div className='relative flex justify-center'>
            <FaArrowCircleLeft size={40} onClick={prevSlide} className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]'/>

            {SliderData.map((slides, index) => {
                return (
                    <>
                <div key={index} className={index === current ? 'opacity-[1] ease-in duration-500 static' : 'opacity-[0]'}>
                        {index === current && (
                            <Image 
                            className='object-fill'
                            src={slides.image}
                            alt='/'
                            width='1000px'
                            height='1000px'
                            objectFit='cover'
                            />
                        )}
                </div> 
                <div key={title} className={index === current ? 'opacity-[1] absolute text-2xl text-center pt-4' : 'opacity-[0] absolute'}>
                    {slides.title}
                </div>
                <div key={description} className={index === current ? 'opacity-[1] absolute text-center pt-14' : 'opacity-[0] absolute'}>
                    {slides.description}
                </div>
                </>)
            })}
            
            <FaArrowCircleRight size={40} onClick={nextSlide} className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]'/>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Pictures
