import commmonAPI from "./commonAPI";
import SERVER_URL from "./serverUrl";

//add-Project 
export const addProjectAPI = async (reqBody,reqHeader)=>{
    return await commmonAPI("POST",`${SERVER_URL}/add-project`,reqBody,reqHeader)
}
//all-projects
export const getAllProjectAPI = async ()=>{
    return await commmonAPI("GET",`${SERVER_URL}/all-projects`,{})
}