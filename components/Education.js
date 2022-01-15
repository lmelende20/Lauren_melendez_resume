import React from 'react'
import DropDown from './DropDown'

function Education() {
    return (
        <div>
            <div className='w-screen bg-whitePink py-[20px] lg:mt-[30px] md:mt-[20px] mt-[10px]'>
                <h1 className='lg:text-[35px] md:text-[30px] text-[25px] px-[20px] font-Lora font-bold'>Education</h1>
            </div>
            <DropDown label="High School">
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px]  mb-[40px]'>I attended Howell High School from the years 2014-2018. 
                                    I was involved in TSA, varsity soccer, track and field, 
                                    and Spanish Honors Society. I was honored as a Distigushed 
                                    Scholar, due to being in the first decile of my class. I was
                                    awarded the 2018 Dr. Martin Luther King Jr. Memorial Scholarship
                                    from the Educational and Cultural Fund of Local Union Number 3.</p>
            </DropDown>
            <DropDown label="College">
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] mb-[40px]'>I am currently attending Stevens Institute of Technlogy in Hoboken, NJ.
                                    I am working towards obtaining a Bachelors of Science degree, with a major in 
                                    Computer Science and a minor in Visual Arts and Technology. I am on target 
                                    to graduate in May 2022.</p>
            </DropDown>
            <DropDown label="Outside Education">
                <ul className=' mb-[40px]'>
                    <li>
                        <h3 className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px]'>LinkedIn Learning</h3>
                    </li>
                    <li>
                        <h3 className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px]'>HackerRank</h3>
                    </li>
                    <li>
                        <h3 className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px]'>Udemy</h3>
                    </li>
                    <li>
                        <h3 className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px]'>Youtube</h3>
                    </li>
                </ul>
            </DropDown>
        </div>
    )
}

export default Education
