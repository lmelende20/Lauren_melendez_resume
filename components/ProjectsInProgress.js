import React from 'react'
import DropDown from './DropDown'

function ProjectsInProgress() {
    return (
        <div>
            <DropDown label="Mynt">
                <button className='lg:rounded-[10px] rounded-[8px] bg-maroonRed lg:h-[40px] lg:w-[120px] mb-[20px] h-[40px] w-[100px]'>
                    <a target="_blank" href='https://mynt-five.vercel.app' className='font-Nunito text-white lg:text-[15px] text-[13px]'> 
                        View Website
                    </a>
                </button>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px]'>
                    This project would feature the development of a Web Application that’s main feature is 
                    making NFT (Non-Fungible Tokens) trading easier for everyone. This would allow for getting 
                    involved with trading and investing into NFTs without having any knowledge of blockchain, 
                    decentralized markets, or crypto-wallets. The logistics of being able to currently buy into 
                    NFTs requires an implied set of knowledge to be able to understand all of those aspects. Our 
                    application would require none of that. Think of the simplicity of “Robinhood” for stocks, but 
                    instead for NFTs. This would allow the broad market to benefit from blockchain technology.
                    
                </p>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mt-[25px]'>
                    The team is trying to solve the lack of accessibility of blockchain technology, specifically NFTs, to everyday 
                    consumers. This application will be accessible to anybody looking to invest money or trade with NFTs. Prior background 
                    knowledge of crypto wallets, etc. will not be needed as it all will be handled by the internal 
                    system in the backend, hidden from the end user. Rather, the end user will be using a frontend that 
                    will be prioritizing ease of use and understanding for the end users. Overall, the end goal of the system is 
                    allowing for the buying, selling and trading of NFTs specifically within the application system.
                    
                </p>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mt-[25px] mb-[40px]'>
                    The application is built with React.js and Material UI on the frontend, and Node.js and Firebase on the 
                    backend. I am the frontend developer for my team. I was repsonsible for making the landing page, the Figma, and the general frontend 
                    layout for the project. The project is still in the works and I will continue overseeing the frontend development throughout its progress.
                    
                </p>
            </DropDown>
            <DropDown label="Resume Website Figma">
                <button className='lg:rounded-[10px] rounded-[8px] bg-maroonRed lg:h-[40px] lg:w-[120px] mb-[20px] h-[40px] w-[100px]'>
                    <a target="_blank" href='https://www.figma.com/file/xKq1zfs6arebkGes4UiZCo/Untitled?node-id=40%3A557' className='font-Nunito text-white lg:text-[15px] text-[13px]'> 
                        View Figma
                    </a>
                </button>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mb-[40px]'>
                    In order to practice using Figma and better my design skills, I worked an a Figma design for the website. 
                    This made the process of creating the layout and design for the website much easier, so that when I started coding 
                    it, I already knew how I wanted everything to look. I will continue to update and better this design as I gain more work 
                    experience and practice. 
                </p>
            </DropDown>
            <DropDown label="Resume Website">
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mb-[40px]'>
                    I worked on this resume site as a way to show off my frontend development potential and to better my skills. The process of 
                    coding this site was made easier because of the Figma design I made prior. This site utilizes React, Next.js, and Tailwind css. 
                    I will continue to update and better this site as I gain more work experience. This project allowed me to utilize my frontend development, 
                    my UI/UX, and my graphic design skills. I used my frontend development abiliies to code the site, my UI/UX skills allowed me to make a detailed Figma design, 
                    and my graphic design skills assisgted me in making myself a logo and the graphic in the hero section.
                </p>
            </DropDown>
        </div>
    )
}

export default ProjectsInProgress
