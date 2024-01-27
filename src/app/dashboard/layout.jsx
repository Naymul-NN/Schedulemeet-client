import Link from "next/link";
import "../../app/dashboard/navbar.css"

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-[100%] mx-auto flex text-black border-r-[1px]">

      <div className="w-[20%] min-h-screen bg-[#fff] border-r-[1px] shadow-md">
        <header>
          <h1 className="py-3 text-center">Dashboard Header</h1>
        </header>
        <nav>
          <ul className="navbarsStyles px-2">
            <li><Link href="/dashboard">Activity</Link></li>
            <li className="py-3"><Link href="/dashboard/profile">Profile</Link></li>
            <li><Link href="/dashboard/setupinterview">Setup Interview</Link></li>
            <li className="py-3"><Link href="/dashboard/setupevents">Setup Events</Link></li>
            <li className="pb-3"><Link href="/dashboard/history">History</Link></li>
            <hr className="mr-10"/>
            <li className="pt-4"><Link href="/">Home</Link></li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 bg-[#FAFAFA]">
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
