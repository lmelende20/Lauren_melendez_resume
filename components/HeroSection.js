import React from 'react'
import Image from "next/image"

function HeroSection() {
    return (
        <div className='flex flex-col justify-center h-full'>
            <div className="flex items-center justify-around md:flex-row flex-col-reverse">
            <div className="mr-[20px] md:text-left text-center">
                <h1 className="lg:text-[45px] md:text-[35px] text-[25px] font-Lora">Hello! I’m Lauren Melendez!</h1>
                <h2 className="lg:text-[20px] text-[13px] font-Nunito">I am a UI/UX Designer, Frontend Developer, and Graphic Designer.</h2>
            </div>
            <div className="md:w-1/3 w-full max-w-[300px] flex justify-center md:block relative mb-[32px] md:mb-0">
                <Image src='/Images/blob1.png' alt='blob' layout="intrinsic" objectFit="scale-down" width={481} height={453}/>
                <div className="absolute top-0">
                    <Image src='/Images/Mask_Group.svg' alt='selfPortrait' layout="intrinsic" objectFit="scale-down" width={481} height={453}/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HeroSection
