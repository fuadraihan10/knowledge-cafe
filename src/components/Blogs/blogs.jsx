import React, { useState, useEffect } from 'react';
import Blog from "../blog/blog.jsx";

export default function Blogs({addBookmark}) {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/blogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
        .catch(error => console.error('Error fetching blogs:', error));

    },[]);
  return (
    
    <div className="md:w-2/3">
        <h1 className="text-4xl font-bold">Blogs: {blogs.length}</h1>
        {
            blogs.map(blog => <Blog
                 key={blog.id}
                  blog={blog}
                  addBookmark={addBookmark}>
                  </Blog>)
        }
    </div>
  )
}


