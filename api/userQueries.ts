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
    const testPassword = password;

    try {
      const response = await axios.post(this.baseUrl + "signup", {
        username,
        password: testPassword,
        licensePlate,
      });
      console.log("userQueries", response.data);

      if (response.data.statusCode === 400) {
        console.error("Username already exists");
        // throw new Error("Username already exists");
        return "Username already exists"
      } else if (response.data.statusCode === 200) {
        return response.data;
      }
    } catch (error: any) {
      // Handle errors
      console.error("Error signing up:", this.baseUrl + "signup", error);
      throw new Error("Failed to sign up");
    }
  }
}
