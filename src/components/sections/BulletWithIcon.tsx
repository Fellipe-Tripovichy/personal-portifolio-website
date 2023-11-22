"use client"
import React from 'react'

interface Props{
    imageURL: string
    description: string
    title: string
}

const BulletWithIcon = ({imageURL, title, description}:Props) => {
  return (
    <div className='w-full h-full'>
        <div className='flex flex-col -space-y-6'>
            <div className='z-30 pl-4'>
                <div className='bg-cerulean flex flex-row items-center justify-center p-2 w-12 h-12 '>
                    <img className='w-8' alt='' src={imageURL}/>
                </div>
            </div>
            <div className='bg-gray-50 pb-4 px-4 space-y-2 pt-8 h-fit'>
                <p className='text-sm font-bold text-cerulean'>
                    {title}
                </p>
                <p className='text-sm font-regular text-gray-400'>
                    {description}
                </p>
            </div>
        </div>
    </div>
  )
}

export default BulletWithIcon