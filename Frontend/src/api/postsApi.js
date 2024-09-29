import axios from "axios";

const API_URL = "https://blog.mishanshah.com.np/backend/api/";

// Fetch all posts with pagination
export const fetchPosts = (page = 1) => {
  return axios.get(`${API_URL}posts.php?page=${page}`);
};

// Fetch a single post by ID
export const fetchPostById = (id) => {
  return axios.get(`${API_URL}posts.php?id=${id}`);
};

// Create a new post
export const createPost = (title, body, author) => {
  return axios.post(`${API_URL}posts.php`, { title, body, author });
};
