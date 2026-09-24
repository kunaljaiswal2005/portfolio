'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const SOCIAL = [
  { label: 'GitHub',   href: 'https://github.com/kunaljaiswal2005',          icon: '⬡' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kunaljaiswal9983/', icon: '💼' },
  { label: 'YouTube',  href: 'https://www.youtube.com/@kunaljaiswal.',        icon: '▶' },
]

const Contact = ({ isDarkMode }) => {
  const [result,   setResult]   = useState('')
  const [loading,  setLoading]  = useState(false)
  const [status,   setStatus]   = useState(null) // 'success' | 'error'

  const onSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setResult('Sending…')
    setStatus(null)
    const formData = new FormData(e.target)
    formData.append('access_key', '2cefea82-1bc8-447e-a2b4-fcdaa35b5796')

    try {
      const res  = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })
      const data = await res.json()
      if (data.success) {
        setResult('Message sent! I\'ll get back to you soon 🎉')
        setStatus('success')
        e.target.reset()
      } else {
        setResult(data.message || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setResult('Network error. Please try again.')
      setStatus('error')
    }
    setLoading(false)
  }

  const inputClass = `w-full p-3.5 outline-none border rounded-xl text-sm transition-colors duration-200
    bg-white dark:bg-white/5 border-gray-200 dark:border-white/10
    focus:border-black dark:focus:border-white placeholder-gray-400 dark:placeholder-white/30 dark:text-white`

  return (
    <div
      id='contact'
      className='w-full px-[12%] py-16 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center dark:bg-none'
    >
      <p className='text-center text-sm uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2 font-Outfit'>Connect with me</p>
      <h2 className='text-center text-5xl font-Ovo mb-4'>Get In Touch</h2>
      <p className='text-center max-w-xl mx-auto mb-14 font-Ovo text-gray-500 dark:text-white/60'>
        Have a project idea or want to collaborate? Drop me a message — I usually respond within 24 hours.
      </p>

      <div className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10'>
        {/* Left — info */}
        <div className='lg:col-span-2 flex flex-col gap-6'>
          <div>
            <h3 className='font-Ovo text-lg font-semibold mb-1 dark:text-white'>Let's talk</h3>
            <p className='text-sm text-gray-500 dark:text-white/50 leading-relaxed'>
              Whether you have a project in mind, a question, or just want to say hello — my inbox is always open.
            </p>
          </div>

          {/* Email */}
          <a
            href='mailto:kunaljaiswal1402@gmail.com'
            className='flex items-center gap-3 text-sm text-gray-600 dark:text-white/70 hover:text-black dark:hover:text-white transition group'
          >
            <span className='w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 dark:border-white/10 group-hover:border-black dark:group-hover:border-white transition'>
              <Image src={assets.mail_icon} alt='' className='w-4 dark:invert' />
            </span>
            kunaljaiswal1402@gmail.com
          </a>

          {/* Socials */}
          <div>
            <p className='text-xs uppercase tracking-widest text-gray-400 mb-3'>Find me on</p>
            <div className='flex gap-3'>
              {SOCIAL.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 hover:border-black dark:hover:border-white hover:-translate-y-0.5 transition-all duration-200 dark:text-white'
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Availability badge */}
          <div className='flex items-center gap-2 text-sm text-green-600 dark:text-green-400'>
            <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse' />
            Available for freelance & full-time roles
          </div>
        </div>

        {/* Right — form */}
        <form onSubmit={onSubmit} className='lg:col-span-3 flex flex-col gap-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <input type='text'    name='name'    placeholder='Your name'  required className={inputClass} />
            <input type='email'   name='email'   placeholder='Your email' required className={inputClass} />
          </div>
          <input type='text' name='subject' placeholder='Subject (optional)' className={inputClass} />
          <textarea
            name='message'
            rows='5'
            placeholder='Tell me about your project or idea…'
            required
            className={`${inputClass} resize-none`}
          />

          <button
            type='submit'
            disabled={loading}
            className='self-start flex items-center gap-2 px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition dark:bg-white dark:text-black dark:hover:bg-gray-200'
          >
            {loading ? 'Sending…' : 'Send Message'}
            {!loading && <Image src={assets.right_arrow_white} alt='' className='w-4 dark:invert' />}
          </button>

          {result && (
            <p className={`text-sm mt-1 font-medium ${status === 'success' ? 'text-green-500' : status === 'error' ? 'text-red-500' : 'text-gray-500'}`}>
              {result}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact
