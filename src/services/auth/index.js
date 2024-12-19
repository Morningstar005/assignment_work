import { baseAPI } from "../baseUrl";

export async function registerUser(name,email,password){
    try {

       const response = await baseAPI.post(`users/register`,{ 
        name: name,
        email: email,
        password}) 
        console.log('response',response)
       return response;
    } catch (error) {
        throw error 
    }
}

export async function loginUser(email,password){
    try {

       const response = await baseAPI.post(`users/login`,{ 
        email: email,
        password
    }) 
        console.log('response',response)
       return response;
    } catch (error) {
        throw error 
    }
}