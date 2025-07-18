import PropTypes from 'prop-types';
import { FaBeer } from 'react-icons/fa';
import { FaRegBookmark } from "react-icons/fa6";
export default function Blog({blog, addBookmark, calculateReadingTime}) {

    const {title,coverimage,readingtime,author,authorpic,posteddate,hashtags} = blog



    return (
        <div className="mb-12 p-4 bg-white rounded-lg border border-gray-100">
            <img src={blog.coverimage} alt={coverimage} className="w-full h-64 object-cover rounded-lg mb-6"/>
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                    <img className="w-10 h-10 rounded-full" src={authorpic} alt="" />
                    <div>
                        <h3 className="text-lg font-medium text-gray-800">{author}</h3>
                        <p className="text-sm text-gray-500">{posteddate}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">{readingtime} min read</span>
                    <button onClick={() => addBookmark(blog)} className="text-gray-600 hover:text-blue-500 transition-colors">
                        <FaRegBookmark className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h2>
            <p className="mb-4">
                {hashtags.map((hashtag, index) => (
                    <span key={index} className="text-sm text-blue-500 mr-2 hover:text-blue-600">{hashtag} </span>
                ))}
            </p>
            <button 
                onClick={() => calculateReadingTime(blog.id,blog)}
                className="text-sm font-medium text-blue-500 hover:text-blue-600 underline transition-colors">
                Mark as read
            </button>
        </div>
    )
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    addBookmark: PropTypes.func.isRequired
}