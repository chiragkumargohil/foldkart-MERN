import axios from 'axios';

const url = 'http://localhost:5000';

export const authenticateSignUp = async (user) => {
    try {
        return await axios.post(`${url}/signup`, user);
    } catch (error) {
        console.log('ERR-SIGNUP_API:', error);
        return error.response;
    }
};

export const authenticateLogIn = async (user) => {
    try {
        return await axios.post(`${url}/login`, user);
    } catch (error) {
        console.log('ERR-LOGIN_API:', error);
    }
};