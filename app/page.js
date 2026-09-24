'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect, useState } from "react";

export default function Home() {
  // FIX: Server aur client dono pe same initial value (false) use karo
  // localStorage sirf useEffect mein read karo — hydration ke baad
  const [isDarkMode, setisDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Pehle mounted mark karo
    setMounted(true)

    // Ab localStorage safely read kar sakte hain
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setisDarkMode(true)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode, mounted])

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setisDarkMode={setisDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
      <ScrollToTop />
    </>
  )
}
