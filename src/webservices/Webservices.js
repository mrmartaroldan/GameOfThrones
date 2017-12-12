import axios from 'axios'
import * as Constants from './Constants'

export function configureAxios() {
    axios.defaults.baseURL = Constants.BASE_URL;
    //En el caso de que tuviera un token
    //axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    
}