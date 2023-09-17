"use client"
import React from 'react'
import SectionHeader from './SectionHeader'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section id='about' >
        <div className='flex flex-row justify-between mt-20 md:mt-32 items-center'>
            <div className='hidden md:block md:w-1/2'>
                <img className='ml-1.5 md:w-img-md-w lg:w-img-lg-w rounded-lg drop-shadow-md' alt='' src='/image-hero.png'/>
            </div>
            <div className='md:w-1/2'>
                <SectionHeader title='About me'/>
                <div className='pt-8'>
                    <p className='text-base font-normal text-gray-400'>
                        I am a Brazilian tech enthusiast currently pursuing a Bachelor’s degree in Information Systems at the University of São Paulo. I have experience working on challenging but rewarding tech projects, designing and developing digital products.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection