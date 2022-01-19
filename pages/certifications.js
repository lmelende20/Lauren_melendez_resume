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

            <div className='grid grid-cols-3 lg:px-[100px] md:px-[60px] px-[30px] mt-[40px]'>
                
                <Card 
                    picture={`/Images/CertificateOfCompletion_Learning React1024_1.jpg`}
                    title={'Learning React.js'}
                    subtitle={'From LinkedIn Learning'}
                    link={'/Images/CertificateOfCompletion_Learning React.js.pdf'}
                />
                
                <Card 
                    picture={`/Images/CertificateOfCompletion_Figma for UX Design1024_1.jpg`}
                    title={'Figma for UX Design'}
                    subtitle={'From LinkedIn Learning'}
                    link={'/Images/CertificateOfCompletion_Figma for UX Design.pdf'}
                /> 
            </div>
            
            
            <div className='bg-navyBlue lg:px-[100px] md:px-[60px] px-[30px] mt-auto h-full'>
                <Footer />
            </div>
        </div>
    )
}

export default certifications
