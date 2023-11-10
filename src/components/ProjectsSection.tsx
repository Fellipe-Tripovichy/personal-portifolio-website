"use client"
import React from 'react'
import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'

const projects = [
    {imageURL: '/Image-project.png', title: 'Ecommerce Kopenhagen', description:'Lorem ipsum dolor sit amet consectetur. Blandit nulla fermentum leo proin ultricies eleifend. Sed nunc sed platea luctus sit.', linkButtonTitle: 'Ver projeto', linkButtonURL:'http://localhost:3000/projects/KopenhagenProjectPage', areas:[{ area: 'Frontend' }, { area: 'Backend' }]},
    {imageURL: '/Image-project-2.png', title: '+Transportes | Vibra Energia', description:'Lorem ipsum dolor sit amet consectetur. Blandit nulla fermentum leo proin ultricies eleifend. Sed nunc sed platea luctus sit.', linkButtonTitle: 'Ver projeto', linkButtonURL:'hero', areas:[{ area: 'Design' }, { area: 'Frontend' }]},
    {imageURL: '/Image-project-2.png', title: '+Transportes | Vibra Energia', description:'Lorem ipsum dolor sit amet consectetur. Blandit nulla fermentum leo proin ultricies eleifend. Sed nunc sed platea luctus sit.', linkButtonTitle: 'Ver projeto', linkButtonURL:'hero', areas:[{ area: 'Design' }, { area: 'Frontend' }]},
    {imageURL: '/Image-project-2.png', title: '+Transportes | Vibra Energia', description:'Lorem ipsum dolor sit amet consectetur. Blandit nulla fermentum leo proin ultricies eleifend. Sed nunc sed platea luctus sit.', linkButtonTitle: 'Ver projeto', linkButtonURL:'hero', areas:[{ area: 'Design' }, { area: 'Frontend' }]},

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
                            <ProjectCard title={item.title} imageURL={item.imageURL} description={item.description} linkButtonTitle={item.linkButtonTitle} linkButtonURL={item.linkButtonURL} areas={item.areas}/>
                        </div>
                    )

                })}
            </div>
        </div>
    </section>
  )
}

export default ProjectsSection