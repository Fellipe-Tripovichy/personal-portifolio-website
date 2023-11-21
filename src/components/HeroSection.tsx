"use client"
import React from 'react'

const HeroSection = () => {
  return (
    <section id='hero'>
        <div className='flex flex-row items-start justify-start pt-32 lg:pt-44 md:justify-between md:items-center'>
            <div className='flex flex-col'>
                <div className='flex flex-row items-center justify-center space-x-4'>
                    <img className='w-1.5 lg:w-2' alt='' src='/grafismo-hero.svg'/>
                    <h1 className='text-3xl text-left font-bold text-gray-800 md:text-4xl lg:text-5xl'>HI, MY NAME <br/> IS FELLIPE</h1>
                </div>
                <img className='pl-1.5 md:pl-0 ml-1.5 w-56 lg:w-72' alt='' src='/cargos-hero.svg'/>
            </div>
            <div className='hidden md:block'>
                <img className='ml-1.5 md:w-img-md-w lg:w-img-lg-w rounded-lg drop-shadow-md' alt='' src='/image-hero.png'/>
            </div>
        </div>
    </section>
  )
}

export default HeroSection