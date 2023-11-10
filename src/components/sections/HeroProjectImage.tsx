import React from 'react'

const HeroProjectImage = () => {
  return (
    <section id='hero'>
        <div className='flex flex-col gap-y-6'>
            <div className='flex justify-center bg-red-desire-light pt-20'>
                <img className='w-hero-project-sm md:w-hero-project-md rounded-lg drop-shadow-md' alt='' src='/Imagem-capa-kopenhagen.png'/>
            </div>
        </div>
    </section>
  )
}


export default HeroProjectImage