import Link from "next/link";
import "../../app/dashboard/navbar.css"
import { AiOutlineProfile } from "react-icons/ai";
import { FiActivity } from "react-icons/fi";
import { GrHistory, GrSchedulePlay } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";


const DashboardLayout = ({ children }) => {

  return (

    <div className="w-[100%] mx-auto flex gap-1 bg-white ">

      <div className="w-[20%]  bg-[#4a69bd] border-r-[1px] shadow-md text-white">
        <header>
          <h1 className="py-3 text-center ">Dashboard Header</h1>
        </header>
        <nav>
          <ul className="navbarsStyles px-4">
            <li><Link href="/dashboard" className="hover:bg-red-500"> <FiActivity className="inline-flex mb-1 text-xl" /> Activity</Link></li>
            <li className="py-3 "><Link href="/dashboard/profile" > <AiOutlineProfile  className="inline-flex mb-1 text-xl "/> Profile</Link></li>
            <li><Link href="/dashboard/setupinterview"> <GrSchedulePlay className="inline-flex mb-1 text-xl" /> Setup Interview</Link></li>
            <li className="py-3"><Link href="/dashboard/setupevents"> <GrSchedulePlay className="inline-flex mb-1 text-xl" /> Setup Events</Link></li>
            <li className="pb-3"><Link href="/dashboard/history"> <GrHistory className="inline-flex mb-1 text-xl" /> History</Link></li>
            <hr className="mr-10"/>
            <li className="pt-4"><Link href="/"> <IoHomeOutline className="inline-flex mb-1 text-xl" />  Home</Link></li>
          
          
          
          </ul>
        </nav>
      </div>

      <div className="flex-1 h-[100vh] w-full p-4 text-black">

          {children}

      </div>
    </div>
  );
};

export default DashboardLayout;
