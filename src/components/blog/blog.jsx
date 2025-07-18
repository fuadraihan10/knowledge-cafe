import PropTypes from 'prop-types';
import { FaBeer } from 'react-icons/fa';
import { FaRegBookmark } from "react-icons/fa6";
export default function Blog({blog, addBookmark, calculateReadingTime}) {

    const {title,coverimage,readingtime,author,authorpic,posteddate,hashtags} = blog



    return (
        <div className="mb-20">
            <img src={blog.coverimage} alt={coverimage} className='w-full mb-8'/>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <img className="w-30" src={authorpic} alt="" />
                    <div>
                        <h3 className="text-3xl semi-bold">{author}</h3>
                        <p className="text-">{posteddate}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span>{readingtime} min</span>
                    <button onClick={() => addBookmark(blog)}><FaRegBookmark /></button>

                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, index) => (
                        <span key={index} className="text-blue-500">{hashtag} </span>
                    ))
                }
            </p>
            <button onClick={ () => (
                calculateReadingTime(blog.id,blog)
            )}>mark as read</button>
        </div>
    )
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    addBookmark: PropTypes.func.isRequired
}