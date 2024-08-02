import { useState } from "react"
import Blogs from "./Component/Blogs/Blogs"
import Bookmarks from "./Component/Bookmarks/Bookmarks"
import Header from "./Component/Header/Header"

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleBookmarks = (blog) => {
    setBookmarks([...bookmarks, blog])
  }
  const handleReadingTime = (id, reading_time) => {
    setReadingTime(readingTime + reading_time)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
  }

  return (
    <>
      <Header></Header>
      <div className="max-w-6xl m-auto flex gap-20">
        <Blogs handleBookmarks={handleBookmarks}
        handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks
         bookmarks={bookmarks} 
         readingTime={readingTime}
         ></Bookmarks>
      </div>
     
    </>
  )
}

export default App
