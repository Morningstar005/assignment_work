import api, { baseAPI } from "../baseUrl";

export async function registerUser(name, email, password) {
  try {
    const response = await baseAPI.post(`users/register`, {
      name: name,
      email: email,
      password,
    });
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
    return response;
  } catch (error) {
    throw error;
  }
}

export async function signout() {
  try {
    const response = await api.post("users/logout", {}); // Use the `api` instance for the request

    // Clear tokens from localStorage after successful signout
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    return response.data; // Return the response data
  } catch (error) {
    console.error("Signout Error:", error);
    throw error; // Propagate error
  }
}



