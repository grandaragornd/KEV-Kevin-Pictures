import Link from 'next/link'
import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { SiVsco, SiUnsplash } from 'react-icons/si'

function Footer() {
  return (
    <div className='justify-between text-white bottom-0 p-5 m-1 flex items-center'>
      <Link href='#'><h1 className='text-4xl font-bold cursor-pointer hover:tracking-widest'>KEV</h1>
        </Link>
      <p className='text-sm pl-3 hidden sm:flex'>© 2022 KevinPictures</p>
      <ul className='flex'>
        <h1 className='text-xl px-3 w-auto hidden sm:flex'>
          <Link href='https://kev-portfolio.netlify.app/' target='_blank'>
          KEV📌
          </Link>
        </h1>
        <Link href='https://www.instagram.com/saintkevinst/' target='_blank'>
          <li className='px-3 cursor-pointer'><AiOutlineInstagram  size={32}/></li>
        </Link>
        <Link href='https://vsco.co/saintkevinst/gallery' target='_blank'>
          <li className='px-3 cursor-pointer'><SiVsco  size={29}/></li>
        </Link>
        <Link href='https://unsplash.com/@grandaragornd' target='_blank'>
          <li className='px-3 cursor-pointer'><SiUnsplash  size={26}/></li>
        </Link>
      </ul>
    </div>
  )
}

export default Footer