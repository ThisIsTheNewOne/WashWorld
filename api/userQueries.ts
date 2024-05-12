import { SuperQueries } from './SuperQueries';
import axios from 'axios';

export class UserQueries extends SuperQueries{
    static baseUrl = super.baseUrl + '/auth/'

    static async signup(username: string, password: string, licensePlate: string) {
        const response = await axios.post(this.baseUrl + "signup", { username, password, licensePlate} )
        console.log("userQueries", response.data);
        
        return response.data;
    }
}