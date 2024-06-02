import axios from "axios"
import { SuperQueries } from "../api/SuperQueries"
import { Role } from "../store/userSlice";

export class UserQueries2 extends SuperQueries {
    
    static fetchUser = async (role: Role, id: string) => {
        const url = this.baseUrl + "/users/"
        const entireURL = url + id + "/role"
       
        console.log("hahahahahaah", entireURL);
        
        const body = { role: role };
        
        try {
            const response = await axios.patch(entireURL, body);
            console.log("this is a response", response.data);
            return response.data;
        } catch (error) {
            // Handle error appropriately
            console.error("Error fetching user:", error);
            throw error; // Rethrow the error to be caught by the caller
        }
    }
}