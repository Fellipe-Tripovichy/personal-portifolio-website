'use client'
import React from 'react'
import Image from 'next/image'

interface Props {
    title?: string
}

const SectionHeader = ({title}: Props) => {
  return (
    <div className='w-full'>
        <div className='flex flex-row space-x-0.5'>
            <img className='w-4 md:w-6' alt='' src='/chevron-right.svg'/>
            <h2 className='text-xl text-berkley-blue font-bold md:text-3xl'>{title}</h2>
        </div>
        <div className='flex flex-row items-center space-x-2'>
            <hr className="w-full h-0.5 mx-auto bg-gray-200 border-0 rounded"></hr>
            <div className='bg-gray-200 w-1 h-1 rounded'></div>
        </div>
    </div>
  )
}

export default SectionHeader