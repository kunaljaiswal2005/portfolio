import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const LINKS = [
  { label: 'Home',     href: '#top' },
  { label: 'About',    href: '#about' },
  { label: 'Work',     href: '#work' },
  { label: 'Contact',  href: '#contact' },
]

const SOCIAL = [
  { label: 'GitHub',   href: 'https://github.com/kunaljaiswal2005' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kunaljaiswal9983/' },
  { label: 'YouTube',  href: 'https://www.youtube.com/@kunaljaiswal.' },
]

const Footer = ({ isDarkMode }) => {
  return (
    <footer className='mt-20 border-t border-gray-200 dark:border-white/10'>
      <div className='px-[12%] pt-10 pb-6'>
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8'>
          {/* Logo + tagline */}
          <div>
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='logo' className='w-28 mb-2' />
            <p className='text-sm text-gray-400 dark:text-white/40 max-w-xs leading-relaxed'>
              Building modern web applications with clean code and thoughtful UX.
            </p>
          </div>

          {/* Nav */}
          <div className='flex flex-col gap-2'>
            <p className='text-xs uppercase tracking-widest text-gray-400 mb-1'>Navigate</p>
            <ul className='flex flex-wrap gap-x-6 gap-y-1.5'>
              {LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className='text-sm text-gray-500 dark:text-white/50 hover:text-black dark:hover:text-white transition'>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className='flex flex-col gap-2'>
            <p className='text-xs uppercase tracking-widest text-gray-400 mb-1'>Social</p>
            <ul className='flex gap-4'>
              {SOCIAL.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target='_blank' rel='noopener noreferrer'
                    className='text-sm text-gray-500 dark:text-white/50 hover:text-black dark:hover:text-white transition'>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-gray-100 dark:border-white/5 text-xs text-gray-400 dark:text-white/30'>
          <p>© {new Date().getFullYear()} Kunal Jaiswal. All rights reserved.</p>
          <a href='mailto:kunaljaiswal1402@gmail.com' className='hover:text-black dark:hover:text-white transition'>
            kunaljaiswal1402@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
