'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setisDarkMode] = useState(() => {
  if (typeof window === "undefined") return false;

  return (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
});
  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }

  },[isDarkMode])
  return (
    <>
    <Navbar isDarkMode = {isDarkMode} setisDarkMode={setisDarkMode}/>
    <Header isDarkMode = {isDarkMode}  />
    <About isDarkMode = {isDarkMode} /> 
    <Services isDarkMode = {isDarkMode} />
    <Work isDarkMode = {isDarkMode} />
    <Contact isDarkMode = {isDarkMode} />
    <Footer isDarkMode = {isDarkMode} />
    </>
  );
}
