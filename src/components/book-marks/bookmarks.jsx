import Bookmark from "../Bookmark/bookmark";

function Bookmarks({ bookmarks,readingtime }) {
  return (
    <div className="md:w-1/3 p-4 bg-gray-50 rounded-lg">
       <h1 className="text-lg font-medium text-gray-600 mb-2">Reading time: {readingtime} min</h1>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Bookmarks</h2>   
        <p className="text-sm text-gray-500 mb-4">Saved articles: {bookmarks.length}</p>
        <div className="space-y-3">
            {bookmarks.map((bookmark, index) => (
                <Bookmark key={index} bookmark={bookmark} />
            ))}
        </div>
    </div>
  )
}

export default Bookmarks;