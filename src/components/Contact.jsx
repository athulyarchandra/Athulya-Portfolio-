import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Link } from 'react-router-dom'


const Contact = () => {
    const [details, setDetails] = useState({
        fname: "", email: "", subject: "", about:""
        })
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_z3ta97g','template_l2cfwss',e.target,'fS2FNOkM3DFjmrM73')
    }
    return (
        <>
            <div>
                <div className='mt-44'>
                    <div className='mb-16'>
                        <h1 className='text-3xl '>Connect with me</h1>
                        <p style={{ height: '4px', width: '80px' }} className='mb-1  bg-blue-600'></p>
                        <p style={{ height: '4px', width: '65px' }} className=' bg-blue-600'></p>
                    </div>
                    <div>
                        <h1 className='text-center mb-4 mt-20 text-xl text-blue-600'>Do You Have Any Question?</h1>
                        <h3 className='text-center mb-10 text-xl'>Im At Your Service</h3>
                        <div className='flex justify-evenly items-center mt-4'>
                            <div className='flex flex-col justify-evenly items-center m-10 '>
                                <i className="fa-brands fa-linkedin text-2xl  hover:rounded-full hover:bg-blue-600 hover:text-white px-2 py-2"></i>
                                <h1 className='m-1'>LinkedIn</h1>
                                <Link className='mb-2 '>athulyarchandra</Link>
                            </div>
                            <div className='flex flex-col justify-evenly items-center m-10 '>
                                <i className="fa-brands fa-square-github text-2xl  hover:rounded-full hover:bg-blue-600 hover:text-white px-2 py-2"></i>
                                <h1 className='m-1'>Gitnub</h1>
                                <Link className='mb-2 '>AthulyaRchandra</Link>
                            </div>
                            <div className='flex flex-col justify-evenly items-center m-10 '>
                                <i className="fa-brands fa-square-instagram text-2xl  hover:rounded-full hover:bg-blue-600 hover:text-white px-2 py-2"></i>
                                <h1 className='m-1'>Instagram</h1>
                                <Link><p className='mb-2 '>chandraz</p></Link>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-center mt-20 text-xl text-blue-600'>SLIDE INTO MY DMs</h1>
                    <h3 className='text-center'>I RESPOND PROMPTLY TO MESSAGES!</h3>
                    <div className="border-b border-white-900/10 pb-12 pe-3">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm/6 font-medium text-black">Name</label>
                                <div className="mt-2 text-black">
                                    <input type="text" name="first-name" id="first-name" placeholder="Enter your name" className="block w-full rounded-full-md border-0 py-1.5 px-2 my-2 text-black shadow-sm ring-1 ring-inset ring-white-300 placeholder:focus:ring-2 sm:text-sm/6" />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="email" className="block text-sm/6 font-medium text-black">Email address</label>
                                <div className="mt-2 text-black">
                                    <input id="email" name="email_from" type="email" placeholder="Enter your mailId" className="block w-full rounded-full-md border-0 py-1.5 px-2 my-2 text-blackk shadow-sm ring-1 ring-inset ring-white-300 placeholder:focus:ring-2 sm:text-sm/6" />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="email" className="block text-sm/6 font-medium text-black">Subject </label>
                                <div className="mt-2 text-black">
                                    <input id="text" name="subject" type="text"  placeholder="Enter the subject" className="block w-full rounded-full-md border-0 py-1.5 px-2 my-2 text-black shadow-sm ring-1 ring-inset ring-white-300 placeholder:focus:ring-2 sm:text-sm/6" />
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="about" className="block text-sm/6 font-medium text-black">About</label>
                                <div className="mt-2 text-black">
                                    <textarea name='message' class="border-2 border-gray-200 rounded px-3 py-2 w-full" rows="4" placeholder="Enter your message"></textarea>
                                </div>
                            </div>
                        </div>
                        <button onClick={sendEmail} className='btn bg-blue-600 text-white rounded-full px-3 py-2 my-6 mx-9'>Send Message </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact