"use client"
import React from 'react'
import SectionHeader from '../SectionHeader'

interface Props{
    imageURL: string
    title: string
    text: string
    side: string
}

const ImageAndText = ({imageURL, title, text, side}: Props) => {

   if(side === 'left') { 
    return (
        <section>
        <div className='flex flex-col gap-y-8 md:gap-y-8 md:flex-row md:justify-between mt-20 md:mt-32 items-center'>
            <div className='w-full md:w-auto'>
                <img className='w-full md:w-img-md-w lg:w-img-lg-w rounded-lg drop-shadow-md' alt='' src={imageURL}/>
            </div>
            <div className='md:w-1/2'>
                <SectionHeader title={title}/>
                <div className='pt-8'>
                    <p className='text-base font-normal text-gray-400'>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    </section>
    )
    }  else if (side === 'right') {
        return (
        <section>
                <div className='flex flex flex-col-reverse gap-y-8 md:gap-y-8 md:flex-row md:justify-between mt-20 md:mt-32 items-center'>
                    <div className='w-full md:w-1/2 '>
                        <SectionHeader title={title}/>
                        <div className='pt-8'>
                            <p className='text-base font-normal text-gray-400'>
                                {text}
                            </p>
                        </div>
                    </div>
                    <div className='w-full md:w-auto'>
                        <img className='w-full md:w-img-md-w lg:w-img-lg-w rounded-lg drop-shadow-md' alt='' src={imageURL}/>
                    </div>
                </div>
            </section>
    )
}
}

export default ImageAndText