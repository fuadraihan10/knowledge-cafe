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
    
    <>
        
    </>
  )
}


