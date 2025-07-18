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
      <Header />
      <div className="flex flex-col md:flex-row max-w-5xl mx-auto mt-8 gap-6 p-4 bg-white rounded-lg border border-gray-200">
        <Blogs addBookmark={addBookmark} calculateReadingTime={calculateReadingTime} />
        <Bookmarks bookmarks={bookmarks} readingtime={readingtime} />
      </div>
    </>
  )
}

export default App
