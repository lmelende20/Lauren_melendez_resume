import React from 'react'
import Education from '../components/Education'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import TopAboutMe from '../components/TopAboutMe'

function aboutme() {
    return (
        <div className='overflow-x-hidden bg-lightPink min-h-screen flex flex-col'>
            <div className="flex flex-col bg-lightPink lg:px-[100px] md:px-[60px] px-[30px]">
                <Navbar />
            </div>
            <TopAboutMe/>
            <Skills/>
            <Education/>
            <div className='bg-navyBlue lg:px-[100px] md:px-[60px] px-[30px] mt-auto h-full'>
                <Footer />
            </div>
        </div>
    )
}

export default aboutme
