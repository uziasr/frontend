import axios from 'axios'

function axiosWithAuth(optionalToken=''){
    const token = localStorage.getItem('token') || optionalToken
    
    const developement = "http://localhost:8080/api"
    const production = "https://form-critic.herokuapp.com/api"
    const api = production
    
    return axios.create({
        baseURL:api,
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    })
}

export default axiosWithAuth