import React from 'react'
import style from './NavBar.module.css'

const NavBar = () => {
  return (
    <div>
        
        <nav className='flex justify-center mx-auto w-full h-16'>
            <ul className='flex space-x-4 p-4' >
            <li className={style.li}>
                <a className={style.a} href="#hero">Home</a>
            </li>
            <li className={style.li} >
                <a className={style.a} href="#about">About</a>
            </li>
            <li className={style.li}>
                <a className={style.a} href="#portfolio">Portfolio</a>
            </li>
            <li className={style.li}>
                <a className={style.a} href="#resume">Resume</a>
            </li>
            </ul>
        </nav>
    
    </div>
  )
}

export default NavBar