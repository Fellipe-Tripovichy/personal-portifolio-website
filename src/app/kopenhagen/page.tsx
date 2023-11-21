"use client"
import React from 'react'
import ImageAndText from '@/components/sections/ImageAndText'
import HeroProjectImage from '@/components/sections/HeroProjectImage'
import HeroProjectText from '@/components/sections/HeroProjectText'
import ImageWithDescription from '@/components/sections/ImageWithDescription'
import ImageList from '@/components/sections/ImageList'

const areas = [
  {area: 'Design'},
  {area: 'Frontend'}
]

export default function KopenhagenProjectPage () {
  return (
    <main className='w-full bg-beige '>
          <HeroProjectImage/>
          <div className='mx-auto px-4 sm:px-6 md:max-w-6xl mt-8'>
            <HeroProjectText title="VIBRA'S DELIVERY CONFIRMATION APP" description='Elevating the brazilian chocolate consumption experience' areas={areas}/>
            <ImageAndText imageURL='/image-hero.png' title='Isso eh um teste' text='isso aqui tambem eh um teste' side='right'/>
            <ImageAndText imageURL='/image-hero.png' title='Isso eh um teste' text='isso aqui tambem eh um teste' side='left'/>
            <ImageAndText imageURL='/image-hero.png' title='Isso eh um teste' text='isso aqui tambem eh um teste' side='right'/>
            <ImageList/>
          </div>
    </main>
    
  )
}
