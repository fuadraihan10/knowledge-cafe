import './App.css'
import Header from './components/header/header.jsx'
import Blogs from './components/Blogs/blogs.jsx'
import Bookmarks from './components/book-marks/bookmarks.jsx'
import React, { useState } from 'react';

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingtime, setReadingtime] = useState(0);

  const calculateReadingTime = (id,blog) => {
    setReadingtime(prev => prev + blog.readingtime);
    console.log(readingtime);
    const remainingbookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingbookmark);
  };

  const addBookmark = (blog) => {
    setBookmarks([...bookmarks, blog]);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs addBookmark={addBookmark} calculateReadingTime = {calculateReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingtime={readingtime}></Bookmarks>
      </div>

      

    </>
  )
}

export default App
