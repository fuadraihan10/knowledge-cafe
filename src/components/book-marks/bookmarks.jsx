import Bookmark from "../Bookmark/bookmark";

function Bookmarks({ bookmarks,readingtime }) {
  return (
    <div className="md:w-1/3">
       <h1>Read time: {readingtime}</h1>
        <h2>Bookmarks </h2>   
        <p className="text-2xl">Bookmarked blogs:{bookmarks.length}</p>
        {
            bookmarks.map((bookmark, index) => (
                <Bookmark key={index} bookmark={bookmark} />
            ))
        }
    </div>
  )
}

export default Bookmarks;