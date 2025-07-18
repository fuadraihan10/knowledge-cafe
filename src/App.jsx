import './App.css'
import Header from './components/header/header.jsx'
import Blogs from './components/Blogs/blogs.jsx'
import Bookmarks from './components/book-marks/bookmarks.jsx'

function App() {

  return (
    <>
      <Header></Header>
      <div className="md:flex">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
      

    </>
  )
}

export default App
