import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from "next/image"

function resume() {
    return (
        <div className='overflow-x-hidden bg-lightPink min-h-screen flex flex-col'>
            <div className="flex flex-col bg-lightPink lg:px-[100px] md:px-[60px] px-[30px]">
                <Navbar />
            </div>
            <div className='flex flex-col items-center hidden md:flex pt-[30px]'>
                <Image src='/Images/LaurenMelendezResume.png' alt='resume' width={600} height={800} className='rounded-[11px]'/>
                <button className='lg:rounded-[10px] rounded-[8px] bg-maroonRed lg:h-[40px] lg:w-[120px] mb-[20px] h-[40px] w-[100px] hover:bg-buttonHover font-Nunito text-white lg:text-[15px] text-[13px] mt-[20px]'  onClick={() => window.open("/Images/LaurenMelendezResume.pdf", '_blank')}>
                        View Resume
                </button>
            </div>
            <div className='flex flex-col items-center md:hidden pt-[20px]'>
                <Image src='/Images/LaurenMelendezResume.png' alt='resume' width={300} height={400} className='rounded-[8px] '/>
                <button className='lg:rounded-[10px] rounded-[8px] bg-maroonRed lg:h-[40px] lg:w-[120px] mb-[20px] h-[40px] w-[100px] hover:bg-buttonHover font-Nunito text-white lg:text-[15px] text-[13px] mt-[20px]'  onClick={() => window.open("/Images/LaurenMelendezResume.pdf", '_blank')}>
                        View Resume
                </button>
            </div>
            <div className='bg-navyBlue lg:px-[100px] md:px-[60px] px-[30px] mt-auto h-full'>
                <Footer />
            </div>
        </div>
    )
}

export default resume
