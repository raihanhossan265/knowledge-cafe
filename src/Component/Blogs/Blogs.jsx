import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarks, handleReadingTime}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])

    return (
        <div className="w-2/3">
            <div>
                {
                    blogs.map(blog => <Blog key={blog.cover_img}
                         handleBookmarks={handleBookmarks}
                         handleReadingTime={handleReadingTime} 
                         blog = {blog}></Blog>)
                }
            </div>
            <div>

            </div>
        </div>
    );
};

export default Blogs;