import React from 'react'
import Image from "next/image"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useRouter } from 'next/router'

function Footer() {
    const router = useRouter();
    return (
        <div className='bg-navyBlue'>
            <div className=' flex items-center justify-between py-[20px]'>
                <div>
                    <div className='hidden md:block'>
                        <button onClick={() => router.push("/")}>
                            <Image src='/Images/GrayLogo.png' alt='gray logo' width={125} height={125}/>
                        </button>
                        
                    </div>
                    <div className='md:hidden'>
                        <button onClick={() => router.push("/")}>
                            <Image src='/Images/GrayLogo.png' alt='gray logo' width={75} height={75}/>
                        </button>
                    </div>
                </div>
                
                <div className='flex md:flex-col flex-row md:items-end items-center'>
                    <div className='flex md:flex-row flex-col'>
                        <button className='md:mr-[20px] mr-[0px] font-Lora text-[white] hover:text-grayPink' onClick={() => router.push("/aboutme")}>About Me</button>
                        <button className='md:m-[20px] m-[0px] font-Lora text-[white] hover:text-grayPink' onClick={() => router.push("/projects")} >Projects</button>
                        <button className='md:m-[20px] m-[0px] font-Lora text-[white] hover:text-grayPink' onClick={() => router.push("/certifications")}>Certifications</button>
                        <button className='md:ml-[20px] ml-[0px] font-Lora text-[white] hover:text-grayPink' onClick={() => router.push("/resume")}>Resume</button>
                    </div>

                    <div className='flex md:flex-row flex-col md:ml-[0px] md:ml-[20px] ml-[10px]'>
                        <button className='text-[white] hover:text-grayPink md:mr-[30px] mr-[0px]'>
                            <a href="mailto:lmmelendez20@gmail.com">
                                <EmailIcon sx={{fontSize:'40px'}} />
                            </a>
                        </button>
                        <button className='text-[white] hover:text-grayPink md:mr-[30px] mr-[0px]'>
                            <a target="_blank" rel="noreferrer" href="https://github.com/lmelende20">
                                <GitHubIcon sx={{fontSize:'40px'}}/>
                            </a>
                        </button>
                        <button className='text-[white] hover:text-grayPink'>
                            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/lauren-melendez-b07351223/'>
                                <LinkedInIcon sx={{fontSize:'40px'}}/>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            
            
            
        </div>
    )
}

export default Footer
