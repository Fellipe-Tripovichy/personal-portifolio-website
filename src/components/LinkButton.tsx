'use client'
import React from 'react'
import { Link } from "react-scroll"
import Image from 'next/image'

interface Props {
    title: string
    url: string
}

const LinkButton = ({title, url}: Props) => {
  return (
    <div>
        <Link to={url}>
            <div className='flex flex-row items-center'>
                <Image src='/chevron-right.svg' alt='' width={16} height={16}/>
                <p className='text-gray-400 font-bold'>{title}</p>
            </div>
        </Link>
    </div>
  )
}

export default LinkButton