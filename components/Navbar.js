import React from 'react'
import { useState } from 'react'
import Image from "next/image"
import { useRouter } from 'next/router'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Navbar() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(true)

    function onClick2(page){
        setIsOpen(!isOpen)
        setTimeout(() => router.push(page), 100);
    }
    return (
        
        <div className='flex justify-between pt-[20px] items-center'>
            <button onClick={() => router.push("/")}>
                <Image src='/Images/blueLogo.png' alt='blue logo' width={95} height={95}/>
            </button>
            <div className='flex hidden md:block'>
                <button className={`mr-[20px] font-Lora lg:text-[20px] md:text-[17.5px] text-[15px] hover:text-maroonRed 2xl:text-2xl ${router.pathname == '/aboutme' ? 'font-bold' : 'font-regular'}`} onClick={() => router.push("/aboutme")} >About Me</button>
                <button className={`m-[20px] font-Lora lg:text-[20px] md:text-[17.5px] text-[15px] hover:text-maroonRed 2xl:text-2xl ${router.pathname == '/projects' ? 'font-bold' : 'font-regular'}`} onClick={() => router.push("/projects")} >Projects</button>
                <button className={`m-[20px] font-Lora lg:text-[20px] md:text-[17.5px] text-[15px] hover:text-maroonRed 2xl:text-2xl ${router.pathname == '/certifications' ? 'font-bold' : 'font-regular'}`} onClick={() => router.push("/certifications")} >Certifications</button>
                <button className={`ml-[20px] font-Lora lg:text-[20px] md:text-[17.5px] text-[15px] hover:text-maroonRed 2xl:text-2xl ${router.pathname == '/resume' ? 'font-bold' : 'font-regular'}`} onClick={() => router.push("/resume")} >Resume</button>
            </div>
            <div className='flex md:hidden'>  
                <button onClick={() => setIsOpen(!isOpen)}><MenuIcon/></button>
                
                <div className={`flex flex-col justify-center h-screen w-screen bg-lightPink fixed top-0 left-0 z-[10] transition-transform overflow-x-hidden duration-500 ${isOpen ? "translate-x-full" : ""}`}>
                    <div className='absolute top-0 right-0 sm:mr-16 sm:mt-24 mr-7 mt-16 text-2xl'>
                        <button onClick={() => setIsOpen(!isOpen)}><CloseIcon/></button>
                    </div>
                    <div className='absolute top-0 right-left sm:m-16 m-7 '>
                        <button onClick={() => onClick2("/")}>
                            <Image src='/Images/blueLogo.png' alt='blue logo' width={95} height={95}/>
                        </button>
                    </div>
                    <button className='my-4 font-Lora hover:text-maroonRed text-2xl ' onClick={() => onClick2("/aboutme")} >About Me</button>
                    <button className='my-4 font-Lora hover:text-maroonRed text-2xl ' onClick={() => onClick2("/projects")} >Projects</button>
                    <button className='my-4 font-Lora hover:text-maroonRed text-2xl ' onClick={() => onClick2("/certifications")} >Certifications</button>
                    <button className='my-4 font-Lora hover:text-maroonRed text-2xl ' onClick={() => onClick2("/resume")} >Resume</button>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
