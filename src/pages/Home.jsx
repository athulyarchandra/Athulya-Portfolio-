import React, { useState } from 'react'
import profilepic from '../assets/profile.jpg'
import Service from '../components/Service'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import AbouteMe from '../components/AbouteMe'
import { ReactTyped } from "react-typed";
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const changeColor = (textColor) => {
        document.body.style.color = textColor;
    }

    return (
        <>
            <div className='bg-black'>
                <div>
                    <div className='flex justify-end'>
                        <button onClick={changeColor('text-red-400')} className='btn text-red-400 p-5'>..</button>
                        <button onClick={changeColor('text-cyan-400 ')} className='btn text-cyan-400 p-5'>..</button>
                        <button onClick={changeColor('text-green-400')} className='btn text-green-400 p-5'>..</button>
                        <button onClick={changeColor('text-yellow-400')} className='btn text-yellow-400 p-5'>..</button>
                    </div>
                    <div>
                        <div className="lg:hidden fixed top-4 left-4 z-20">
                            <i
                                className="fa-solid fa-bars text-white text-2xl cursor-pointer"
                                onClick={toggleSidebar}
                            ></i>
                        </div>

                        <div
                            className={`slidebar z-10 fixed top-0 bottom-0 ${isSidebarOpen ? "left-0" : "-left-[300px]"
                                } lg:left-0 p-2 w-[300px] overflow-auto text-center bg-gray-900 transition-all duration-300`}
                        >
                            <div className="text-gray-100 text-xl mb-30">
                                <div className="5 mt-1 flex">
                                    <div className="flex justify-end">
                                        <p
                                            style={{ height: "60px", width: "4px" }}
                                            className="bg-blue-600"
                                        ></p>
                                    </div>
                                    <div>
                                        <div className="flex justify-end">
                                            <p
                                                style={{ height: "4px", width: "60px" }}
                                                className="bg-blue-600"
                                            ></p>
                                        </div>
                                        <h1 className="font-bold text-grey-200 text-2xl p-2">
                                            Portfolio
                                        </h1>
                                        <div className="flex justify-start mt-1">
                                            <p
                                                style={{ height: "4px", width: "60px" }}
                                                className="bg-blue-600"
                                            ></p>
                                        </div>
                                    </div>
                                    <div className="flex justify-start">
                                        <p
                                            style={{ height: "60px", width: "4px" }}
                                            className="bg-blue-600"
                                        ></p>
                                    </div>
                                    <i
                                        className="fa-solid fa-xmark ml-20 cursor-pointer lg:hidden"
                                        onClick={toggleSidebar}
                                    ></i>
                                </div>
                            </div>
                            <div className="p-2.5 mt-3 flex items-center rounded-full-md px-4 duration-300 cursor-pointer hover:bg-blue-300 text-white">

                                <i className="fa-solid fa-house"></i>
                                <span className="text-xl ml-4 text-gray-200">Home</span>

                            </div>
                            <div className="p-2.5 mt-3 flex items-center rounded-full-md px-4 duration-300 cursor-pointer hover:bg-blue-300 text-white">
                                <Link to={'/about'}>
                                    <i className="fa-solid fa-user"></i>
                                    <span className="text-xl ml-4 text-gray-200">About</span>
                                </Link>
                            </div>
                            <div className="p-2.5 mt-3 flex items-center rounded-full-md px-4 duration-300 cursor-pointer hover:bg-blue-300 text-white">
                                <Link to={'/service'}>
                                    <i className="fa-solid fa-handshake"></i>
                                    <span className="text-xl ml-4 text-gray-200">Service</span>
                                </Link>
                            </div>
                            <div className="p-2.5 mt-3 flex items-center rounded-full-md px-4 duration-300 cursor-pointer hover:bg-blue-300 text-white">
                                <Link to={'/portfolio'}>
                                    <i className="fa-solid fa-briefcase"></i>
                                    <span className="text-xl ml-4 text-gray-200">Portfolio</span>
                                </Link>
                            </div>
                            <div className="p-2.5 mt-3 flex items-center rounded-full-md px-4 duration-300 cursor-pointer hover:bg-blue-300 text-white">
                                <Link to={'/contact'}>
                                    <i className="fa-solid fa-comments"></i>
                                    <span className="text-xl ml-4 text-gray-200">Contact</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ml-80'>
                    <div style={{ minHeight: '100vh' }} className='grid grid-cols-2 items-center '>
                        <div>
                            <h1 className='text-4xl mb-5' >My name is <span className='text-blue-600 text-4xl'>Athulya R Chandra</span></h1>
                            <h1 className='text-4xl mb-6'>I'm a<span className='text-blue-600'> <ReactTyped strings={["MernStack Develpoer", "FrondEnd Developer", "Backend Developer"]} typeSpeed={30} backSpeed={30} loop /></span></h1>
                            <p>As a developer proficient in front-end, back-end, and full-stack development with the MERN stack, I specialize in crafting responsive, user-friendly websites and dynamic web applications. My approach integrates creativity and technical expertise to deliver visually appealing and highly functional digital solutions.</p>
                            <button className='btn px-5 py-2 mt-5 rounded-full bg-blue-600 text-white'>Hire Me</button>
                        </div>
                        <div className='border-t-2 border-indigo-500 border-r-4 flex items-center justify-center p-5 m-5'>
                            <img width={'300px'} className='' src={profilepic} alt="no image" />
                        </div>
                    </div>
                    <AbouteMe />
                    <Service />
                    <Portfolio />
                    <Contact />

                </div>


            </div>


        </>
    )
}

export default Home