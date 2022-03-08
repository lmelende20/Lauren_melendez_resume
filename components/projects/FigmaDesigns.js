import React from 'react'
import DropDown from '../DropDown'
import Image from "next/image"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DesignName from '../DesignName';

function FigmaDesigns() {
  return (
    <div>
        {/* <DropDown label="Resume Website">
            <button className='lg:rounded-[10px] rounded-[8px] bg-maroonRed lg:h-[40px] lg:w-[120px] mb-[20px] h-[40px] w-[100px] hover:bg-buttonHover'>
                <a target="_blank" rel="noreferrer" href='https://www.figma.com/file/xKq1zfs6arebkGes4UiZCo/Untitled?node-id=40%3A557' className='font-Nunito text-white lg:text-[15px] text-[13px]'> 
                    View Figma
                </a>
            </button>
            <div>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] font-bold inline'>
                    Status: 
                </p>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] pl-[15px] text-[15px] font-regular inline'>
                    In Progress
                </p>
            </div>
            <div>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] mt-[10px] text-[15px] font-bold inline'>
                    Role: 
                </p>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] pl-[15px] text-[15px] font-regular inline'>
                    UI/ UX Designer
                </p>
            </div>
            <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mt-[25px]'>
                In order to practice using Figma and better my design skills, I worked an a Figma design for the website. 
                This made the process of creating the layout and design for the website much easier, so that when I started coding 
                it, I already knew how I wanted everything to look. I will continue to update and better this design as I gain more work 
                experience and practice. 
            </p>
        </DropDown>
        <DropDown label="Redesign of U-Connect">
            <button className='lg:rounded-[10px] rounded-[8px] bg-maroonRed lg:h-[40px] lg:w-[120px] mb-[20px] h-[40px] w-[100px] hover:bg-buttonHover'>
                <a target="_blank" rel="noreferrer" href='https://www.figma.com/file/bmal33PIXYY9vnU4lsHBIq/U-Connect?node-id=0%3A1'  className='font-Nunito text-white lg:text-[15px] text-[13px]'> 
                    View Figma
                </a>
            </button>
            <div>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] font-bold inline'>
                    Status: 
                </p>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] pl-[15px] text-[15px] font-regular inline'>
                    Complete
                </p>
            </div>
            <div>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] mt-[10px] text-[15px] font-bold inline'>
                    Role: 
                </p>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] pl-[15px] text-[15px] font-regular inline'>
                    UI/ UX Designer
                </p>
            </div>
            <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mt-[25px]'>
                This Figma is a redseign of a project I have already completed. The original design was not ideal and was rushed due to time constraints. The 
                original design and was okay for the time being, but needed to be redone. It fell short on delivering aesthetically pleasing visuals for the users and 
                providing a thorough and easily navigatable user experience.
            </p>
            <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mt-[25px]'>
                This new design it much more cohesive, enticing, visually appealling, and has a better user experience. 
                There is much more thought that went into this color pallette, the data display, user interaction, and the flow of pages.
            </p>
        </DropDown>
        <DropDown label="Travelerz Design Landing Page">
            <button className='lg:rounded-[10px] rounded-[8px] bg-maroonRed lg:h-[40px] lg:w-[120px] mb-[20px] h-[40px] w-[100px] hover:bg-buttonHover'>
                <a target="_blank" rel="noreferrer" href='https://www.figma.com/file/4zbGsXJqD96YRlcssasYA5/Untitled?node-id=2%3A3'  className='font-Nunito text-white lg:text-[15px] text-[13px]'> 
                    View Figma
                </a>
            </button>
            <div>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] font-bold inline'>
                    Status: 
                </p>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] pl-[15px] text-[15px] font-regular inline'>
                    Complete
                </p>
            </div>
            <div>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] mt-[10px] text-[15px] font-bold inline'>
                    Role: 
                </p>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] pl-[15px] text-[15px] font-regular inline'>
                    UI/ UX Designer
                </p>
            </div>
            <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mt-[25px]'>
                This Figma is a landing page design for a made up travel agency. This design utilizes hover and on click prototyping and animation for the 
                nav bar buttons, the &quot;Start Exploring&quot; button, and the drop down menu.
            </p>
        </DropDown>
        <DropDown label="Radiant Recipes">
            <button className='lg:rounded-[10px] rounded-[8px] bg-maroonRed lg:h-[40px] lg:w-[120px] mb-[20px] h-[40px] w-[100px] hover:bg-buttonHover'>
                <a target="_blank" rel="noreferrer" href='https://www.figma.com/file/uQB0jO5mjdcM2HjcXqLt6P/Radiant-Recipes?node-id=0%3A1'  className='font-Nunito text-white lg:text-[15px] text-[13px]'> 
                    View Figma
                </a>
            </button>
            <div>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] font-bold inline'>
                    Status: 
                </p>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] pl-[15px] text-[15px] font-regular inline'>
                    Complete
                </p>
            </div>
            <div>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] mt-[10px] text-[15px] font-bold inline'>
                    Role: 
                </p>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] pl-[15px] text-[15px] font-regular inline'>
                    UI/ UX Designer
                </p>
            </div>
            <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mt-[25px]'>
                In order to practice my UI/ UX design skills and to make the programming process easier, I created 
                this Figma before I started programming the site. I used coolors.co to help me choose a color palette. 
                Once I completed the design, programming was quite simple since I knew I how the user was going to interact 
                with the site, how I wanted everything to be laid out, and did not need to make any more design choices while coding.
            </p>
        </DropDown>
        <DropDown label="Learning Lingo">
            <button className='lg:rounded-[10px] rounded-[8px] bg-maroonRed lg:h-[40px] lg:w-[120px] mb-[20px] h-[40px] w-[100px] hover:bg-buttonHover'>
                <a target="_blank" rel="noreferrer" href='https://www.figma.com/file/XkG6sabLG6k4IJw7GjMFts/LearningLingo?node-id=2%3A2'  className='font-Nunito text-white lg:text-[15px] text-[13px]'> 
                    View Figma
                </a>
            </button>
            <div>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] font-bold inline'>
                    Status: 
                </p>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] pl-[15px] text-[15px] font-regular inline'>
                    Complete
                </p>
            </div>
            <div>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] mt-[10px] text-[15px] font-bold inline'>
                    Role: 
                </p>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] pl-[15px] text-[15px] font-regular inline'>
                    UI/ UX Designer
                </p>
            </div>
            <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mt-[25px]'>
                This Figma is a design for a landing page for a fake language learning webiste, similar to Duolingo. This project gave me 
                an opporunity to practice other design styles. I wanted to create a clean yet fun look, so I used brighter colors along with 
                playful illustrastions to give off that feeling. 
            </p>
        </DropDown> */}
        {/*<DropDown label="Figma Crash Course Tutorial">
            <button className='lg:rounded-[10px] rounded-[8px] bg-maroonRed lg:h-[40px] lg:w-[120px] mb-[20px] h-[40px] w-[100px] hover:bg-buttonHover'>
                <a target="_blank" rel="noreferrer" href='https://www.figma.com/file/gdvGhJGCtrLcuO12ay7XtA/Untitled?node-id=0%3A1'  className='font-Nunito text-white lg:text-[15px] text-[13px]'> 
                    View Figma
                </a>
            </button>
            <div>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] font-bold inline'>
                    Status: 
                </p>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] pl-[15px] text-[15px] font-regular inline'>
                    Complete
                </p>
            </div>
            <div>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] mt-[10px] text-[15px] font-bold inline'>
                    Role: 
                </p>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] pl-[15px] text-[15px] font-regular inline'>
                    UI/ UX Designer
                </p>
            </div>
            <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mt-[25px]'>
                This Figma is a result of following a tutorial on Youtube that taught the basic functions and abilities of Figma. This is not my design,
                I simply followed the tutorial to educate myself and get an idea of what good design looks like.
            </p>
        </DropDown>*/}
        {/* <DropDown label="Beany Business">
            <button className='lg:rounded-[10px] rounded-[8px] bg-maroonRed lg:h-[40px] lg:w-[120px] mb-[20px] h-[40px] w-[100px] hover:bg-buttonHover'>
                <a target="_blank" rel="noreferrer" href='https://www.figma.com/file/tyx22oqFqJWYnjSzAd6lAM/Untitled?node-id=0%3A1'  className='font-Nunito text-white lg:text-[15px] text-[13px]'> 
                    View Figma
                </a>
            </button>
            <div>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] font-bold inline'>
                    Status: 
                </p>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] pl-[15px] text-[15px] font-regular inline'>
                    In Progress
                </p>
            </div>
            <div>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] mt-[10px] text-[15px] font-bold inline'>
                    Role: 
                </p>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] pl-[15px] text-[15px] font-regular inline'>
                    UI/ UX Designer
                </p>
            </div>
            <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mt-[25px]'>
                This Figma is an app design for a coffee shop, where customers can log in/ sign up, favorite products, add products to their shopping cart, check out, browse the menu,
                 and search the menu.
            </p>
        </DropDown> */}

        <DesignName img="/Tosti/Tosti.svg" title="Tosti Redesign Case Study" figma="https://www.figma.com/file/9UH9ckGxDc388AnmXs14dx/Tosti?node-id=0%3A1" id="4"/>
    
        <DesignName img="/LMresume/LMhome.svg" title="Resume Website" figma="https://www.figma.com/file/xKq1zfs6arebkGes4UiZCo/Untitled?node-id=40%3A557" id="1"/>
        <DesignName img="/RR/RR.svg" title="Radiant Recipes" figma="https://www.figma.com/file/uQB0jO5mjdcM2HjcXqLt6P/Radiant-Recipes?node-id=0%3A1" id="2"/>
        <DesignName img="/UConnect/UConnect.svg" title="U-Connect Redesign" figma="https://www.figma.com/file/bmal33PIXYY9vnU4lsHBIq/U-Connect?node-id=0%3A1" id="3"/>
        
        <DesignName img="/BB/BB.svg" title="Beany Business" figma="https://www.figma.com/file/tyx22oqFqJWYnjSzAd6lAM/Untitled?node-id=0%3A1" id="5"/>
        <DesignName img="/LL/LL.svg" title="Learning Lingo" figma="https://www.figma.com/file/XkG6sabLG6k4IJw7GjMFts/LearningLingo?node-id=2%3A2" id="6"/>
    </div>
  )
    
}

export default FigmaDesigns;
