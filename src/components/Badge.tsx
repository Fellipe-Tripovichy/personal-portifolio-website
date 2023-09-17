"use client"
import React from 'react'
import Image from 'next/image'

interface Props {
    title: string
}

const Badge = ({title}: Props) => {

    if(title === 'Frontend'){
        return (
            <div className='flex flex-row bg-north-texas-green px-3 py-0.5 mr-2 mt-2 text-white rounded-sm font-semibold'>
                <Image className='mr-2' src='/command-palette.svg' alt='' width={16} height={16}/>
                {title}
            </div>
        )
    } else if(title === 'Design'){
        return (
            <div className='flex flex-row bg-burnt-sienna px-3 py-0.5 mr-2 mt-2 text-white rounded-sm font-semibold'>
                <Image className='mr-2' src='/stack.svg' alt='' width={16} height={16}/>
                {title}
            </div>
        )
    } else {
        return (
            <div className='bg-red-desire px-3 py-0.5 mr-2 mt-2 text-white rounded-sm font-semibold'>{title}</div>
        )
    }
    
}

export default Badge