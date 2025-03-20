import axios from 'axios';
const API_URL="https://aj3b1u-8080.bytexl.dev/api/auth";
const register = async (user) =>{
    const response=await axios.post(`${API_URL}/register`,user);
    return response.data;
}
const login =async(email,password)=>{
    const response=await axios.post(`${API_URL}/login`,{email,password});
    return response.data;
}
export default{
    register,
    login
}