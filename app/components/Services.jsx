import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-16 scroll-mt-20'>
      <p className='text-center text-sm uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2 font-Outfit'>What I offer</p>
      <h2 className='text-center text-5xl font-Ovo mb-4'>My Services</h2>
      <p className='text-center max-w-2xl mx-auto mb-14 font-Ovo text-gray-500 dark:text-white/60'>
        From pixel-perfect UIs to robust backend APIs — I build complete, production-ready web solutions.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {serviceData.map(({ icon, title, description, link }, i) => (
          <div
            key={i}
            className='group relative flex flex-col border border-gray-200 dark:border-white/10 rounded-2xl p-7 bg-white/50 dark:bg-white/5 hover:border-black dark:hover:border-white hover:-translate-y-1 transition-all duration-300 cursor-pointer'
          >
            {/* Number badge */}
            <span className='absolute top-5 right-5 text-xs font-mono text-gray-300 dark:text-white/20'>
              {String(i + 1).padStart(2, '0')}
            </span>

            <div className='w-11 h-11 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-white/10 mb-5'>
              <Image src={icon} alt='' className='w-6' />
            </div>
            <h3 className='font-semibold text-gray-800 dark:text-white mb-2'>{title}</h3>
            <p className='text-sm text-gray-500 dark:text-white/60 leading-relaxed flex-1'>{description}</p>

            <a
              href={link}
              className='inline-flex items-center gap-1.5 text-xs font-medium mt-5 text-black dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'
            >
              Read more <Image src={assets.right_arrow} alt='' className='w-3 dark:invert' />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
