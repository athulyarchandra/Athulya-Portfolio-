import React from 'react'
import resume from '../assets/AthulyaRChandra.pdf'

const AbouteMe = () => {
    
    return (
        <>
            <div>
                <div>
                    <h1 className='text-3xl '>About Me</h1>
                    <p style={{ height: '4px', width: '60px' }} className='mb-1  bg-blue-600'></p>
                    <p style={{ height: '4px', width: '45px' }} className=' bg-blue-600'></p>
                    <h1 className='text-xl mt-7'>I'm Athulya R Chandra a <span className='text-blue-600 text-3xl' > Mern Stack Developer</span></h1>
                    <p style={{ lineHeight: "28px" }} className='mt-4'>I am a passionate front-end developer with a strong foundation in HTML, CSS, and JavaScript, dedicated to creating responsive and user-friendly websites that are both visually appealing and highly functional. I specialize in problem-solving and crafting seamless user interfaces that deliver exceptional user experiences.

In addition to my front-end expertise, I am proficient in the MERN stack (MongoDB, Express.js, React, Node.js), enabling me to develop robust full-stack applications. From dynamic back-end integration to efficient CRUD operations, I ensure that every solution is scalable, efficient, and tailored to meet specific business goals.

Whether it’s designing intuitive front-end layouts, implementing server-side logic, or building complete end-to-end applications, I thrive on delivering engaging web experiences that align with both user needs and business objectives.

Let’s work together to bring your ideas to life and create impactful web solutions! </p>
                </div>
                <div className='grid grid-cols-3 mt-9'>
                    <div className='px-3'>
                        <p className='mt-6'>Birthday : 17-Sep-2002</p>
                        <hr />
                        <p className='mt-6'>Age : 22 years</p>
                        <hr />
                        <p className='mt-6'>Email : athulyarchandra24@gmail.com</p>
                        <hr />
                        <div className='mt-6 mb-4'>
                            <a href={resume} download><button className='btn px-4 py-2 rounded-full bg-blue-600 text-white me-3'>Download CV</button></a>
                            <button className='btn px-4 py-2 rounded-full bg-blue-600 text-white'>Hire Me</button>
                        </div>
                    </div>
                    <div className='px-3'>
                        <p className='mt-6'>Website : www.domain.com</p>
                        <hr />
                        <p className='mt-6'>City : Trivandrum</p>
                        <hr />
                    </div>
                    <div className='me-5'>
                        <div className='px-2 mb-9 '>
                            <div className='flex justify-between'>
                                <h1 className='text-xl' >HTML</h1>
                                <h1 className='text-xl'>95%</h1>
                            </div>
                            <div className='flex relative'>
                                <div style={{ height: '10px', width: '95%' }} className='bg-blue-600 rounded-full mb-0 absolute'></div>
                                <div style={{ height: '10px', width: '100%' }} className='bg-black mb-2 rounded-full '></div>
                            </div>
                        </div>
                        <div className='px-2 mb-9'>
                            <div className='flex justify-between'>
                                <h1 className='text-xl' >CSS</h1>
                                <h1 className='text-xl'>90%</h1>
                            </div>
                            <div className='flex relative'>
                                <div style={{ height: '10px', width: '90%' }} className='bg-blue-600 rounded-full mb-0 absolute'></div>
                                <div style={{ height: '10px', width: '100%' }} className='bg-black mb-2 rounded-full '></div>
                            </div>                        </div>
                        <div className='px-2 mb-9'>
                            <div className='flex justify-between'>
                                <h1 className='text-xl' >JS</h1>
                                <h1 className='text-xl'>82%</h1>
                            </div>
                            <div className='flex relative'>
                                <div style={{ height: '10px', width: '82%' }} className='bg-blue-600 rounded-full mb-0 absolute'></div>
                                <div style={{ height: '10px', width: '100%' }} className='bg-black mb-2 rounded-full '></div>
                            </div>                        </div>
                        <div className='px-2 mb-9'>
                            <div className='flex justify-between'>
                                <h1 className='text-xl' >TS</h1>
                                <h1 className='text-xl'>70%</h1>
                            </div>
                            <div className='flex relative'>
                                <div style={{ height: '10px', width: '70%' }} className='bg-blue-600 rounded-full mb-0 absolute'></div>
                                <div style={{ height: '10px', width: '100%' }} className='bg-black mb-2 rounded-full '></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default AbouteMe