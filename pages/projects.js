import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectsPast from '../components/ProjectsPast'
import ProjectsInProgress from '../components/ProjectsInProgress'

function projects() {
    const [onPast, setOnPast] = useState(true)
    return (
        <div className='overflow-x-hidden bg-lightPink min-h-screen flex flex-col'>
            <div className="flex flex-col bg-lightPink lg:px-[100px] md:px-[60px] px-[30px]">
                <Navbar />
            </div>
            
            <div className='flex w-screen bg-whitePink py-[20px] mt-[10px] lg:px-[100px] md:px-[60px] px-[30px]'>
                <button className={`font-Lora lg:text-[40px] md:text-[30px] text-[20px] ${onPast ? 'font-bold' : 'font-regular'} pr-[40px]`} onClick={() => setOnPast(true)}>Completed</button>
                <button className={`font-Lora lg:text-[40px] md:text-[30px] text-[20px] ${onPast ? 'font-regular' : 'font-bold'}`} onClick={() => setOnPast(false)}>In Progress</button>
            </div>
            {onPast ? <ProjectsPast/> : <ProjectsInProgress/>}
            <div className='bg-navyBlue lg:px-[100px] md:px-[60px] px-[30px] mt-[40px] mt-auto h-full'>
                <Footer />
            </div>
        </div>
    )
}

export default projects
