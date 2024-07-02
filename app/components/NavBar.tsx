import React from 'react'
import style from './NavBar.module.css'

const NavBar = () => {
  return (
    <div>
        <nav>
            <ul>
            <li>
                <a href="#hero">Home</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li>
                <a href="#resume">Resume</a>
            </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar