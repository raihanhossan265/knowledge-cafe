import Profile from '../../../images/profile.png'
const Header = () => {
    return (
        <div className='flex items-center justify-between max-w-6xl m-auto my-7'>
            <h1 className="text-5xl font-bold">Knowledge Caffe</h1>
            <img src={Profile} alt="" />
        </div>
    );
};

export default Header;