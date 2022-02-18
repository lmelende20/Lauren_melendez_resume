import React from 'react'
import Image from "next/image"

function TopAboutMe() {
    return (
        <div className='flex flex-col justify-center items-center -my-8 '>         
            <div className="bg-[url('../public/Images/blob2.png')] bg-center bg-contain bg-no-repeat p-32">
                <p className={`font-Nunito lg:text-[20px] md:text-[18px] sm:text-[15px] text-[12px] text-white top-0 lg:w-[400px] md:w-[350px] sm:w-[300px] w-[250px] text-center`}>
                My goal is to join a team at a software development firm where I can fully utilize both my software 
                engineering and digital art skills. I believe that my experience and strengths in software development 
                as well as design would make me an asset to any firm. Stevens Institute has been the perfect environment 
                for me to be challenged in many aspects of technology development and has afforded me an expanded perspective 
                which I can bring to any project that I am a part of. I am an UI/UX designer, a frontend developer, and a 
                graphic designer. I have experience using industry standard software such as Figma, Adobe XD, Adobe Photoshop, 
                Adobe Illustrator, and technologies like React, Next.js, JavaScript, HTML, CSS, and Tailwind CSS.
                </p>
            </div>
            
        </div>
    )
}

export default TopAboutMe
