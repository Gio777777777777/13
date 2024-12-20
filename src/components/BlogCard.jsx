import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ id, title, description }) => {

    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="blog-card">
            <h3>{title}</h3>
            <p>{description.slice(0, 50)}...</p>

            {}
            <button
                onClick={handleLike}
                className={`like-button ${liked ? "liked" : ""}`}
            >
                {liked ? "Liked" : "Like"}
            </button>

            <Link to={`/blog/${id}`}>Show more</Link>
        </div>
    );
};

export default BlogCard;
