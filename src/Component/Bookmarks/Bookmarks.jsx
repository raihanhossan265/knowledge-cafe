import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    console.log(readingTime)
    return (
        <div className="w-1/3">
           <div>
                <h4 className="bg-slate-300 p-5 text-2xl font-bold mb-5 rounded-lg">Spent time on read : {readingTime} min</h4>
           </div>
           <div>
                <h3 className="text-center font-bold text-2xl">BookMarks : {bookmarks.length}</h3>
                {
                    bookmarks.map((bookmark,idx) => <Bookmark bookmark={bookmark} key={idx}></Bookmark>)
                }
           </div>
        </div>
    );
};

export default Bookmarks;