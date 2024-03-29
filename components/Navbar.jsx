//import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose  } from "react-icons/ai";
import { Link } from 'react-scroll';

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
      setNav(prev => !prev);
    };

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true)
    
    const handleScroll = () => {
        const currentScrollPos = window.scrollY
        
        if(currentScrollPos > prevScrollPos){
            
            setVisible(false)
        }else{
            setVisible(true)
        } 
    
        if(window.scrollY <= 90){
            setVisible(true)
        }
    
        setPrevScrollPos(currentScrollPos)
    }

   
    
    useEffect( () => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll)
    })

  return (
    <>
    <nav className={`${visible ? 'shownav navbg' : 'hidenav'}`}>
    <div className='w-full h-20 flex fixed justify-between items-center z-10 ease-in duration-300 text-white bg-stone-900/50'>
      <div className='p-4'>
        <h1 className='text-4xl font-bold cursor-pointer hover:tracking-widest'>KEV</h1>
      </div>
      <div>
        <ul className='flex items-center hidden sm:flex text-lg px-4'>
          <li className='p-4'><Link to='home'spy={true} smooth={true} offset={50} duration={500} activeClass='active'className='cursor-pointer uppercase hover:ease-in duration-200 transform-none hoverbutton px-3 py-1'>Home</Link></li>
          <li className='p-4'><Link to='pictures' spy={true} smooth={true} offset={50} duration={500} activeClass='active' className='cursor-pointer uppercase hover:ease-in duration-200 transform-none hoverbutton px-3 py-1'>Slider</Link></li>
          <li className='p-4'><Link to='vscocards' spy={true} smooth={true} offset={50} duration={500} activeClass='active' className='cursor-pointer uppercase hover:ease-in duration-200 transform-none hoverbutton px-3 py-1'>Featured</Link></li>
        </ul>
      </div>

      <div className='block sm:hidden p-4' onClick={handleNav}>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </div>
    </nav>
      <div className={
         nav
         ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-white text-center text-3xl ease-in duration-200 z-[9] sticky'
         : 'sm:hidden absolute top-[-200%] left-0] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
      }>
        <ul>
          <li className='py-5'><Link onClick={handleNav} to='home'spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
          <li className='py-5'><Link onClick={handleNav} to='pictures' spy={true} smooth={true} offset={50} duration={500}>Slider</Link></li>
          <li className='py-5'><Link onClick={handleNav} to='vscocards' spy={true} smooth={true} offset={50} duration={500}>Featured</Link></li>
        </ul>
        </div>
    </>
  )
}

export default Navbar;