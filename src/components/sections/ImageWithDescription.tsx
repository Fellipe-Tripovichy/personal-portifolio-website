"use client"
import React from 'react'

interface Props{
    imageURL: string
    description: string
}

const ImageWithDescription = ({imageURL, description}: Props) => {
  return (
    <div className='w-full'>
        <div className='flex'>
            <div className='flex-none relative pr-2 drop-shadow-md '>
                <div className='w-40 md:w-40 absolute object-cover inset-y-6'>
                    <div className='bg-white flex flex-row gap-x-2 items-center justify-start py-1'>
                        <img className='w-4 ml-2' alt='' src='/chevron-right.svg'/>
                        <p className='text-sm font-bold text-gray-400'>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex-auto'>
                <img className='w-full' alt='' src={imageURL}/>
            </div>
        </div>
    </div>
  )
}

export default ImageWithDescription