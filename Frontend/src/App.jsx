// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import BlogList from "./components/BlogList";
// import BlogPost from "./components/BlogPost";
// import NewPost from "./components/NewPost";
// import Login from "./components/Auth/Login";
// import Register from "./components/Auth/Register";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/post/:id" element={<BlogPost />} />
//         <Route path="/blogs" element={<BlogList />} />
//         <Route path="/new" element={<NewPost />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import NewPost from "./components/NewPost/NewPost";
import BlogList from "./components/BlogList/BlogList";
import BlogPost from "./components/BlogPost/BlogPost";

// Mock function to check if admin is logged in
const isAuthenticated = () => {
  return !!localStorage.getItem("admin"); // assuming you store some auth token
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/blogs" element={<BlogList />} />

        {/* Private Routes */}
        <Route
          path="/admin/login"
          element={
            isAuthenticated() ? <Navigate to="/admin/dashboard" /> : <Login />
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            isAuthenticated() ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/admin/login" />
            )
          }
        />
        <Route
          path="/admin/new-post"
          element={
            isAuthenticated() ? <NewPost /> : <Navigate to="/admin/login" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
