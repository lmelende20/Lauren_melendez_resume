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

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-center lg:px-[100px] md:px-[60px] px-[30px] mt-[40px]'>
                
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
                <Card 
                    picture={`/Images/CertificateOfCompletion_CSS Essential Training1024_1.jpg`}
                    title={'CSS Essential Training'}
                    subtitle={'From LinkedIn Learning'}
                    link={'https://www.linkedin.com/learning/certificates/bc2899be7037b4c84809f292cf6205ff3b6428b7f19e6774dcdad5f93e99f763?trk=share_certificate'}
                /> 
                <Card 
                    picture={`/Images/CertificateOfCompletion_Tailwind CSS Essential Training1024_1.jpg`}
                    title={'Tailwind CSS Essential Training'}
                    subtitle={'From LinkedIn Learning'}
                    link={'https://www.linkedin.com/learning/certificates/347e478f353328fe390c1f5f598ed63a2f06ebb53b5712e82e9d4dfdbd9282e9?trk=share_certificate'}
                /> 
                
            </div>
            
            
            <div className='bg-navyBlue lg:px-[100px] md:px-[60px] sm:px-[30px] px-[15px] mt-auto h-full'>
                <Footer />
            </div>
        </div>
    )
}

export default certifications
