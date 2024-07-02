import React from 'react'
import style from './NavBar.module.css'

const NavBar = () => {
  return (
    <div>
        
        <nav className={style.NavBar}>
            <ul>
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