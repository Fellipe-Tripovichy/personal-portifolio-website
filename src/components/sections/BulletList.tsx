import React from 'react'

import SectionHeader from '@/components/SectionHeader'
import BulletWithIcon from './BulletWithIcon'


interface bulletsStruct{
    imageURL: string
    description: string
    title: string
}
interface Props{
    title: string
    bullets: bulletsStruct[]
}

const BulletList = ({title, bullets}: Props) => {
    return (
        <div className='mt-20'>
            <div className='pb-12 md:w-1/2'>
                <SectionHeader title={title}/>
            </div>
            <div className='w-full justify-center grow items-start space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:grow-h md:gap-8 '>
                    {bullets.map((item, idx) => {
                    return (
                        <div key={idx} className="flex">
                            <BulletWithIcon imageURL={item.imageURL} title={item.title} description={item.description}/>
                        </div>
                    );
                })}
            </div>
        </div>
      )
}

export default BulletList