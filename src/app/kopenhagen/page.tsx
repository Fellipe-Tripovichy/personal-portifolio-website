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
  {imageURL: '/Kopenhagen/kopenhagen-11.png', description: 'Home Screen'},
  {imageURL: '/Kopenhagen/kopenhagen-2.png', description: "Product's page"},
  {imageURL: '/Kopenhagen/kopenhagen-3.png', description: 'Checkout'},
  {imageURL: '/Kopenhagen/kopenhagen-4.png', description: "Order's details"},
  {imageURL: '/Kopenhagen/kopenhagen-5.png', description: 'Loyalty program'},
  {imageURL: '/Kopenhagen/kopenhagen-6.png', description: 'App Settings'}
]

const bulletsListSteps = [
  {imageURL: '/stack-white.svg', title:'Unveiling Brand Essence and User Needs', description: "To comprehend the brand's values and digital needs, we conducted in-depth interviews with consumers, franchise owners, and employees. This thorough approach formed the basis for a solid product strategy."},
  {imageURL: '/stack-white.svg', title:'Identifying Key Competitors and Their Strategies', description: 'I analyzed competitors in the Brazilian retail chocolate market to identify opportunities and challenges. This helps ensure our application aligns with market trends and meets consumer expectations.'},
  {imageURL: '/stack-white.svg', title:'Crafting an Intuitive User Interface', description: 'I developed initial prototypes of application screens, prioritizing user-friendliness and functionality. I conducted thorough usability testing with the most relevant Kopenhagen consumers for the project, incorporating their feedback for iterative design refinements.'},
  {imageURL: '/stack-white.svg', title:'Data-Driven Insights for Continuous Improvement', description: 'After the app launch, I used data analytics tools to collect and analyze user behavior and app performance. This helped me confirm the effectiveness of features and find areas for improvement. By relying on data, I kept the app relevant, engaging, and aligned with user needs.'},
]

export default function KopenhagenProjectPage () {
  return (
    <main className='w-full bg-beige '>
          <HeroProjectImage imageURL="/Kopenhagen/Imagem-capa-kopenhagen.png" backgroundColor='bg-red-desire-light'/>
          <div className='mx-auto px-4 sm:px-6 md:max-w-6xl mt-8'>
            <HeroProjectText title="E-COMMERCE APP KOPENHAGEN" description='Elevating the brazilian chocolate consumption experience' areas={areas}/>
            <ImageAndText imageURL='/image-hero.png' title='Overview' text='I collaborated on creating an e-commerce app for Kopenhagen, a Brazilian brand of sweets and chocolates. The app aimed to provide a digital platform for product purchases and improve the consumer experience with loyalty plans, promotions, and engaging interactions.' side='right'/>
            <BulletList title='My contributions' bullets={bulletsListSteps}/>
            <ImageAndText imageURL='/image-hero.png' title='Information Architecture' text='The app features a user-friendly architecture that simplifies shopping. Users can easily find products and make purchases with just a few clicks. The smart search efficiently matches search terms with relevant results. The streamlined checkout process minimizes the number of steps required. Additionally, the reliable logistics ensure fast shipment, allowing orders to be received on time.' side='left'/>
            <ImageList title="Figma screens" images={imageListInformation}/>
          </div>
    </main>
    
  )
}
