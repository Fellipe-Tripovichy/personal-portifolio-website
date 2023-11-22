"use client"
import React from 'react'
import ImageAndText from '@/components/sections/ImageAndText'
import HeroProjectImage from '@/components/sections/HeroProjectImage'
import HeroProjectText from '@/components/sections/HeroProjectText'
import ImageList from '@/components/sections/ImageList'
import BulletList from '@/components/sections/BulletList'

const areas = [
  {area: 'Design'}
]

const imageListInformation = [
  {imageURL: '/Vibra/Vibra-1.png', description: 'Home Screen'},
  {imageURL: '/Vibra/Vibra-2.png', description: "Delivery details"},
  {imageURL: '/Vibra/Vibra-3.png', description: 'Delivery confirmation'},
  {imageURL: '/Vibra/Vibra-4.png', description: "Delivery confirmed"},
  {imageURL: '/Vibra/Vibra-5.png', description: 'Training courses'},
  {imageURL: '/Vibra/Vibra-6.png', description: 'Training course details'}
]

const bulletsListSteps = [
  {imageURL: '/stack-white.svg', title:'Legal Compliance and Safety Assurance', description: "I thoroughly explored the complex laws and regulations related to fuel transportation to ensure full compliance of the +Transportes application. This phase specifically aimed to understand the legal requirements that are essential for ensuring the safety and integrity of all operations involved in the fuel distribution process."},
  {imageURL: '/stack-white.svg', title:'User-Centered Design Exploration', description: 'Immersed myself in the logistics landscape of Vibra Energia, gaining insights into challenges faced by partner carriers, end customers, and drivers. This exploration phase was instrumental in guiding the development of the +Transportes application, ensuring a genuinely user-centered solution aligned with the practical needs of all stakeholders.'},
  {imageURL: '/stack-white.svg', title:'Prototyping and Stakeholder Testing', description: "Transformed conceptual ideas into tangible prototypes during this intermediate phase. Rigorous testing involving Vibra Energia, carriers, and customers provided valuable feedback for iterations, refining the application's functionality and usability to accurately meet defined requirements."},
  {imageURL: '/stack-white.svg', title:'Strategic Market Analysis and Solution Proposal', description: "Conducted a comprehensive analysis of the fuel distribution market, identifying competitors and market opportunities. Engaged in virtual interviews with Vibra's operational staff, drivers, carriers, and gas station owners to map out all transportation-related workflows."},
]

export default function VibraProjectPage () {
  return (
    <main className='w-full bg-beige '>
          <HeroProjectImage imageURL="/Vibra/Imagem-capa-Vibra.png" backgroundColor='bg-[#D1EAD9]'/>
          <div className='mx-auto px-4 sm:px-6 md:max-w-6xl mt-8'>
            <HeroProjectText title="+Transportes Fuel Delivery APP" description='Optimizing the Delivery Validation Process for the Largest Fuel Distributor in Latin America, Vibra Energia' areas={areas}/>
            <ImageAndText imageURL='/image-hero.png' title='Overview' text="As a Product Designer at Vibra Energia, the leading fuel distributor in Latin America responsible for over 80% of all fuel deliveries in Brazil, I led the design of the +Transportes app. This innovative application aimed to revolutionize the fuel delivery industry by digitalizing the validation process for completed deliveries. The app streamlined confirmation procedures and also played a crucial role in enhancing safety standards. Specifically, it provided user-friendly safety training courses tailored for high-risk product delivery drivers. By seamlessly integrating these features, +Transportes optimized operational efficiency for the company while prioritizing the safety and skill development of the workforce involved in the intricate process of fuel distribution across the vast landscape of Brazil." side='right'/>
            <BulletList title='My contributions' bullets={bulletsListSteps}/>
            <ImageAndText imageURL='/image-hero.png' title='Information Architecture' text='The app features a user-friendly architecture that simplifies shopping. Users can easily find products and make purchases with just a few clicks. The smart search efficiently matches search terms with relevant results. The streamlined checkout process minimizes the number of steps required. Additionally, the reliable logistics ensure fast shipment, allowing orders to be received on time.' side='left'/>
            <ImageList title="Figma screens" images={imageListInformation}/>
          </div>
    </main>
    
  )
}
