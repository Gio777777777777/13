import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import BlogCard from "../components/BlogCard";

const HomePage = () => {
    const { blogs } = useContext(BlogContext);

    return (
        <div>
            <h1>Blogs</h1>
            <div className="blog-list">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} {...blog} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;