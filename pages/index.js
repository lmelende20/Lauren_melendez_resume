import Navbar from '../components/Navbar'
import Hero from '../components/HeroSection'
import Footer from '../components/Footer'
import DropDown from '../components/DropDown'
import { useRouter } from 'next/router'
import { Marqy } from "marqy";
import Image from "next/image"

export default function Home() {
  const router = useRouter();
  return (
    <div className='overflow-x-hidden bg-lightPink min-h-screen flex flex-col'>
      <div className="flex flex-col h-screen w-screen bg-lightPink lg:px-[100px] md:px-[60px] px-[30px]">
        <Navbar />
        <div className='h-full'>
          <Hero />
        </div>
      </div>
      <Marqy speed={1} direction='right' className='bg-whitePink'>
        <div className='flex w-screen bg-whitePink py-[20px] justify-around'>
          <h1 className='lg:text-[24px] md:text-[20px] sm:text-[15px] text-[10px] font-Nunito'>Creative</h1>
          <h1 className='lg:text-[24px] md:text-[20px] sm:text-[15px] text-[10px] font-Nunito'>Reliable</h1>
          <h1 className='lg:text-[24px] md:text-[20px] sm:text-[15px] text-[10px] font-Nunito'>Ambitious</h1>
          <h1 className='lg:text-[24px] md:text-[20px] sm:text-[15px] text-[10px] font-Nunito'>Responsible</h1>
          <h1 className='lg:text-[24px] md:text-[20px] sm:text-[15px] text-[10px] font-Nunito'>Problem Solver</h1>
        </div>
      </Marqy>
      
      <div className='flex flex-col lg:px-[100px] md:px-[60px] px-[30px] my-[100px] '>
        <div className='flex justify-around items-center lg:flex-row flex-col'>
          <div className='max-w-[275px] min-w-[150px] w-[40%] mb-[40px]'>
            <Image src={'https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDIwfHxkZXNpZ258ZW58MHx8fHwxNjQxODY5NDU1&ixlib=rb-1.2.1&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450'} alt='Frontend Developer' layout="intrinsic" width={280} height={157} className='lg:rounded-[17px] md:rounded-[14px] rounded-[11px]'/>  
            <h3 className='font-Lora text-[18px]'>UI/ UX Designer</h3>
          </div>
          <div className=' max-w-[275px] min-w-[150px] w-[40%] mb-[40px]'>
            <Image src={'https://images.unsplash.com/photo-1587620962725-abab7fe55159?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDN8fGNvZGV8ZW58MHx8fHwxNjQxOTUyNjQ5&ixlib=rb-1.2.1&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450'} alt='Frontend Developer' layout="intrinsic" objectFit="scale-down" width={280} height={157} className='lg:rounded-[25px] md:rounded-[20px] rounded-[11px]'/>
            <h3 className='font-Lora text-[18px]'>Frontend Developer</h3>
          </div>
          <div className='max-w-[275px] min-w-[150px] w-[40%] mb-[40px]'>
            <Image src={'https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8fHwxNjQxOTUyNzUz&ixlib=rb-1.2.1&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450'} alt='Graphic Designer' layout="intrinsic" width={280} height={157} className='lg:rounded-[17px] md:rounded-[14px] rounded-[11px]'/>
            <h3 className='font-Lora text-[18px]'>Graphic Designer</h3>
          </div>
        </div>
        <div className='flex flex-col items-center lg:pt-[30px] md:px-[20px] px-[10px]'>
          <h2 className='font-Lora md:text-[30px] text-[13px] mb-[20px]'>Want to learn more about me?</h2>
          <button className='bg-maroonRed font-Nunito text-[white] hover:bg-buttonHover md:text-[20px] sm:text-[15px] text-[12px] md:py-[20px] md:px-[20px] md:rounded-[15px] py-[15px] px-[15px] rounded-[10px]' onClick={() => router.push("/aboutme")}>Learn More</button>
        </div>
        
      </div>
      <div className='bg-navyBlue lg:px-[100px] md:px-[60px] px-[30px] mt-auto h-full'>
        <Footer />
      </div>

    </div>
    
    
  )
}
