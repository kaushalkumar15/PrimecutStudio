// import React from 'react';
// import { motion } from 'framer-motion';
// import { Card, CardContent } from '../components/ui/card';
// import { Button } from '../components/ui/button';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { FaInstagram, FaEnvelope } from 'react-icons/fa';

// const PrimecutStudio = () => {
//     const handleBookStudioClick = () => {
//         const contactSection = document.getElementById("contact-section");
//         if (contactSection) {
//             contactSection.scrollIntoView({ behavior: "smooth" });
//         }
//     };
//     const handleServiceStudioClick = () => {
//         const serviceSection = document.getElementById("service-section");
//         if (serviceSection) {
//             serviceSection.scrollIntoView({ behavior: "smooth" });
//         }
//     };
//     const openInstagram = () => {
//         window.open("https://www.instagram.com/prime_cutstudios/", "_blank");
//     };

//     const openEmail = () => {
//         window.open("https://mail.google.com/mail/?view=cm&fs=1&to=studiosprimecut@gmail.com&su=Inquiry%20from%20Website%20for%20Studio&body=Hello%20PrimecutStudio%2C%0D%0A%0D%0AI%20am%20interested%20in%20your%20services.%20Please%20provide%20more%20details.%0D%0A%0D%0AThank%20you!", "_blank");
//     };
//     return (
//         <div className="min-h-screen bg-black text-white overflow-hidden">
//             {/* Hero Section */}
//             <div className="relative h-screen flex flex-col justify-center items-center px-8 bg-[url('./studio-bg.jpg')] bg-cover bg-center bg-fixed">
//                 <h1 className="text-8xl lg:text-8xl font-bold mb-4 text-center">PrimecutStudio</h1>
//                 <p className="text-lg lg:text-2xl mb-8 text-center">Where Creativity Meets Precision</p>
//                 <Button onClick={handleBookStudioClick} className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-2xl text-white font-semibold">Book Your Studio Now</Button>
//                 {/* Floating Elements */}

//                 <motion.img onClick={handleServiceStudioClick} src="/floating3.png" alt="camera"
//                  className="absolute top-30 right-64 w-56" 
//                  animate={{ y: [0, -20, 0] }} 
//                  transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
//                  style={{ cursor: 'pointer' }} 
//                  />
              
//                 {/* <motion.img src="/camera.png" alt="Camera" className="absolute bottom-12 left-16 w-64" animate={{ y: [0, -20, 0] }} transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }} /> */}
//                 {/* <motion.img src="/floating3.png" alt="Camera" className="absolute top-16 left-16 w-64" animate={{ y: [0, -20, 0] }} transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }} /> */}
//                 {/* <motion.img src="/tripod.png" alt="Camera" className="absolute top-12 left-16 w-64" animate={{ y: [0, -20, 0] }} transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }} /> */}
                
//             </div>

//             {/* About Section */}
//             <div className="relative px-8 py-20 bg-gray-900 ">                
//                 <motion.img src='/camera.png' className='h-56 w-56 mx-0 px-0 absolute top-24 left-16 w-64' animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}/>                
//                 <h2 className="text-4xl font-semibold mb-6 text-center">Why Choose PrimecutStudio?</h2>
//                 <p className="text-xl text-center max-w-3xl mx-auto mb-6">
//                     At PrimecutStudio, we offer more than just a space for your projects. Our studio is equipped with state-of-the-art equipment, unique set designs, and expert support to help you create content that stands out. Whether you're recording a podcast, shooting a high-energy video, or need post-production editing, we’ve got you covered.
//                 </p>               
//                 <p className="text-xl text-center max-w-3xl mx-auto">
//                     With flexible packages, cutting-edge technology, and a dedicated team, PrimecutStudio is the perfect place to bring your creative ideas to life.
//                 </p>
             

