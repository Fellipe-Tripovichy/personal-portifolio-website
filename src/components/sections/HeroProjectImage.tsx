"use client"
import React from 'react'

interface Props{
  imageURL: string
  backgroundColor: string
}

const HeroProjectImage = ({imageURL, backgroundColor}: Props) => {
  return (
    <section id='hero'>
        <div className='flex flex-col gap-y-6'>
            <div className={`flex justify-center ${backgroundColor}  pt-20`}>
                <img className='w-hero-project-sm md:w-hero-project-md rounded-lg drop-shadow-md' alt='' src={imageURL}/>
            </div>
        </div>
    </section>
  )
}


export default HeroProjectImage