import React from 'react'
import Image from "next/image"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRouter } from 'next/router'

function DesignName({img, title, figma, id}) {
    const router = useRouter()
  return (
    <div className='flex md:flex-row flex-col items-center justify-between lg:px-[100px] md:px-[60px] px-[30px] hover:bg-dropDownHover cursor-pointer md:py-[20px] py-[40px]' onClick={()=>router.push(`/project/${id}`)}> 
            <div className='flex md:flex-row flex-col items-center '>
                <div>
                    <div className='hidden md:flex'>
                        <Image src={img} alt={title} width={300} height={180.09} className='rounded-[11px]'/>
                    </div>
                    <div className='md:hidden'>
                        <Image src={img} alt={title} width={200} height={120.06} className='rounded-[11px]'/>
                    </div>
                </div>
                <div className='md:pl-[30px] pl-[0px] flex flex-col md:items-start items-center'>
                    <h1 className='font-Lora lg:text-[30px] md:text-[25px] text-[20px] pb-[10px] md:w-[300px] w-[autoy]'>
                        {title}
                    </h1>
                    <button className='lg:rounded-[10px] rounded-[8px] bg-maroonRed lg:h-[40px] lg:w-[120px] mb-[20px] h-[40px] w-[100px] hover:bg-buttonHover'>
                        <a target="_blank" rel="noreferrer" href={figma} className='font-Nunito text-white lg:text-[15px] text-[13px]'> 
                            View Figma
                        </a>
                    </button>

                </div>
            </div>
            <div className='flex items-center'>
            <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] font-regular pr-[15px]'>Learn More</p>
                <ArrowForwardIosIcon className="text-[20px]"/>
            </div>
        </div>
  )
}

export default DesignName