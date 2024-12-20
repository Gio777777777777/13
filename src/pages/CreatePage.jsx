import React, { useState, useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { useNavigate } from "react-router-dom"; 

const CreatePage = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { addBlog } = useContext(BlogContext); 
    const navigate = useNavigate(); 

    
    const handleSubmit = (e) => {
        e.preventDefault();
        addBlog(title, description); 
        navigate("/"); 
    };

   
    const handleBack = () => {
        navigate("/"); 
    };

    return (
        <div className="create-page">
            <h2>Create new blog</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Create</button>
            </form>

            {}
            <button onClick={handleBack}>Back</button>
        </div>
    );
};

export default CreatePage;
