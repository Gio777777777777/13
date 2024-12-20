import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

const BlogDetailsPage = () => {
    const { id } = useParams(); 
    const { blogs } = useContext(BlogContext); 
    const blog = blogs.find((blog) => blog.id === parseInt(id)); 

    if (!blog) {
        return <p>Blog not found</p>; 
    }

    return (
        <div>
            {}
            <Link to="/">← Back</Link>
            <h1>{blog.title}</h1>
            <p>{blog.description}</p>

        </div>
    );
};

export default BlogDetailsPage;
