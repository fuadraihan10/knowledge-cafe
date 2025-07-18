import './App.css'
import Header from './components/header/header.jsx'
import Blogs from './components/Blogs/blogs.jsx'
import Bookmarks from './components/book-marks/bookmarks.jsx'
import React, { useState } from 'react';

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (blog) => {
    setBookmarks([...bookmarks, blog]);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs addBookmark={addBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
      

    </>
  )
}

export default App
