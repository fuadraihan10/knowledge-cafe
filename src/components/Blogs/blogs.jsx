import { useEffect } from "react";
import { useState } from "react";

export default function Blogs() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
        .catch(error => console.error('Error fetching blogs:', error));

    },[]);
  return (
    
    <div className="md:w-2/3">
        <h1 className="text-4xl font-bold">Blogs: {blogs.length}</h1>
    </div>
  )
}


