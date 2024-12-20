import { baseAPI } from "../baseUrl";

export async function registerUser(name, email, password) {
  try {
    const response = await baseAPI.post(`users/register`, {
      name: name,
      email: email,
      password,
    });
    console.log("response", response);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(email, password) {
  try {
    const response = await baseAPI.post(`users/login`, {
      email: email,
      password,
    });
    console.log("response", response);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function signout() {
  try {
    const accessToken = localStorage.getItem("accessToken"); // Retrieve token from localStorage

    if (!accessToken) {
      throw new Error("Access token not found.");
    }

    const response = await baseAPI.post(
      `users/logout`,
      {}, // Body can remain empty
      {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Pass token as Authorization header
        },
      }
    );

    // Clear tokens from localStorage after successful signout
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    return response.data;
  } catch (error) {
    console.error("Signout Error:", error);
    throw error;
  }
}



