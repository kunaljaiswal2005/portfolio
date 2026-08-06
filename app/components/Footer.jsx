import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
   
const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={isDarkMode?assets.logo_dark:assets.logo} alt='' className='w-36 mx-auto mb-2'/>
        </div>
        <div className='w-max flex items-center gap-2 mx-auto'>
             <Image src={assets.mail_icon} alt='' className='w-6 '/>
             kunaljaiswal1402@gmail.com
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>
                © 2026 Kunal Jaiswal. All rights reserved.  
            </p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/kunaljaiswal2005">Github</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/kunaljaiswal9983/">Linkedin</a></li>
                <li><a target='_blank' href="https://www.youtube.com/@kunaljaiswal.">Youtube</a></li>
                
            </ul>
        </div>
    </div>
  )
}

export default Footer