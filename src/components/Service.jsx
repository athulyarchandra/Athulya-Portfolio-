import React from 'react'

const Service = () => {
    return (
        <>
            <div>
                <h1 className='text-3xl mt-40'>Services</h1>
                <p style={{ height: '4px', width: '60px' }} className='mb-1  bg-blue-600'></p>
                <p style={{ height: '4px', width: '45px' }} className=' bg-blue-600'></p>
                <div class="grid grid-cols-3 gap-3 mt-4">
                    <div className="mx-2 flex items-center flex-col bg-slate-900 justify-center max-w-sm my-3 px-3 py-4 rounded overflow-hidden shadow-lg hover:shadow-blue-600">
                        <i className="fa-solid fa-desktop  hover:rounded-full text-2xl hover:bg-blue-600 hover:text-white p-5"></i>
                        <h1 className='py-2'>frontend Developer</h1>
                        <p className=' text-center '>Creating user-centric designs and interfaces for intuitive web applications.</p>
                    </div>
                    <div className="mx-2 flex items-center flex-col bg-slate-900 justify-center max-w-sm my-3 px-3 py-4 rounded overflow-hidden shadow-lg hover:shadow-blue-600">
                        <i className="fa-solid fa-rocket  hover:rounded-full text-2xl hover:bg-blue-600 hover:text-white p-5"></i>
                        <h1 className='py-2'>frontend Developer</h1>
                        <p className=' text-center '>Creating user-centric designs and interfaces for intuitive web applications.</p>
                    </div>
                    <div className="mx-2 flex items-center flex-col bg-slate-900 justify-center max-w-sm my-3 px-3 py-4 rounded overflow-hidden shadow-lg hover:shadow-blue-600">
                        <i className="fa-solid fa-laptop-code  hover:rounded-full text-2xl hover:bg-blue-600 hover:text-white p-5"></i>
                        <h1 className='py-2'>Web Developer</h1>
                        <p className=' text-center '>Building engaging websites that deliver seamless user experiences.</p>
                    </div>
                    <div className="mx-2 flex items-center flex-col bg-slate-900 justify-center max-w-sm my-3 px-3 py-4 rounded overflow-hidden shadow-lg hover:shadow-blue-600">
                        <i className="fa-solid fa-code  hover:rounded-full text-2xl hover:bg-blue-600 hover:text-white p-5"></i>
                        <h1 className='py-2'>Problem Solving</h1>
                        <p className=' text-center '>Transforming complex challenges into efficient, innovative web solutions that enhance functionality and user experience</p>
                    </div>
                    <div className="mx-2 flex items-center flex-col bg-slate-900 justify-center max-w-sm my-3 px-3 py-4 rounded overflow-hidden shadow-lg hover:shadow-blue-600">
                        <i className="fa-solid fa-gears  hover:rounded-full text-2xl hover:bg-blue-600 hover:text-white p-5"></i>
                        <h1 className='py-2'>Backend Developer</h1>
                        <p className=' text-center '>Creates interactive web features and applications using REACT</p>
                    </div>
                    <div className="mx-2 flex items-center flex-col bg-slate-900 justify-center max-w-sm my-3 px-3 py-4 rounded overflow-hidden shadow-lg hover:shadow-blue-600">
                        <i className="fa-solid fa-mobile-screen-button  hover:rounded-full text-2xl hover:bg-blue-600 hover:text-white p-5"></i>
                        <h1 className='py-2'>Responsive Web Developer</h1>
                        <p className=' text-center '>Creates websites that adapt smoothly to various devices and screen sizes.</p>
                    </div>


                </div>
            </div>


        </>
    )
}

export default Service