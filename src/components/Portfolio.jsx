import React, { useEffect, useState } from 'react'
import projectImg from '../assets/pjtImg.png'
import { addProjectAPI, getAllProjectAPI } from '../sevices/allAPI'
import { Link } from 'react-router-dom'
import SERVER_URL from '../sevices/serverUrl'


const Portfolio = () => {
    const [allProjects, setAllProjects] = useState([])
    const [preview, setPreview] = useState("")
    const [imgFileStatus, setImgFileStatus] = useState(false)
    const [projectDetails, setProjectDetails] = useState({
        title: "", projectImg: "", github: ""
    })
    console.log(projectDetails);
    useEffect(() => {
        if (projectDetails.projectImg.type == "image/png" || projectDetails.projectImg.type == "image/jpeg" || projectDetails.projectImg.type == "image/jpg") {
            setImgFileStatus(true)
            setPreview(URL.createObjectURL(projectDetails.projectImg))
        } else {
            //invalid image
            setImgFileStatus(false)
            setPreview("")
            setProjectDetails({ ...projectDetails, projectImg: "" })
        }
    }, [projectDetails.projectImg])
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        getAllProjects()
    }, [])
    const saveProject = async () => {
        const { title, projectImg, github } = projectDetails
        if (title && projectImg && github) {
            const reqBody = new FormData()
            reqBody.append("title", title)
            reqBody.append("projectImg", projectImg)
            reqBody.append("github", github)
            const reqHeader = {
                "Content-Type": "multipart/form-data"
            }
            //alert("make api call")
            try {
                const result = await addProjectAPI(reqBody, reqHeader)
                if (result.status == 200) {
                    alert("Project added successfully")
                    setIsOpen(false)
                    setProjectDetails({ title: "", github: "" })
                    setProjectDetails({ ...projectDetails, projectImg: "" })
                } else {
                    alert(result.response.data)
                }
            } catch (err) {
                console.log(err);
            }
            setIsOpen(false)



        } else {
            alert("Please provide all details")
        }
    }
    const getAllProjects = async () => {
        try {
            const result = await getAllProjectAPI()
            if (result.status == 200) {
                setAllProjects(result.data)
            }
        } catch (err) {
            console.log(err);

        }
    }
    console.log(allProjects);


    return (
        <>
            <div className='btn mt-40' >
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-3xl'>Portfolio</h1>
                        <p style={{ height: '4px', width: '60px' }} className='mb-1  bg-blue-600'></p>
                        <p style={{ height: '4px', width: '45px' }} className=' bg-blue-600'></p>

                    </div>
                    <div style={{ height: '30px', width: '130px' }} className='text-center bg-blue-600 text-white cursor-pointer rounded-full me-4 ' onClick={() => setIsOpen(true)}>Add Projects</div>
                </div>

                <div className="grid grid-cols-3 mt-8">
                    {
                        allProjects?.map(project => (
                            <div>
                                <div style={{width:'100%',height:'180px'}} className=" flex flex-col max-w-sm rounded overflow-hidden shadow-lg m-3 text-center" title={project.title}>
                                    <img width={'150px'} height={'200px'} className="image-fluid w-full h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src={`${SERVER_URL}/uploads/${project?.projectImg}`} alt="image description" />
                                </div>
                                <div className=" flex flex-col max-w-sm mx-10 py- overflow-hidden shadow-lg m-3 text-center bg-blue-600 text-white rounded-full">
                                    <Link to={project.github} className='mx-8'> <button className='btn'>GitHub Link</button></Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="relative">
                {/* Button to Open Modal */}

                {/* Modal */}
                {isOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center ">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
                            <h2 className="text-xl font-bold mb-4">Modal Title</h2>
                            <p className="text-gray-700 mb-6">
                                <div class="mt-10 grid grid-row-1 gap-x-6 gap-y-8 sm:grid-row-6">
                                    <div class="sm:row-span-3">
                                        <label htmlFor="first-name" class="block text-sm/6 font-medium text-black">Project Name</label>
                                        <div class="mt-2">
                                            <input value={projectDetails.title} onChange={e => setProjectDetails({ ...projectDetails, title: e.target.value })} type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-full-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
                                        </div>
                                    </div>
                                    <label>
                                        <input onChange={e => setProjectDetails({ ...projectDetails, projectImg: e.target.files[0] })} type="file" style={{ display: 'none' }} />
                                        <img height={'120px'} width={'120px'} className='img-fluid' src={preview ? preview : projectImg} alt="no image" />
                                    </label>
                                    {!imgFileStatus &&
                                        <div className='text-red-600 text-xl my-1'>*Upload only the following file types (jpeg,jpg,png)</div>

                                    }                                        <div class="sm:row-span-3">
                                        <label htmlFor="first-name" class="block text-sm/6 font-medium text-black">GitHub Link</label>
                                        <div class="mt-2">
                                            <input value={projectDetails.github} onChange={e => setProjectDetails({ ...projectDetails, github: e.target.value })} type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-full-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
                                        </div>
                                    </div>
                                </div>
                            </p>
                            <div className="flex justify-end">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-2 mx-2 bg-blue-500 text-black rounded hover:bg-blue-600 z-50" >
                                    Close
                                </button>
                                <button
                                    onClick={saveProject}
                                    className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600" >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </>
    )
}

export default Portfolio