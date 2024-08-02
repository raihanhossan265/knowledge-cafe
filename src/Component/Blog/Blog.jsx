import { FaBookmark } from "react-icons/fa";
const Blog = ({blog, handleBookmarks, handleReadingTime}) => {
    const {id,title, author, cover_img, author_img, reading_time, hashtag} = blog
    return (
        <div className="space-y-5 my-20">
            <img src={cover_img} alt="" />
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img className="w-20" src={author_img} alt="" />
                    <div>
                        <h2 className="text-xl font-bold">{author}</h2>
                        <p>Mar 14(4 Days Ago)</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <h4>{reading_time}min read</h4>
                    <button onClick={()=> handleBookmarks(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <h5>{hashtag}</h5>
            <button onClick={() => handleReadingTime(id, reading_time)} className="text-purple-800 font-bold underline text-xl">Mark as read</button>
        </div>
    );
};

export default Blog;