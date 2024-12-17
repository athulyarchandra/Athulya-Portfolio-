import React, { createContext, useState } from 'react'
export const addProjectDetailsResponseContext = createContext()
const ContextAPI = ({children}) => {
   const [addProjectDetailsResponse,setAddProjectDetailsResponse] = useState("")
  return (
    <addProjectDetailsResponseContext.Provider value={{addProjectDetailsResponse,setAddProjectDetailsResponse}}>
       {children}
    </addProjectDetailsResponseContext.Provider>
  )
}

export default ContextAPI 