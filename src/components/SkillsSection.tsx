"use client"
import React from 'react'
import SectionHeader from './SectionHeader'
import SkillsList from './SkillsList'

const devSkills = [
    {skill: 'HTML'},
    {skill: 'CSS'},
    {skill: 'Javascript'},
    {skill: 'Typescript'},
    {skill: 'ReactJS'},
    {skill: 'React Native'},
    {skill: 'NextJS'},
    {skill: 'VueJS'},
    {skill: 'Tailwind'},
    {skill: 'SOLID'},
    {skill: 'Git Flow'}
]

const designSkills = [
    {skill: 'After Effects'},
    {skill: 'Photoshop'},
    {skill: 'Figma'},
    {skill: 'Illustrator'},
    {skill: 'Prototyping'},
    {skill: 'Atomic Design'},
    {skill: 'Wireframe'},
    {skill: 'UX Research'},
    {skill: 'Design Thinking'}
]

const SkillsSection = () => {
  return (
    <section id='skills'>
        <div className='mt-20 md:mt-36'>
            <div className='md:w-1/2 md:pr-6'>
                <SectionHeader title='Skills'/>
            </div>
            <div className='flex flex-col justify-center md:flex-row'>
                <div className='pt-8 md:w-1/2 md:pr-3'>
                    <SkillsList title='Developer Skills' skills={devSkills}/>
                </div>
                <div className='pt-8 md:w-1/2 md:pl-3'>
                    <SkillsList title='Design  Skills' skills={designSkills}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SkillsSection