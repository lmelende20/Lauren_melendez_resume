import React from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Image from "next/image"
import data from "../../components/data"
import {useRouter} from 'next/router'

function Project() {
    const router = useRouter()
    const {id} = router.query
    const fadeImages = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      ];

    
    if (!data[id]){
        return <></>
    }
    
  return (
    <div className='overflow-x-hidden bg-lightPink min-h-screen flex flex-col'>
        <div className="bg-lightPink lg:px-[100px] md:px-[60px] px-[30px]">
            <Navbar />
        </div>
        <div className='flex flex-col items-center my-[40px]'>
            <div className="slide-container md:w-[80%] w-[100%] pb-[40px] lg:px-[100px] md:px-[60px] px-[10px]">
                <Fade duration={2500}>
                    {data[id].imgs.map((img, index) => (
                    <div className="each-fade" key={index}>
                        <div className="image-container flex justify-center">
                            <Image src={img} alt={index} width={500} height={350}/>
                        </div>
                    </div>
                    ))}
                </Fade>
            </div>
            <div className='flex flex-col justify-center text-center lg:px-[100px] md:px-[60px] px-[30px]'>
                <h1 className='font-Lora lg:text-[40px] md:text-[30px] text-[20px] pb-[20px]'>
                    {data[id].title}
                </h1>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] font-bold inline'>
                    Status: {data[id].Status}
                </p>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] mt-[10px] text-[15px] font-bold inline'>
                    Role: {data[id].Role}
                </p>
                <p className='font-Nunito lg:text-[20px] md:text-[17.5px] text-[15px] pt-[20px]'>
                    {data[id].details}
                </p>
            </div>
        </div>
        


        <div className='bg-navyBlue lg:px-[100px] md:px-[60px] px-[30px] mt-auto h-full'>
            <Footer />
        </div>

    </div> 
  )
}

export default Project