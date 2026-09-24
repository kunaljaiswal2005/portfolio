'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const ROLES = ['Full Stack Developer', 'MERN Stack Developer', 'Frontend Engineer', 'React Developer']

const Header = ({ isDarkMode }) => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping]       = useState(true)

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex]
    let timeout
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIndex(i => (i + 1) % ROLES.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-5'>
      {/* Avatar */}
      <div className='relative'>
        <Image
          src={assets.profile_img}
          alt='Kunal Jaiswal'
          className='w-32 rounded-2xl ring-4 ring-purple-200 dark:ring-purple-800 shadow-lg'
        />
        {/* Online indicator */}
        <span className='absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-darkTheme' title='Open to work' />
      </div>

      {/* Greeting */}
      <h3 className='flex items-center gap-2 text-xl md:text-2xl font-Ovo'>
        Hi, I'm Kunal Jaiswal
        <Image src={assets.hand_icon} alt='wave' className='w-6' />
      </h3>

      {/* Role — typewriter */}
      <h1 className='text-3xl sm:text-5xl lg:text-6xl font-Ovo min-h-[1.2em]'>
        {displayed}
        <span className='inline-block w-0.5 h-[0.9em] align-middle bg-current ml-1 animate-pulse' />
      </h1>

      {/* Bio */}
      <p className='max-w-xl mx-auto font-Ovo text-gray-600 dark:text-white/70 leading-relaxed'>
        Computer Science (AI) student passionate about building scalable web applications
        with React, Node.js, Express & MongoDB.
      </p>

      {/* Stats row */}
      <div className='flex items-center gap-8 py-3 px-8 rounded-2xl bg-white/60 dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm'>
        {[
          { value: '5+',  label: 'Projects' },
          { value: '1+',  label: 'Years exp' },
          { value: '10+', label: 'Tech stack' },
        ].map(({ value, label }) => (
          <div key={label} className='text-center'>
            <p className='text-2xl font-bold font-Ovo'>{value}</p>
            <p className='text-xs text-gray-500 dark:text-white/50'>{label}</p>
          </div>
        ))}
      </div>

      {/* CTA buttons */}
      <div className='flex flex-col sm:flex-row items-center gap-4'>
        <a
          href='#contact'
          className='px-8 py-3 bg-black text-white rounded-full flex items-center gap-2 hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-gray-200 shadow-md'
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt='' className='w-4 dark:invert' />
        </a>
        <a
          href='/sample-resume.pdf'
          download
          className='px-8 py-3 border border-gray-400 rounded-full flex items-center gap-2 bg-white hover:bg-gray-50 dark:bg-transparent dark:text-white dark:border-white/40 dark:hover:bg-white/5 transition shadow-sm'
        >
          My Resume
          <Image src={assets.download_icon} alt='' className='w-4 dark:invert' />
        </a>
      </div>
    </div>
  )
}

export default Header
