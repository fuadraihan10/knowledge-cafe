import React, { useState, useEffect } from 'react';
import Blog from "../blog/blog.jsx";
import PropTypes from 'prop-types';

export default function Blogs({addBookmark,calculateReadingTime}) {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/blogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
        .catch(error => console.error('Error fetching blogs:', error));

    },[]);
  return (
    <div className="md:w-2/3">
        <h1 className="text-xl font-medium text-gray-800 mb-6">Articles ({blogs.length})</h1>
        <div className="space-y-6">
            {blogs.map(blog => (
                <Blog
                    key={blog.id}
                    blog={blog}
                    addBookmark={addBookmark}
                    calculateReadingTime={calculateReadingTime}
                />
            ))}
        </div>
    </div>
  )
}


Blogs.propTypes = {
    addBookmark: PropTypes.func.isRequired
}