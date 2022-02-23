import React from 'react';
import DropDown from '../DropDown'

function Programming() {
    return (
        <div>
            <DropDown label="Resume Website">
                <button className='lg:rounded-[10px] rounded-[8px] bg-maroonRed lg:h-[40px] lg:w-[120px] mb-[20px] h-[40px] w-[100px] hover:bg-buttonHover'>
                    <a target="_blank" rel="noreferrer" href='https://lauren-melendez-resume.vercel.app/' className='font-Nunito text-white lg:text-[15px] text-[13px]'> 
                        View Website
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
                        UI/ UX Designer + Web Developer
                    </p>
                </div>
                
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mt-[25px]'>
                    I worked on this resume site as a way to show off my frontend development potential and to better my skills. The process of 
                    coding this site was made easier because of the Figma design I made prior. This site utilizes Next.js and Tailwind CSS. 
                    I will continue to update and better this site as I gain more work experience. This project allowed me to utilize my frontend development, 
                    my UI/UX, and my graphic design skills. I used my frontend development abiliies to code the site, my UI/UX skills allowed me to make a detailed Figma design, 
                    and my graphic design skills assisted me in making myself a logo and the graphic in the hero section.
                </p>
            </DropDown>
            <DropDown label="U-Connect">
                <button className='lg:rounded-[10px] rounded-[8px] bg-maroonRed lg:h-[40px] lg:w-[120px] mb-[20px] h-[40px] w-[100px] hover:bg-buttonHover'>
                    <a target="_blank" rel="noreferrer" href='https://staging.uconnect.link/' className='font-Nunito text-white lg:text-[15px] text-[13px]'> 
                        View Website
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
                        UI/ UX Designer + Frontend Developer
                    </p>
                </div>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mt-[25px]'>
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
            <DropDown label="Mynt">
                <button className='lg:rounded-[10px] rounded-[8px] bg-maroonRed lg:h-[40px] lg:w-[120px] mb-[20px] h-[40px] w-[100px] hover:bg-buttonHover'>
                    <a target="_blank" rel="noreferrer" href='https://mynt-five.vercel.app' className='font-Nunito text-white lg:text-[15px] text-[13px]'> 
                        View Website
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
                        UI/ UX Designer + Frontend Developer
                    </p>
                </div>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mt-[25px]'>
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
            <DropDown label="Radiant Recipes">
                <button className='lg:rounded-[10px] rounded-[8px] bg-maroonRed lg:h-[40px] lg:w-[120px] mb-[20px] h-[40px] w-[100px] hover:bg-buttonHover'>
                    <a target="_blank" rel="noreferrer" href='https://radiant-recipes.vercel.app/' className='font-Nunito text-white lg:text-[15px] text-[13px]'> 
                        View Website
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
                        UI/ UX Designer + Web Developer
                    </p>
                </div>
                
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mt-[25px]'>
                    This is a personal project of mine that utilizes a public API filled with recipes from around the world. I designed this site using Figma 
                    and developed it using Next.js and Tailwind CSS. This site fetches recipes based on whichever filter the user selects. If the user selectes 
                    to filter the meals by name, the user can select a letter, and then the site fetches recipes starting with that letter. They can also filter 
                    the recipes by country, in which the site returns recipes from the selected country. You can also search through the database and the site 
                    will return recipes based on that search. Users can click on a recipe to learn more about it, and see the listed ingredients and preparations. 
                </p>
            </DropDown>
            <DropDown label="Learning Lingo">
                <button className='lg:rounded-[10px] rounded-[8px] bg-maroonRed lg:h-[40px] lg:w-[120px] mb-[20px] h-[40px] w-[100px] hover:bg-buttonHover'>
                    <a target="_blank" rel="noreferrer" href='https://learning-lingo.vercel.app/' className='font-Nunito text-white lg:text-[15px] text-[13px]'> 
                        View Website
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
                        UI/ UX Designer + Web Developer
                    </p>
                </div>
                
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mt-[25px]'>
                    This is a personal project of mine that helped me practice making a page without using a JavaScript framework. I used static HTML, JavaScript, and SCSS. This project is just 
                    a landing page for a fake language learning website, similar to Duolingo.
                </p>
            </DropDown>
            <DropDown label="Digital Library">
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
                        Web Developer
                    </p>
                </div>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mt-[25px]'>
                    This project utilizes the TMDB database to create a platform for users to review and 
                    discuss movies. The website features an authenticated, and unauthenticated experience, 
                    for user friendly browsing through movies. The project was built with Express, and 
                    MongoDB on the backend, along with handlebars for templating HTML pages. 
                </p>
            </DropDown>
            
            {/*
                <DropDown label="TV Maze">
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
                        Web Developer
                    </p>
                </div>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mt-[25px]'>
                    This Project queries the TV Maze api and allows users to search and read details about 
                    shows. The project includes pagination, and is built with React.js. 
                </p>
            </DropDown>
            <DropDown label="Pokemon API Project">
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
                        Web Developer
                    </p>
                </div>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mt-[25px]'>
                    This project uses React.js along with the context api in conjunction with the pokemon 
                    api to create a pokemon trainer application. The app queries for a list of pokemon and 
                    displays them with pagination. The user can create any number of pokemon teams and 
                    add/remove pokemon from each team. Clicking on each pokemon provides extra information 
                    about the pokemon. 
                </p>
            </DropDown>
            */}
            
        </div>
    )
}

export default Programming;
