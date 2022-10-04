import Image from 'next/image';
import React from 'react'
import { VscoCards } from "../components/SliderData";

function VscoGrid({cards}) {
  return (
    <div className='w-full p-4 w-full'>
      <div className='text-white py-10 text-3xl text-center'>
          <h1>VSCO Featured</h1>
      </div>
          {VscoCards.map((cards, index) => {
            return(
              <div key={index} className='text-center p-4 m-auto'>
                <Image
                  src={cards.image}
                  height='1000px'
                  width='1000px'
                  objectFit='cover'
                />
              </div>
            )
          })}
    </div>
  )
}

export default VscoGrid
