import React from 'react'
import Image from "next/image"

function TopAboutMe() {
    return (
        <div className='flex flex-col justify-center items-center -my-8 '>         
            <div className="bg-[url('../public/Images/blob2.png')] bg-center bg-contain bg-no-repeat p-32">
                <p className={`font-Nunito lg:text-[20px] md:text-[15px] text-[12px] text-white top-0 lg:w-[400px] md:w-[300px] w-[200px] text-center`}>
                    My goal is to join a team at a software development firm where I can fully utilize both my software 
                    engineering and digital art skills.  I believe that my experience and strengths in software coding as well as 
                    design would make me an asset to any firm. Stevens Institute has been the perfect environment for me to be 
                    challenged in many aspects of technology development and has afforded me an expanded perspective which I can bring to 
                    any project that I am a part of. 
                </p>
            </div>
            
        </div>
    )
}

export default TopAboutMe