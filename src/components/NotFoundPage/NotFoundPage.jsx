"use client"

import Image from "next/image";
import Link from "next/link";


const NotFoundPage = () => {
    return (
        <div className="xl:h-[800px] lg:h-[800px] md:h-[800px] h-[500px] w-full bg-white text-black">

    
    <div className="flex xl:flex-row lg:flex-row md:flex-col flex-col justify-center items-center h-full">


 <div>
 <Image
      src="https://i.ibb.co/FwWzgJD/fulcl.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
 </div> 
   <div>
    <div className="xl:text-left lg:text-left md:text-left text-center">
    <h2 className="text-[30px] font-bold">Oops!</h2>
         <p>The page you were looking for could not be found.</p>
    </div>
      <div className="my-6">
      <Link className="px-4 xl:mx-0 lg:mx-0 md:mx-0 mx-auto w-max block py-3 rounded-md bg-[#6D5CD8] text-white hover:bg-[#574AB1]" href="/">Back To Homepgae</Link>
      </div>
    </div>


     </div>

        </div>
    );
};

export default NotFoundPage;