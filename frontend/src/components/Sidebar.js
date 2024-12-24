import Logo from '../assets/public/logo.png';
import dashboard from '../assets/public/dashboard.svg';
import students from '../assets/public/students.svg';
import settings from '../assets/public/settings.svg';
import reports from '../assets/public/reports.svg';
import info from '../assets/public/info.svg';
import chapter from '../assets/public/chapter.svg';
import {Link} from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="h-screen w-60 bg-white p-6 shadow-md">
      <img src={Logo} alt="Logo" className="w-[98px] h-[42px]" />
      <ul className="space-y-6 mt-10">
        <li>
          <Link href="/" className="flex items-center text-gray-500 hover:text-gray-900">
            <img src={dashboard} className="mr-3"></img> 
            <span className="text-lg font-medium">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href="/students" className="flex items-center text-gray-900 font-bold bg-gray-100 px-2 py-2 rounded-md">
            <img src={students} className="mr-3"></img> 
            <span className="text-lg">Students</span>
          </Link>
        </li>
        <li>
          <Link href="/chapter" className="flex items-center text-gray-500 hover:text-gray-900">
            <img src={chapter} className="mr-3"></img> 
            <span className="text-lg font-medium">Chapter</span>
          </Link>
        </li>
        <li>
          <Link href="/help" className="flex items-center text-gray-500 hover:text-gray-900">
            <img  src={info} className="mr-3"></img> 
            <span className="text-lg font-medium">Help</span>
          </Link>
        </li>
        <li>
          <a href="/reports" className="flex items-center text-gray-500 hover:text-gray-900">
            <img src={reports} className="mr-3"></img> 
            <span className="text-lg font-medium">Reports</span>
          </a>
        </li>
        <li>
          <Link href="/settings" className="flex items-center text-gray-500 hover:text-gray-900">
            <img src={settings} className="mr-3"></img> 
            <span className="text-lg font-medium">Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

