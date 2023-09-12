"use client"
import React, {useState} from 'react'
import {Link} from "react-scroll"
import {useTheme} from "next-themes"
import {RiMoonFill, RiSunLine} from "react-icons/ri"
import Image from 'next/image'

interface NavItem {
    label: string
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About",
    page: "about"
  },
  {
    label: "Skills",
    page: "skills"
  },
  {
    label: "Projects",
    page: "projects"
  },
  {
    label: "Contact",
    page: "contact"
  }
]

const NavBar = () => {

  const {systemTheme, theme, setTheme} = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navBar, setNavBar] = useState(false);

  return (
    <header className="w-full p-4 md:py-2 fixed top-0 z-50 shadow bg-white">
      <div className='flex-1 justify-between mx-auto max-w-6xl items-center md:flex md:flex-row'>
        <div className='hidden md:block'>
          <img className='w-logo' alt='' src='/logo.svg'/>
          
        </div>
        <div>
          <div className='flex flex-row items-center justify-between'>
            <div className='md:hidden'>
              <button onClick={()=>setNavBar(!navBar)}>
                {navBar ? <Image src='/close.svg' alt='' height={24} width={24}/> : <Image src='/menu.svg' alt='' height={24} width={24}/>}
              </button>
            </div>
            <div className='md:hidden flex flex-row'>
              <div className='w-10 h-10 bg-cerulean flex justify-center pt-2'>
                  <p className='text-bold text-white'>EN</p>
              </div>
              <div className='w-10 h-10 bg-white flex justify-center pt-2'>
                  <p className='text-bold text-gray-400'>BR</p>
              </div>
          </div>
          </div>
        </div>
        <div> 
        <div className={`flex pb-3 mt-8 md:m-0 md:p-0 md:mx-auto md:flex md:justify-center md:absolute ${
              navBar ? "block" : "hidden"
            } md:absolute md:inset-0 md:flex md:items-center md:justify-center`}
          >
            <div className='space-y-8 md:justify-center md:space-y-0 md:space-x-8'>
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "block md:inline-block text-gray-400 hover:text-red-desire hover:font-bold"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavBar(!navBar)}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
        <div className='hidden md:block w-28'>
          <div className='flex flex-row justify-end space-x-4'>
            <div className='flex flex-row'>
                  <div className='w-10 h-10 bg-cerulean flex justify-center pt-2'>
                      <p className='text-bold text-white'>EN</p>
                  </div>
                  <div className='w-10 h-10 bg-white flex justify-center pt-2'>
                      <p className='text-bold text-gray-400'>BR</p>
                  </div>
            </div>
          </div>
          </div>
      </div>
    </header>
  )
}

export default NavBar