'use client'
import React from 'react'
import Image from 'next/image'

interface Skill {
    skill: string
}

interface Props {
    title?: string
    skills: Skill[]
}

const SkillsList = ({title, skills}: Props) => {
  return (
    <div className='flex flex-col justify-center items-center mx-auto'>
        <div className='flex flex-row space-x-2'>
            <Image src='/chevron-down.svg' alt='' height={16} width={16}/>
            <h4 className='font-bold text-base text-gray-600 md:text-xl'>{title}</h4>
            <Image src='/chevron-down.svg' alt='' height={16} width={16}/>
        </div>
        <div className='flex flex-col items-center pt-4 space-y-0'>
            <hr className="w-full h-2 mx-auto border-gray-200 border-t-2 border-dashed"></hr>
            <div className='flex flex-row'>
                <hr className="w-0 h-10 mx-auto border-gray-200 border-l-2 border-dashed"></hr>
                <div className='flex flex-wrap flex-row justify-center pt-1 px-4'>
                    {skills.map((item, idx) => {
                        return <p key={idx} className='bg-cerulean px-4 py-1 mr-2 mt-2 text-white rounded font-semibold'>{item.skill}</p>
                    })}
                </div>
                <hr className="w-0 h-10 mx-auto border-gray-200 border-l-2 border-dashed"></hr>
            </div>
        </div>
    </div>
  )
}

export default SkillsList