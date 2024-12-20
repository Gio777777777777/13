import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([
        { id: 1, title: "Blog 1", description: "Description for blog 1" },
        { id: 2, title: "Blog 2", description: "Description for blog 2" },
    ]);

    const addBlog = (title, description) => {
        const newBlog = {
            id: blogs.length + 1, 
            title,
            description,
        };
        setBlogs([...blogs, newBlog]); 
    };

    return (
        <BlogContext.Provider value={{ blogs, addBlog }}>
            {children} {}
        </BlogContext.Provider>
    );
};
