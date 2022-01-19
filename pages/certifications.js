import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

function certifications() {
    return (
        <div className='overflow-x-hidden bg-lightPink min-h-screen flex flex-col'>
            <div className="flex flex-col bg-lightPink lg:px-[100px] md:px-[60px] px-[30px]">
                <Navbar />
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-center lg:px-[100px] md:px-[60px] px-[30px] mt-[40px] whitespace-nowrap'>
                
                <Card 
                    picture={`/Images/CertificateOfCompletion_Learning React1024_1.jpg`}
                    title={'Learning React.js'}
                    subtitle={'From LinkedIn Learning'}
                    link={'https://www.linkedin.com/learning/certificates/d2ae1720a2ab7d697b8a146dfdbc69e35895e675508629a2ce34bf1b67785cd3?trk=share_certificate'}
                />
                
                <Card 
                    picture={`/Images/CertificateOfCompletion_Figma for UX Design1024_1.jpg`}
                    title={'Figma for UX Design'}
                    subtitle={'From LinkedIn Learning'}
                    link={'https://www.linkedin.com/learning/certificates/a6aa12c095244b4056cb25c46786006f8a30995c4cefbd4b696aadb116d88754?trk=share_certificate'}
                /> 
            </div>
            
            
            <div className='bg-navyBlue lg:px-[100px] md:px-[60px] px-[30px] mt-auto h-full'>
                <Footer />
            </div>
        </div>
    )
}

export default certifications
