import React from 'react'
import Image from "next/image"

function Card({picture, title, subtitle, link}) {
    return (
        <div className='flex flex-col items-center'>
            {/*<div className={`lg:rounded-[17px] md:rounded-[14px] rounded-[11px] w-[343px] h-[100] bg-cover bg-center ${picture}`}></div>*/}
            <div className='flex flex-col items-start'>
                <div className='hidden md:flex'>
                    <Image src={picture} alt='certification' width={300} height={200} className='rounded-[11px]'/>
                </div>
                <div className='md:hidden'>
                    <Image src={picture} alt='certification' width={200} height={132} className='rounded-[11px]'/>
                </div>
                
                {title.length < 25 ? <h2 className='font-Lora md:text-[25px] text-[20px]'>{title}</h2> : <h2 className='font-Lora md:text-[20px] text-[15px]'>{title}</h2>}
                {/*<h2 className='font-Lora md:text-[25px] text-[20px]'>{title}</h2>*/}
                <h3 className='font-Nunito lg:text-[18px] md:text-[15px] text-[13px]'>{subtitle}</h3>
                {/*<button className='rounded-[10px] bg-maroonRed h-[40px] w-[120px]'>
                    <a target="_blank" href={link} className='font-Nunito text-white text-[15px]'> 
                        View PDF
                    </a>
                </button>*/}
                <button className='lg:rounded-[10px] rounded-[8px] bg-maroonRed hover:bg-buttonHover lg:h-[40px] lg:w-[120px] mb-[20px] h-[40px] w-[100px] font-Nunito text-white lg:text-[15px] text-[13px]'  onClick={() => window.open(link, '_blank')}>
                    View Certificate
                </button>
            </div>
            
        </div>
    )
}

export default Card
