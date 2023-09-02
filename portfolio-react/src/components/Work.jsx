import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        start_year: 2023,
        title: "Google",
        duration: '1 month',
        details: 'lorem ipsem'
    },
    {
        start_year: 2023,
        title: "Meta",
        duration: '1 month',
        details: 'lorem ipsem'
    },
    {
        start_year: 2023,
        title: "Apple",
        duration: '1 month',
        details: 'lorem ipsem'
    },
    {
        start_year: 2023,
        title: "IoThings",
        duration: '1 month',
        details: 'lorem ipsem'
    }
]

function Work() {
  return (
    <div id="works" className='max-w-[1040px] m-auto md:pl-20 p-4 my-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx)=>{
            return <WorkItem key={idx} data={item} />
        })}
    </div>
  )
}

export default Work