
import Image from "next/image";



const SingleShowData = (data) => {


const {seeData} = data;
console.log(seeData.result)

    return (
        <div className="text-black bg-white min-h-screen py-10">

  <div className="flex justify-center items-center h-full">
<div className="w-[50%] bg-white rounded-md shadow-md p-4 my-4 border-[1px] space-y-4">
    <div className="flex items-center gap-2">
<Image className="w-[50px]  h-[50px] rounded-full" src={seeData.result?.blogUserImage} width={100} height={100} alt="blog Image"></Image> 
<div>
<h2>{seeData.result?.blogUserName}</h2>
<h2 className="text-[#676767]">{seeData.result?.blogTime?.dates}-{seeData.result?.blogTime.months}-2024</h2>
</div>
 
    </div>



<h2 className="font-bold">{seeData.result?.blogTitle}</h2> 
<Image className="block w-full h-[500px]" src={seeData.result?.blogImage} width={500} height={500} alt="blog Image"></Image> 

<p className="p-4 whitespace-pre-wrap">{seeData.result?.blogMessage}</p>
</div>
</div>  


        </div>
    );
};

export default SingleShowData;