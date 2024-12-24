import info from '../assets/public/info.svg';
import profile from '../assets/public/avatar-image.png';
import message from '../assets/public/message.svg';
import notification from '../assets/public/Notification.svg';
import options from '../assets/public/options.svg';
import search from '../assets/public/Search.svg';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-6 bg-gray-50 w-full">
      <div className="relative w-1/2">
        <input
          type="text"
          placeholder="Search your course"
          className="w-full py-2 pl-10 pr-4 rounded-lg bg-white text-gray-500 placeholder-gray-400 focus:outline-none"
        />
        <img src={search} className="absolute left-3 top-2.5 text-gray-400"></img>
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-gray-500 hover:text-gray-700">
          <img src={info}></img>
        </button>
        <button className="relative text-gray-500 hover:text-gray-700">
          <img src={message}></img>
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <img src={options}></img>
        </button>
        <button className="relative text-gray-500 hover:text-gray-700">
          <img src={notification}></img>
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-2">
          <img
            src={profile}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-semibold text-gray-900">Adeline H. Dancy</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

