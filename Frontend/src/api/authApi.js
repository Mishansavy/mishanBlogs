import axios from "axios";

const API_URL = "https://blog.mishanshah.com.np/backend/api/";

// Register a new user
export const registerUser = (username, email, password) => {
  return axios.post(`${API_URL}users.php`, { username, email, password });
};

// Login a user and retrieve JWT
export const loginUser = (email, password) => {
  return axios.post(`${API_URL}login.php`, { email, password });
};
