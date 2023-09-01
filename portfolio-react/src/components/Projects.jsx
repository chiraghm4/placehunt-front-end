import React from 'react'
import img from '../assets/dorm-room.jpg'
import ProjectItems from './ProjectItems'

function Projects() {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, voluptatem neque incidunt architecto fugit accusamus eaque unde nam quo qui nostrum minima id a. Enim sequi nemo beatae nobis laudantium!</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItems img={img} title="PlaceHunt" />
        <ProjectItems img={img} title="CryptoApp" />
        <ProjectItems img={img} title="EasyHired" />
        <ProjectItems img={img} title="Mining Script" />
      </div>
    </div>
  )
}

export default Projects