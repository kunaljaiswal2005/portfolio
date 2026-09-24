'use client'
import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title='Back to top'
      className='fixed bottom-6 right-6 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-black text-white shadow-lg hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-gray-200'
    >
      ↑
    </button>
  )
}

export default ScrollToTop
