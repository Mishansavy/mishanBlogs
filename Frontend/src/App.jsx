import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import NewPost from "./components/NewPost";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/new" element={<NewPost />} />
      </Routes>
    </Router>
  );
}

export default App;
