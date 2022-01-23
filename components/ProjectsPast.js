import React from 'react'
import DropDown from './DropDown'

function ProjectsPast() {
    return (
        <div>
            <DropDown label="U-Connect">
                <button className='lg:rounded-[10px] rounded-[8px] bg-maroonRed lg:h-[40px] lg:w-[120px] mb-[20px] h-[40px] w-[100px] hover:bg-buttonHover'>
                    <a target="_blank" href='https://staging.uconnect.link/' className='font-Nunito text-white lg:text-[15px] text-[13px]'> 
                        View Website
                    </a>
                </button>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px]'>
                    U-Connect is a way to connect students at the same university to help them sell products to one another. 
                    One of the most challenging parts of college is having one place to connect to everyone that goes to the 
                    same school. Underclassmen struggle with finding ways to connect to upperclassmen, people in different 
                    majors often do not cross paths. U-Connect is a hub for all students. It is especially useful during moving 
                    time. Those that are moving out of their living space can list furniture and other home goods to the site, 
                    and students in the area will be able to contact the lister to talk about price, availability, and pickup/ 
                    dropoff situations.
                </p>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mt-[25px]'>
                    U-Connect utilizes React as the front-end library, Firebase Authentication for user logins, 
                    Socket.IO for real time communication among peers, Next.js as the React framework, AWS Hosting 
                    with CI CD pipeline to allow the site to exist independent of being hosted on local machine, and
                    Salesforce customer service implementation so users can create a case about a bad order, ask questions, 
                    or speak to a representation for the marketplace, we will implement a Salesforce customer service implementation.          
                </p>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mt-[20px] mb-[40px]'>
                    I was personally responsible for creating the Figma design for the site and the majority of the Frontend programming. 
                    We decided to utilize the Material UI library for our frontend.
                </p>
            </DropDown>
            <DropDown label="Figma Redesign of U-Connect">
                <button className='lg:rounded-[10px] rounded-[8px] bg-maroonRed lg:h-[40px] lg:w-[120px] mb-[20px] h-[40px] w-[100px] hover:bg-buttonHover'>
                    <a target="_blank" href='https://www.figma.com/file/bmal33PIXYY9vnU4lsHBIq/U-Connect?node-id=0%3A1'  className='font-Nunito text-white lg:text-[15px] text-[13px]'> 
                        View Figma
                    </a>
                </button>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mb-[40px]'>
                    This Figma is a redseign of a project I have already completed. The original design was not ideal and was rushed due to time constraints. The 
                    original design and was okay for the time being, but needed to be redone. It fell short on delivering aesthetically pleasing visuals for the users and 
                    providing a thorough and easily navigatable user experience.
                </p>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mt-[25px]'>
                    This new design it much more cohesive, enticing, visually appealling, and has a better user experience. 
                    There is much more thought that went into this color pallette, the data display, user interaction, and the flow of pages.
                </p>
            </DropDown>
            <DropDown label="Digital Library">
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mb-[40px]'>
                    This project utilizes the TMDB database to create a platform for users to review and 
                    discuss movies. The website features an authenticated, and unauthenticated experience, 
                    for user friendly browsing through movies. The project was built with Express, and 
                    MongoDB on the backend, along with handlebars for templating HTML pages. 
                </p>
            </DropDown>
            <DropDown label="TV Maze">
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mb-[40px]'>
                    This Project queries the TV Maze api and allows users to search and read details about 
                    shows. The project includes pagination, and is built with React.js. 
                </p>
            </DropDown>
            <DropDown label="Pokemon API Project">
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mb-[40px]'>
                    This project uses React.js along with the context api in conjunction with the pokemon 
                    api to create a pokemon trainer application. The app queries for a list of pokemon and 
                    displays them with pagination. The user can create any number of pokemon teams and 
                    add/remove pokemon from each team. Clicking on each pokemon provides extra information 
                    about the pokemon. 
                </p>
            </DropDown>
            <DropDown label="Figma Crash Course Tutorial">
                <button className='lg:rounded-[10px] rounded-[8px] bg-maroonRed lg:h-[40px] lg:w-[120px] mb-[20px] h-[40px] w-[100px] hover:bg-buttonHover'>
                    <a target="_blank" href='https://www.figma.com/file/gdvGhJGCtrLcuO12ay7XtA/Untitled?node-id=0%3A1'  className='font-Nunito text-white lg:text-[15px] text-[13px]'> 
                        View Figma
                    </a>
                </button>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mb-[40px]'>
                    This Figma is a result of following a tutorial on Youtube that taught the basic functions and abilities of Figma. 
                </p>
            </DropDown>
            
        </div>
    )
}

export default ProjectsPast