//             </div>

            // {/* Image Carousel */}
            // <div className=" bg-gray-900 h-[600px]">
            //     {/* <h1>Hello</h1> */}
            //     <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="h-[600px]">
            //         <div className=''>
            //             <img src="./studio1.jpg" className="h-[600px] " alt="Studio 1" />
            //             <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-2xl">
            //                 <h2 className="text-4xl text-white font-bold">Capture The Moment</h2>
            //                 <div className="w-[500px] px-6 mt-4">
            //                     <p className="text-white text-center">
            //                         Our studio is designed to help you freeze time in the most memorable way. Whether you're recording a podcast or shooting videos, this is where magic happens.
            //                     </p>
            //                 </div>
            //             </div>
            //         </div>
            //         <div>
            //             <img src="/studio2.jpg" className="h-[600px] max-w-[700px]" alt="Studio 2" />
            //             <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-2xl">
            //                 <h2 className="text-4xl text-white font-bold">Create With Confidence</h2>
            //                 <div className="w-[500px] px-6 mt-4">
            //                     <p className="text-white text-center">
            //                         We provide everything you need to bring your creative ideas to life. With state-of-the-art equipment, you can shoot like a pro and create professional content effortlessly.
            //                     </p>
            //                 </div>
            //             </div>

            //         </div>
            //         <div>
            //             <img src="/studio3.jpg" className="h-[600px] max-w-[700px]" alt="Studio 3" />
            //             <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-2xl">
            //                 <h2 className="text-4xl text-white font-bold">Unleash Your Creativity</h2>
            //                 <div className="w-[500px] px-6 mt-4">
            //                     <p className="text-white text-center">
            //                         Whether you're a professional or just starting, our space encourages boundless creativity. Bring your ideas to life in an inspiring environment.
            //                     </p>
            //                 </div>
            //             </div>
            //         </div>
            //         <div>
            //             <img src="/studio4.jpg"className="h-[600px] max-w-[700px]"  alt="Studio 4" />
            //             <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-2xl">
            //                 <h2 className="text-4xl text-white font-bold">Your Space, Your Story</h2>
            //                 <div className="w-[500px] px-6 mt-4">
            //                     <p className="text-white text-center">
            //                         Every project is unique, and so is our studio. Tailor your experience to tell your story in the best possible way, with all the tools at your disposal.
            //                     </p>
            //                 </div>
            //             </div>
            //         </div>
            //     </Carousel>
            // </div>

//             {/* Services Section */}
//             <div id="service-section" className="px-8 py-20 bg-gray-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 <Card>
//                     <CardContent>
//                         <h2 className="text-3xl text-center font-bold mb-4 ">Video Shoots</h2>
//                         <p  className='text-wrap text-justify px-4'>Capture professional-grade videos with state-of-the-art equipment and lighting setups. Whether it's a cinematic YouTube video, high-energy reel, or professional brand shoot, we've got you covered.High-quality shooting for YouTube, reels, and professional videos.</p>
//                         <img src="/shootingservice.png" alt="Video Shoots" className="w-54 h-54 mx-auto mt-4" />
//                     </CardContent>
//                 </Card>
//                 <Card>
//                     <CardContent>
//                         <h2 className="text-3xl text-center font-bold mb-4">Editing Services</h2>
//                         <p className='text-wrap text-justify px-4'>Transform raw footage into polished, impactful content. Our expert editors enhance your videos with precision cuts, color grading, sound design, and stunning visual effects.Professional video editing to make your content shine.</p>
//                         <img src="/Editing.png" alt="Video Shoots" className="w-54 h-54  mx-auto mt-4" />
//                     </CardContent>
//                 </Card>
//                 <Card>
//                     <CardContent>
//                         <h2 className="text-3xl text-center font-bold mb-4">Content Strategy</h2>
//                         <p className='text-wrap text-justify px-4'>Plan your content with confidence. We help you craft impactful stories, manage publishing schedules, and optimize your creative approach for maximum engagement. Helping you plan and execute your creative ideas.</p>
//                         <img src="/content.png" alt="Video Shoots" className=" mx-auto mt-4" />
//                     </CardContent>
//                 </Card>
//             </div>

//                {/* Contact Section */}
//                <div id="contact-section" className="px-8 py-20 bg-black text-center">
//                 <h2 className="text-4xl font-semibold mb-6">Ready to Create?</h2>
//                 <div className="flex flex-col md:flex-row gap-4 justify-center">
//                     <Button onClick={openInstagram} className="text-xl px-6 py-3 bg-red-600 hover:bg-red-800 rounded-2xl text-white font-semibold flex items-center justify-center">
//                         <FaInstagram className="mr-4 text-2xl" /> Instagram
//                     </Button>
//                     <Button onClick={openEmail} className="px-10 py-3 bg-blue-600 hover:bg-blue-800 rounded-2xl text-white font-semibold flex items-center justify-center">
//                         <FaEnvelope className="mr-4  text-2xl" /> Email Us
//                     </Button>
//                 </div>
//             </div>

