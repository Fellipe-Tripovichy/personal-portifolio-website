"use client"
import React from 'react'
import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'

const projects = [
    {imageURL: '/Kopenhagen/Capa-Card-Kopenhagen.png', title: 'E-commerce Kopenhagen', description:'Lorem ipsum dolor sit amet consectetur. Blandit nulla fermentum leo proin ultricies eleifend. Sed nunc sed platea luctus sit.', linkButtonTitle: 'View Project', linkButtonURL:'http://localhost:3000/projects/KopenhagenProjectPage', areas:[{ area: 'Design' }], pageDestination:'/kopenhagen'},
    {imageURL: '/Vibra/Capa-Card-Vibra.png', title: '+Transportes Fuel Delivery', description:'Lorem ipsum dolor sit amet consectetur. Blandit nulla fermentum leo proin ultricies eleifend. Sed nunc sed platea luctus sit.', linkButtonTitle: 'View Project', linkButtonURL:'http://localhost:3000/projects/KopenhagenProjectPage', areas:[{ area: 'Design' }], pageDestination:'/Vibra'}
]

const ProjectsSection = () => {
  return (
    <section id='projects'>
        <div className='flex flex-col mt-20 md:mt-36 justify-center'>
            <div className='pb-8 md:w-1/2 md:pr-6' >
                <SectionHeader title='Work I’m proud of'/>
            </div>
            <div className='flex flex-col items-center space-y-8 md:justify-start md:flex-wrap md:flex-row md:space-y-0'>
                {projects.map((item,idx) => {
                    return (
                        <div className='md:pr-6 md:pt-6' key={idx}>
                            <ProjectCard title={item.title} imageURL={item.imageURL} description={item.description} linkButtonTitle={item.linkButtonTitle} linkButtonURL={item.linkButtonURL} areas={item.areas} pageDestination={item.pageDestination}/>
                        </div>
                    )

                })}
            </div>
        </div>
    </section>
  )
}

export default ProjectsSection