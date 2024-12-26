import React from 'react'
import Button from './Button'
import Calender from './Calender'
import Link from 'next/link'
import CallToAction from './CallToAction'

const Hero = () => {
return (
    <div className='guru py-4 sm:py-14 md:py-10 flex flex-col text-center gap-4 sm:gap-8'>
         <h1
        className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'
        style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.5 }}
      >
          Emotracker helps you track your moods every day!
        </h1>
        <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold'>
          Track your emotions, understand yourself better, and improve your mental well-being.
        </h2>
        <CallToAction />
        <Calender demo/>
    </div>
  
)
}

export default Hero
