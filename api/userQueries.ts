import { SuperQueries } from "./SuperQueries";
import axios from "axios";
import { sha256 } from "js-sha256";

export class UserQueries extends SuperQueries {
  static baseUrl = super.baseUrl + "/auth/";

  static async signup(
    username: string,
    password: string,
    licensePlate: string
  ) {
    // const hashedPassword = sha256(password);
    const testPassword =  password

    try {
      const response = await axios.post(this.baseUrl + "signup", {
        username,
        password: testPassword,
        licensePlate,
      });
      console.log("userQueries", response.data);

      return response.data;
    } catch (error) {
      // Handle errors
      console.error("Error signing up:",this.baseUrl + "signup", error);
      throw new Error("Failed to sign up");
    }

  }
}
