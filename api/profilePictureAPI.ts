import axios, { AxiosResponse } from "axios";
import { CreateProfilePictureDTO, GetProfilePictureDTO } from "../entities/CreateProfilePictureDTO";
import { SuperQueries } from "./SuperQueries";

export class profilePictureAPI extends SuperQueries{
    static baseUrl = super.baseUrl + '/profile-picture'

    static async saveProfilePicture(profilePicture: CreateProfilePictureDTO) {
        console.log("THis is the data", this.baseUrl, profilePicture)
        const response = await axios.post(this.baseUrl, profilePicture)
        console.log("hahah", response)
        return response.data
    }

    static async getProfilePicture(userId : GetProfilePictureDTO) {
        console.log("Fetching profile picture for user ID:", userId );
        try {
            const response: AxiosResponse = await axios.get(`${this.baseUrl}/${userId}`);
            console.log("Profile picture fetched successfully:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching profile picture:", error);
            throw error; // Rethrow the error to be handled by the caller
        }
    }

    static async updateProfilePicture(profilePicture: CreateProfilePictureDTO) {
        console.log("THis is the data", `${this.baseUrl}/${profilePicture.UserId}`)
      const response = await axios.put(`${this.baseUrl}/${profilePicture.UserId}`, {
        ProfilePicture: profilePicture.ProfilePicture
      });
        console.log("hahah", response)
        return response.data
    }

    static async deleteProfilePicture(userId : GetProfilePictureDTO) {
        console.log("THis is the data", userId)
        try {
            const response: AxiosResponse = await axios.delete(`${this.baseUrl}/${userId}`);
            console.log("Profile picture fetched successfully:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error deleting profile picture:", error);
            throw error; // Rethrow the error to be handled by the caller
        }
    }
}