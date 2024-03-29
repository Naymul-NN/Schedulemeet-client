import Image from "next/image";
import "./BlogCard.css"
import Link from "next/link";
import { MdAccessTime } from "react-icons/md";
const BlogCard = ({ blog }) => {

  const { blogUserName, blogTitle, blogMessage, blogUserEmail, blogUserImage, blogImage, blogCategorys, blogTime, _id } = blog;



  return (
    <div className="flex flex-col bg-gradient-to-r from-[#584c97] to-[#5555d8]  justify-between rounded-md p-2">

      <div>


        <div>
          <Image className="stylersAnima w-[100%] h-[250px] rounded-md" src={blogImage} width={100} height={100} alt="userImage"></Image>
        </div>

        <div className="flex justify-between items-center">


          <div className="flex gap-1 items-center my-2">
            <div>
              <Image className="w-[40px] h-[40px] rounded-full" src={blogUserImage} width={100} height={100} alt="userImage"></Image>
            </div>

            <div>
              <h2 className="font-bold text-white">{blogUserName}</h2>
              <h2 className="text-white">{blogCategorys ? blogCategorys : ""}</h2>
            </div>

          </div>


          <div className="flex gap-1 items-center">
            <h2 className=" text-white">{blogTime.seconds}s</h2>
            <MdAccessTime className="text-[20px]"></MdAccessTime>
          </div>

        </div>


        <div className="my-2">
          <h2 className="font-semibold text-center text-white">{blogTitle}</h2>
          <p className="my-2 text-black">{blogMessage.slice(0, 100)}...</p>
        </div>

      </div>

      <div>

        <Link href={`/blog/${_id}`}><button className="px-2 py-2 hover:bg-[#deac50] bg-[#ffc43a] text-black font-medium  rounded-md">Read more</button></Link>
      </div>



    </div>
  );
};

export default BlogCard;
