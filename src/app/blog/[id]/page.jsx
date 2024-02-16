import Layout from "@/app/mainlayout";
import SingleShowData from "../../../components/blog/SingleShowData.jsx";
import SingleData from "../../../components/hooks/useGetSingleBlog.jsx";
import BlogErrors from "../../../components/blog/BlogErrors.jsx";


const SingleBlog = async ({params}) => {  
const {id} = params; 
const seeData = await SingleData(id);
console.log(seeData.result[0])
  return (
    <Layout>
     
      {

      }
 {
  seeData.length == 0 ? <BlogErrors></BlogErrors> : <SingleShowData seeData={seeData}></SingleShowData>
 }
 
     </Layout>
  );
};

export default SingleBlog;