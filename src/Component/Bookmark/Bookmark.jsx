const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    console.log(bookmark)
    return (
        <div className="bg-slate-300 p-5 text-2xl font-bold mb-5 rounded-xl">
            <h2>{title}</h2>
        </div>
    );
};

export default Bookmark;