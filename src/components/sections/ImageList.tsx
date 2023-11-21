"use client"
import React from 'react'
import ImageWithDescription from './ImageWithDescription'
import SectionHeader from '@/components/SectionHeader'

const images = [
    {imageURL: '/Kopenhagen/kopenhagen-1.png', description: 'App Home Screen'},
    {imageURL: '/Kopenhagen/kopenhagen-1.png', description: 'App Home Screen'},
    {imageURL: '/Kopenhagen/kopenhagen-1.png', description: 'App Home Screen'},
    {imageURL: '/Kopenhagen/kopenhagen-1.png', description: 'App Home Screen'},
    {imageURL: '/Kopenhagen/kopenhagen-1.png', description: 'App Home Screen'},
    {imageURL: '/Kopenhagen/kopenhagen-1.png', description: 'App Home Screen'}
]

const ImageList = () => {
  return (
    <div className='mt-20'>
        <div className='pb-14 md:w-1/2'>
            <SectionHeader title='Figma App screens'/>
        </div>
        <div className='w-full justify-center items-center space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 '>
                {images.map((item, idx) => {
                return (
                    <div key={idx} className="flex">
                        <ImageWithDescription imageURL={item.imageURL} description={item.description}/>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default ImageList

