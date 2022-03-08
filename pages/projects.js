import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Programming from '../components/projects/Programming'
import Figma from '../components/projects/FigmaDesigns'

function projects() {
    const [onFigma, setOnFigma] = useState(true)
    return (
        <div className='overflow-x-hidden bg-lightPink min-h-screen flex flex-col'>
            <div className="flex flex-col bg-lightPink lg:px-[100px] md:px-[60px] px-[30px]">
                <Navbar />
            </div>
            
            <div className='flex w-screen bg-whitePink py-[20px] mt-[10px] lg:px-[100px] md:px-[60px] px-[30px]'>
                <button className={`font-Lora lg:text-[40px] md:text-[30px] text-[20px] hover:text-maroonRed ${onFigma ? 'font-bold' : 'font-regular'} lg:pr-[40px] md:pr-[30px] sm:pr-[20px] pr-[10px]`} onClick={() => setOnFigma(true)}>Programming</button>
                <p className='lg:text-[40px] md:text-[30px] text-[20px] lg:pr-[40px] md:pr-[30px] sm:pr-[20px] pr-[10px] '>
                    |
                </p>
                <button className={`font-Lora lg:text-[40px] md:text-[30px] text-[20px] hover:text-maroonRed ${onFigma ? 'font-regular' : 'font-bold'}`} onClick={() => setOnFigma(false)}>Design</button>
            </div>
            <div>
            {onFigma ? <Programming/> : <Figma/>}
            </div>
     
            <div className='bg-navyBlue lg:px-[100px] md:px-[60px] sm:px-[30px] px-[15px] mt-auto h-full'>
                <Footer />
            </div>
        </div>
    )
}

export default projects
