import Link from "next/link";
import "../dashboard/navbar.css"

import { LuActivitySquare } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { MdGroups } from "react-icons/md";
import { MdManageHistory } from "react-icons/md";
import { MdOutlineGroup } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";


const DashboardLayout = ({ children }) => {
  return (
    <div className="w-[100%] mx-auto flex gap-1 text-black bg-white">

      <div className="w-[20%] h-[100vh] shadow-md shadow-[#8a8a8a]">

        <div className="flex items-center gap-1 justify-center bg-[#ededed] text-black">
          <RxDashboard></RxDashboard><h1 className="py-3 text-center">Dashboard</h1>
        </div>

  
        <nav>
          <ul className="navbarsStyles px-4 py-2">
            <li><Link  href="/dashboard"><div className="flex items-center gap-2"><LuActivitySquare></LuActivitySquare> <h2>Activity</h2></div></Link></li>
            <li className="py-3"><Link href="/dashboard/profile"><div className="flex items-center gap-2"><CgProfile></CgProfile> <h2>Profile</h2></div></Link></li>
            <li><Link href="/dashboard/setupinterview"><div className="flex items-center gap-2">
              <MdGroups className="text-[20px]"></MdGroups><h2>Setup Interview</h2></div></Link></li>
            <li className="py-3"><Link href="/dashboard/setupevents"><div className="flex items-center gap-2"><MdOutlineGroup></MdOutlineGroup> <h2>Setup Events</h2></div></Link></li>
            <li className="pb-3"><Link href="/dashboard/history"><div className="flex items-center gap-2"><MdManageHistory></MdManageHistory> <h2>History</h2></div></Link></li>
            <hr className="mr-10 border-[#cddff3]"/>
            <li className="pt-4"><Link href="/"><div className="flex items-center gap-2"><IoHome></IoHome><h2>Home</h2></div></Link></li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 bg-[#fafafa] h-full w-full">

          {children}

      </div>
    </div>
  );
};

export default DashboardLayout;
