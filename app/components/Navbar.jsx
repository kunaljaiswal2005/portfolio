'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const NAV_LINKS = [
  { label: 'Home',     href: '#top' },
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work',     href: '#work' },
  { label: 'Contact',  href: '#contact' },
]

const Navbar = ({ isDarkMode, setisDarkMode }) => {
  const [scrolled, setScrolled]     = useState(false)
  const [activeLink, setActiveLink] = useState('#top')
  const sideMenuRef = useRef()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openMenu  = () => { sideMenuRef.current.style.transform = 'translateX(-16rem)' }
  const closeMenu = () => { sideMenuRef.current.style.transform = 'translateX(16rem)'  }

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full'  loading='eager' priority />
      </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300
        ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm dark:bg-darkTheme/90 dark:shadow-white/10' : ''}`}>

        {/* Logo */}
        <a href='#top'>
          <Image alt='logo' src={isDarkMode ? assets.logo_dark : assets.logo} className='w-28 cursor-pointer mr-14' />
        </a>

        {/* Desktop nav */}
        <ul className={`hidden md:flex items-center gap-1 rounded-full px-6 py-2.5 transition-all duration-300
          ${scrolled ? '' : 'bg-white/60 shadow-sm dark:border dark:border-white/20 dark:bg-transparent'}`}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setActiveLink(href)}
                className={`relative font-Ovo px-4 py-1.5 rounded-full text-sm transition-colors duration-200
                  ${activeLink === href
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'hover:bg-black/5 dark:hover:bg-white/10'}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className='flex items-center gap-3'>
          {/* Dark mode toggle */}
          <button
            onClick={() => setisDarkMode(prev => !prev)}
            title='Toggle theme'
            className='w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition'
          >
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='theme' className='w-5' />
          </button>

          {/* CTA — desktop */}
          <a
            href='#contact'
            className='hidden lg:flex items-center gap-2 px-6 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-gray-200'
          >
            Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon_dark} alt='' className='w-3 invert dark:invert-0' />
          </a>

          {/* Hamburger */}
          <button className='block md:hidden ml-1' onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='menu' className='w-6' />
          </button>
        </div>

        {/* Mobile drawer */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-5 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white transition-transform duration-300 dark:bg-darkHover dark:text-white shadow-2xl'>
          <button className='absolute right-5 top-5' onClick={closeMenu}>
            <Image src={assets.close_black} alt='close' className='w-5 dark:invert' />
          </button>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={closeMenu} className='font-Ovo text-lg hover:opacity-70 transition'>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
