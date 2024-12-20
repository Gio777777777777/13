import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import CreatePage from "./pages/CreatePage";
import { BlogProvider } from "./context/BlogContext"; 
import "./styles.css"; 

const App = () => {
  return (
    <BlogProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} /> {}
          <Route path="/blog/:id" element={<BlogDetailsPage />} /> {}
          <Route path="/create" element={<CreatePage />} /> {}
        </Routes>
      </Router>
    </BlogProvider>
  );
};

export default App;