//             {/* Footer Section */}
//             <footer className="px-8 py-8 bg-gray-900 text-center text-gray-500">
//                 <p>Contact us at: +91 78790 84754  | studiosprimecut@gmail.com</p>
//                 <p>&copy; 2025 PrimecutStudio. All rights reserved.</p>
//             </footer>
//         </div>
//     );
// };

// export default PrimecutStudio;

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

const PrimecutStudio = () => {
    const handleBookStudioClick = () => {
        const contactSection = document.getElementById("contact-section");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleServiceStudioClick = () => {
        const serviceSection = document.getElementById("service-section");
        if (serviceSection) {
            serviceSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const openInstagram = () => {
        window.open("https://www.instagram.com/prime_cutstudios/", "_blank");
    };

    const openEmail = () => {
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=studiosprimecut@gmail.com&su=Inquiry%20from%20Website%20for%20Studio&body=Hello%20PrimecutStudio%2C%0D%0A%0D%0AI%20am%20interested%20in%20your%20services.%20Please%20provide%20more%20details.%0D%0A%0D%0AThank%20you!", "_blank");
    };

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* Hero Section */}
            <div className="relative h-screen flex flex-col justify-center items-center px-4 md:px-8 bg-[url('./studio-bg.jpg')] bg-cover bg-center bg-fixed">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-center leading-tight md:leading-snug lg:leading-normal">
                PrimecutStudio
            </h1>
            <p className="text-base md:text-lg lg:text-2xl mb-8 text-center leading-snug md:leading-relaxed">
                Where Creativity Meets Precision
            </p>
            <Button onClick={handleBookStudioClick} className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-2xl text-white font-semibold text-sm md:text-lg">
                Book Your Studio Now
            </Button>
                {/* Floating Elements */}
                <motion.img 
                    onClick={handleServiceStudioClick} 
                    src="/floating3.png" 
                    alt="camera"
                    className="absolute w-24 top-12 right-4 sm:w-16 sm:top-84 md:w-24 md:top-64 md:right-16 lg:w-56 lg:top-64 lg:right-64"
                    animate={{ y: [0, -20, 0] }} 
                    transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
                    style={{ cursor: 'pointer' }} 
                />

                <motion.img 
                    src='/tripod.png' 
                    alt="tripod" 
                    className='absolute w-20 bottom-20 right-4 md:w-32 md:bottom-24 md:right-20 lg:w-48 lg:bottom-32 lg:right-24'
                    animate={{ y: [0, -20, 0] }} 
                    transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
                />
            </div>

            {/* About Section */}
            <div className="relative px-4 md:px-8 py-20 bg-gray-900">  
            <motion.img 
                    src='/camera.png' 
                    alt="camera" 
                    className='absolute w-24 top-16 left-4 sm:w-16  md:w-24 md:top-16 md:left-16 lg:w-56 lg:top-24 lg:left-16' 
                    animate={{ y: [0, -20, 0] }} 
                    transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
                />              
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">Why Choose PrimecutStudio?</h2>
                <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-6">
                    At PrimecutStudio, we offer more than just a space for your projects. Our studio is equipped with state-of-the-art equipment, unique set designs, and expert support to help you create content that stands out.
                </p>               
                <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
                    With flexible packages, cutting-edge technology, and a dedicated team, PrimecutStudio is the perfect place to bring your creative ideas to life.
                </p>
            </div>

                    {/* Image Carousel */}
            <div className="bg-gray-900 h-[400px] md:h-[500px] lg:h-[700px]">
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    className="h-full"

                >
                    {/* Slide 1 */}
                    <div>
                        <img src="./studio1.jpg" className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover" alt="Studio 1" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-2xl p-4">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center">Capture The Moment</h2>
                            <div className="w-full md:w-[400px] lg:w-[500px] mt-4">
                                <p className="text-white text-center text-sm md:text-base">
                                    Our studio is designed to help you freeze time in the most memorable way. Whether you're recording a podcast or shooting videos, this is where magic happens.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div>
                        <img src="./studio2c.jpg" className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover" alt="Studio 2" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-2xl p-4">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center">Create With Confidence</h2>
                            <div className="w-full md:w-[400px] lg:w-[500px] mt-4">
                                <p className="text-white text-center text-sm md:text-base">
                                    We provide everything you need to bring your creative ideas to life. With state-of-the-art equipment, you can shoot like a pro and create professional content effortlessly.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div>
                        <img src="/studio3.jpg" className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover" alt="Studio 3" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-2xl p-4">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center">Unleash Your Creativity</h2>
                            <div className="w-full md:w-[400px] lg:w-[500px] mt-4">
                                <p className="text-white text-center text-sm md:text-base">
                                    Whether you're a professional or just starting, our space encourages boundless creativity. Bring your ideas to life in an inspiring environment.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Slide 4 */}
                    <div>
                        <img src="/studio4.jpg" className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover" alt="Studio 4" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-2xl p-4">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center">Your Space, Your Story</h2>
                            <div className="w-full md:w-[400px] lg:w-[500px] mt-4">
                                <p className="text-white text-center text-sm md:text-base">
                                    Every project is unique, and so is our studio. Tailor your experience to tell your story in the best possible way, with all the tools at your disposal.
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>


            {/* Services Section */}
            {/* px-8 py-20 bg-gray-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 */}
            <div id="service-section" className="px-8 md:px-8 py-20 bg-gray-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 
                lg:grid-cols-3 gap-8 ">
                <Card>
                    <CardContent>
                        <h2 className="text-2xl md:text-3xl text-center font-bold mb-4">Video Shoots</h2>
                        <p className="text-sm md:text-base text-justify px-2 md:px-4">
                            Capture professional-grade videos with state-of-the-art equipment and lighting setups. Whether it's a cinematic YouTube video, high-energy reel, or professional brand shoot, we've got you covered.
                        </p>
                        <img src="/shootingservice.png" alt="Video Shoots" className="w-28 h-28 md:w-40 md:h-40 lg:w-96 lg:h-96 mx-auto mt-4" />
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <h2 className="text-2xl md:text-3xl text-center font-bold mb-4">Editing Services</h2>
                        <p className="text-sm md:text-base text-justify px-2 md:px-4">
                            Transform raw footage into polished, impactful content. Our expert editors enhance your videos with precision cuts, color grading, sound design, and stunning visual effects.
                        </p>
                        <img src="/Editing.png" alt="Editing Services" className="w-28 h-28 md:w-40 md:h-40 lg:w-96 lg:h-96 mx-auto mt-4" />
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <h2 className="text-2xl md:text-3xl text-center font-bold mb-4">Content Strategy</h2>
                        <p className="text-sm md:text-base text-justify px-2 md:px-4">
                            Plan your content with confidence. We help you craft impactful stories, manage publishing schedules, and optimize your creative approach for maximum engagement.
                        </p>
                        <img src="/content.png" alt="Content Strategy" className="w-28 h-28 md:w-40 md:h-40 lg:w-96 lg:h-96 mx-auto mt-4" />
                    </CardContent>
                </Card>
            </div>

            {/* Contact Section */}
            <div id="contact-section" className="px-4 md:px-8 py-20 bg-black text-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to Create?</h2>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <Button onClick={openInstagram} className="text-lg px-6 py-3 bg-red-600 hover:bg-red-800 rounded-2xl text-white font-semibold flex items-center justify-center">
                        <FaInstagram className="mr-2 text-2xl" /> Instagram
                    </Button>
                    <Button onClick={openEmail} className="text-lg px-6 py-3 bg-green-700 hover:bg-blue-900 rounded-2xl text-white font-semibold flex items-center justify-center">
                        <FaEnvelope className="mr-2 text-2xl" /> Email Us
                    </Button>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="px-4 md:px-8 py-8 bg-gray-900 text-center text-gray-500">
                <p>Contact us at: +91 78790 84754  | studiosprimecut@gmail.com</p>
                <p>&copy; 2025 PrimecutStudio. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default PrimecutStudio;
