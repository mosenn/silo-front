import apiRequests from './config';

// Axios login function  
const LoginApi = async (data) => {  
  try {  
    const response = await apiRequests.post("/auth/login", data);  
    return response; // The response will include data in response.data  
  } catch (error) {  
    // Handle errors  
    throw error.response ? error.response.data : new Error("An unknown error occurred"); // Capture server errors or generic errors  
  }  
};  

export default LoginApi;