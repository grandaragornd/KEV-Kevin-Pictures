import Link from 'next/link'
import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { SiVsco, SiUnsplash } from 'react-icons/si'

function Footer() {
  return (
    <div className='justify-between text-white bottom-0 p-5 m-1 flex items-center'>
      <h1 className='text-4xl font-bold cursor-pointer hover:tracking-widest'>KEV</h1>
      <p className='text-sm pl-3'>© 2022 KevinPictures</p>
      <ul className='flex'>
        <h1 className='text-xl px-3'>
          <Link href='https://kev-portfolio.netlify.app/' target='_blank'>
          KEV📌
          </Link>
        </h1>
        <Link href='https://www.instagram.com/saintkevinst/' target='_blank'>
          <li className='px-3 cursor-pointer'><AiOutlineInstagram  size={30}/></li>
        </Link>
        <Link href='https://vsco.co/saintkevinst/gallery' target='_blank'>
          <li className='px-3 cursor-pointer'><SiVsco  size={30}/></li>
        </Link>
        <Link href='https://unsplash.com/@grandaragornd' target='_blank'>
          <li className='px-3 cursor-pointer'><SiUnsplash  size={30}/></li>
        </Link>
        
      </ul>
    </div>
  )
}

export default Footer