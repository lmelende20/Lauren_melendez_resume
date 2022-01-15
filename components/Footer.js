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
                    <Image src='/Images/GrayLogo.png' alt='gray logo' width={125} height={125}/>
                </div>
                <div className='flex flex-col items-end hidden md:flex'>
                    <div className='flex'>
                        <button className='mr-[20px] font-Lora text-[white] hover:text-grayPink' onClick={() => router.push("/aboutme")}>About Me</button>
                        <button className='m-[20px] font-Lora text-[white] hover:text-grayPink' onClick={() => router.push("/projects")} >Projects</button>
                        <button className='m-[20px] font-Lora text-[white] hover:text-grayPink' onClick={() => router.push("/certifications")}>Certifications</button>
                        <button className='ml-[20px] font-Lora text-[white] hover:text-grayPink' onClick={() => router.push("/resume")}>Resume</button>
                    </div>

                    <div className='flex'>
                        <button className='text-[white] hover:text-grayPink mr-[30px]'>
                            <a href="mailto:lmmelendez20@gmail.com">
                                <EmailIcon sx={{fontSize:'40px'}} />
                            </a>
                        </button>
                        <button className='text-[white] hover:text-grayPink mr-[30px]'>
                            <a target="_blank" href="https://github.com/lmelende20">
                                <GitHubIcon sx={{fontSize:'40px'}}/>
                            </a>
                        </button>
                        <button className='text-[white] hover:text-grayPink'>
                            <a target="_blank" href='https://www.linkedin.com/in/lauren-melendez-b07351223/'>
                                <LinkedInIcon sx={{fontSize:'40px'}}/>
                            </a>
                        </button>
                    </div>
                </div>
                <div className='flex md:hidden items-center'>
                    <div className='flex flex-col'>
                        <button className='font-Lora text-[white] hover:text-grayPink' onClick={() => router.push("/aboutme")}>About Me</button>
                        <button className='font-Lora text-[white] hover:text-grayPink' onClick={() => router.push("/projects")} >Projects</button>
                        <button className='font-Lora text-[white] hover:text-grayPink' onClick={() => router.push("/certifications")}>Certifications</button>
                        <button className='font-Lora text-[white] hover:text-grayPink' onClick={() => router.push("/resume")}>Resume</button>
                    </div>
                    <div className='flex flex-col ml-[20px]'>
                        <button className='text-[white] hover:text-grayPink'>
                            <a href="mailto:lmmelendez20@gmail.com">
                                <EmailIcon sx={{fontSize:'40px'}} />
                            </a>
                        </button>
                        <button className='text-[white] hover:text-grayPink'>
                            <a target="_blank" href="https://github.com/lmelende20">
                                <GitHubIcon sx={{fontSize:'40px'}}/>
                            </a>
                        </button>
                        <button className='text-[white] hover:text-grayPink'>
                            <a target="_blank" href='https://www.linkedin.com/in/lauren-melendez-b07351223/'>
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
