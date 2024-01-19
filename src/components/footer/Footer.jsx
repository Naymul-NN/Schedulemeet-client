import React from 'react';
import navBarStyle from "../../components/navbar/Navbar.css";

const Footer = () => {
    return (

      <div>
<div className='py-4 '>

<h2 className='text-center pt-4 py-3'><span className='font-bold'><span className='font-bold text-[20px]'>NextApp</span></span>- Best Service</h2>
<div className='border-b-[1px] w-[10%] border-[#585858] mx-auto'></div>
 <footer className="footer grid grid-rows-2 p-10 bg-neutral justify-evenly items-baseline text-neutral-content">
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <nav>
    <header className="footer-title">Social</header> 
    <a className="link link-hover">Twitter</a>
    <a className="link link-hover">Instagram</a>
    <a className="link link-hover">Facebook</a>
    <a className="link link-hover">Github</a>
  </nav> 
  <nav>
    <header className="footer-title">Explore</header> 
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Enterprise</a>
    <a className="link link-hover">Security</a>
    <a className="link link-hover">Pricing</a>
  </nav> 
  <nav>
    <header className="footer-title">Apps</header> 
    <a className="link link-hover">Mac</a>
    <a className="link link-hover">Windows</a>
    <a className="link link-hover">iPhone</a>
    <a className="link link-hover">Android</a>
  </nav>
</footer>





        </div></div>
    );
};

export default Footer;