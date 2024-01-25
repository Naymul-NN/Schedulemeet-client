import Navbar from "@/components/navbar/Navbar";
import "../components/navbar/Navbar.css"
import Footer from "@/components/footer/Footer";

export default function Layout({ children }) {
    return (
      <div>
         <div className='navBarStyle static top-0 w-full z-50'>
            <div className='xl:w-[70%] w-[90%] mx-auto'>
              <Navbar></Navbar>
            </div>
          </div>
          {children}
          <div className='bg-[#2B3440]'>
            <div className='w-[70%] mx-auto'>
              <Footer></Footer>
            </div>
          </div>
      </div>
    )
  }