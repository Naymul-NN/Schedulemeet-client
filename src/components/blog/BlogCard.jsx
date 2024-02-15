import Image from "next/image";
import "./BlogCard.css"
import Link from "next/link";
const BlogCard = ({ blog }) => {

const {blogUserName, blogTitle,  blogMessage, blogUserEmail, blogUserImage, blogImage, blogCategorys, blogTime, _id} = blog;


console.log(_id)

  return (
<div>


  <div>
  <Image className="stylersAnima w-[100%] h-[250px] rounded-md" src={blogImage} width={100} height={100} alt="userImage"></Image>
  </div>
<div className="flex gap-1 items-center my-2">

<div>
  <Image className="w-[40px] h-[40px] rounded-full" src={blogUserImage} width={100} height={100} alt="userImage"></Image>
</div>

<div>
<h2>{blogUserName}</h2>
</div>
   
</div>

 <div className="my-2">
 <h2 className="font-bold">{blogTitle}</h2>
 </div>



<div>
  <p>{blogMessage.slice(0, 100)}...</p>
  <Link href={`/blog/${_id}`}><button className="px-2 py-2 hover:bg-[#deac50] bg-[#ffc43a] font-medium border-[1px] rounded-md">Read more</button></Link>
</div>



</div>
  );
};

export default BlogCard;
