import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const TOOL_NAMES = ['VS Code', 'Firebase', 'MongoDB', 'Figma', 'Git']

const About = ({ isDarkMode }) => {
  return (
    <div id='about' className='w-full px-[12%] py-16 scroll-mt-20'>
      <p className='text-center text-sm uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2 font-Outfit'>Introduction</p>
      <h2 className='text-center text-5xl font-Ovo mb-16'>About Me</h2>

      <div className='w-full flex flex-col lg:flex-row items-start gap-16'>
        {/* Photo */}
        <div className='w-64 sm:w-72 mx-auto lg:mx-0 flex-shrink-0'>
          <div className='relative'>
            <Image src={assets.user_image} alt='Kunal' className='w-full rounded-2xl shadow-xl' />
            {/* Floating badge */}
            <div className='absolute -bottom-4 -right-4 bg-white dark:bg-darkHover rounded-xl px-4 py-2 shadow-lg border border-gray-100 dark:border-white/10'>
              <p className='text-xs text-gray-500 dark:text-white/50'>Available for</p>
              <p className='text-sm font-semibold text-green-500'>Freelance / Jobs</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className='flex-1'>
          <p className='mb-8 max-w-2xl font-Ovo text-gray-600 dark:text-white/70 leading-relaxed'>
            I'm a Computer Science (AI) student and aspiring Full Stack Developer passionate about
            creating responsive and scalable web applications. I enjoy working with React, Node.js,
            Express, MongoDB, and modern web technologies while continuously learning and building
            projects that solve real-world problems.
          </p>

          {/* Info cards */}
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mb-10'>
            {infoList.map(({ icon, iconDark, title, description }, i) => (
              <li
                key={i}
                className='border border-gray-200 dark:border-white/10 rounded-xl p-5 hover:border-black dark:hover:border-white hover:-translate-y-1 transition-all duration-300 bg-white/40 dark:bg-white/5'
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mb-3' />
                <h3 className='font-semibold text-gray-800 dark:text-white mb-1'>{title}</h3>
                <p className='text-gray-500 dark:text-white/60 text-sm leading-snug'>{description}</p>
              </li>
            ))}
          </ul>

          {/* Tools */}
          <h4 className='font-Ovo text-gray-700 dark:text-white/80 mb-4'>Tools I use</h4>
          <ul className='flex items-center gap-3 flex-wrap'>
            {toolsData.map((tool, i) => (
              <li
                key={i}
                title={TOOL_NAMES[i]}
                className='flex flex-col items-center gap-1.5 group'
              >
                <div className='w-12 h-12 flex items-center justify-center border border-gray-200 dark:border-white/20 rounded-xl hover:border-black dark:hover:border-white hover:-translate-y-1 transition-all duration-300 bg-white/60 dark:bg-white/5'>
                  <Image src={tool} alt={TOOL_NAMES[i] || ''} className='w-6' />
                </div>
                <span className='text-[10px] text-gray-400 dark:text-white/40 group-hover:text-gray-700 dark:group-hover:text-white/70 transition-colors'>
                  {TOOL_NAMES[i]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
