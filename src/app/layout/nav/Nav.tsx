"use client"
import './Nav.scss'
import { navLogo } from '@/app/assets/img'
import Image from 'next/image'
import React from 'react'
import { LuBellDot } from "react-icons/lu";
import { IoMdContact } from "react-icons/io";
import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
        <div className="container">
            <div className="nav__wrapper">
                <div className="nav__logo">
                    <Image src={navLogo} alt='logo'/>
                    <p>Books <span>List</span></p>
                </div>
                <div className="nav__options">
                    <button><LuBellDot/></button>
                    <Link href='/account'><IoMdContact/></Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav