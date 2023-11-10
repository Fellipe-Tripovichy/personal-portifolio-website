import React from 'react'

import Badge from 'src/components/Badge.tsx'

interface Area{
    area: string
}

interface Props{
    title: string
    description: string
    areas: Area[]
}


const HeroProjectText = ({title, description, areas} : Props) => {
  return (
    <section id='hero'>
        <div className='flex flex-col gap-y-6'>
            <div className='flex flex-col justify-start gap-y-6 w-9/12 md:w-1/2'>
                <div className='flex flex-row space-x-2'>
                    {areas.map((item, idx) => {
                        return <Badge key={idx} title={item.area}/>
                    })}
                </div>
                <div className='flex flex-col content-start space-x-4'>
                    <div className='flex flex-row gap-x-4'>
                        <img className='w-1.5 lg:w-width-lg-graphic-hero lg:pb-2' alt='' src='/grafismo-hero.svg'/>
                        <h1 className='uppercase text-3xl pb-2 md:pb-3 text-left font-semibold text-gray-800 md:text-4xl lg:text-4xl'>{title}</h1>
                    </div>
                    <div className='pl-3'>
                        <p className='text-base font-normal text-gray-400'>
                            {description}                    
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}


export default HeroProjectText