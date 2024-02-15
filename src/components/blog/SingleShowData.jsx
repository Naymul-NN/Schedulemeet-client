import Image from "next/image";


const SingleShowData = (data) => {


const {seeData} = data;
const [seeDatas] = seeData
console.log(seeDatas)

    return (
        <div className="text-black bg-white">

<div className="flex justify-center min-h-screen">
<div className="w-[50%] bg-white rounded-md shadow-md p-4 my-4 border-[1px] space-y-4">
    <div className="flex items-center gap-1">
<Image className="w-[50px]  h-[50px] rounded-full" src={seeDatas?.blogUserImage} width={100} height={100} alt="blog Image"></Image> 
<div>
<h2>{seeDatas?.blogUserName}</h2>
<h2>{seeDatas?.blogTime?.dates}/{seeDatas?.blogTime.months}/2024</h2>
</div>
 
    </div>



<h2 className="font-bold">{seeDatas?.blogTitle}</h2> 
<Image className="block w-full h-[450px]" src={seeDatas?.blogImage} width={500} height={500} alt="blog Image"></Image> 

<p className="p-4">{seeDatas?.blogMessage}</p>
</div>




</div>


        </div>
    );
};

export default SingleShowData;