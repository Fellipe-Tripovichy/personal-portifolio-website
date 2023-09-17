"use client"
import React from 'react'
import LinkButton from './LinkButton'
import Image from 'next/image'
import Badge from './Badge'

interface Area{
    area: string
}

interface Props{
    imageURL: string
    title: string
    description: string
    linkButtonTitle: string
    linkButtonURL: string
    areas: Area[]
}

const ProjectCard = ({imageURL, title, description, linkButtonTitle, linkButtonURL, areas}: Props) => {
  return (
    <div className='flex flex-col -space-y-2 w-card-sm md:w-card-md drop-shadow-md hover:drop-shadow-xl'>
        <div className='z-30 rounded-lg'>
            <img className='rounded-lg w-image-card-sm md:w-image-card-md' alt='' src={imageURL}/>
        </div>
        <div className='w-bottom-card-sm md:w-bottom-card-md mx-2 px-4 pt-6 pb-4 bg-white space-y-4 rounded-lg'>
            <div className='flex flex-row space-x-2'>
            {areas.map((item, idx) => {
                return <Badge key={idx} title={item.area}/>
            })}
            </div>
            <div className='flex flex-col space-y-2'>
                <h3 className='text-xl font-bold text-cerulean'>{title}</h3>
                <p className='text-sm text-gray-400 font-base'>{description}</p>
            </div>
            <LinkButton title={linkButtonTitle} url={linkButtonURL}/>
        </div>
    </div>
  )
}

export default ProjectCard