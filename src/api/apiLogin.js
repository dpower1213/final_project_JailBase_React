import {apiBasicAuth} from './apiBasicAuth';

const endpoint = '/api/login';

export const getUser = async (email, password, cancelToken) =>{
    let error;
    let message;
    let user;
    
    const response = await apiBasicAuth(email, password, cancelToken).get(endpoint);
    if (response.ok){
        console.log(response)
        message = 'O\'tay'
        user=response.data
        console.log(user)
    }else {
        error = 'Error, try again?'
    }
        
    return{
        error,
        user,
        message
    };
};