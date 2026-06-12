import axios from "axios";


export const fatchUser = async() =>{
    try{
        const response = await axios.get("http://localhost:3000/api/users")
        return response.data;
    }catch(error){
        console.log(error)
    }
}