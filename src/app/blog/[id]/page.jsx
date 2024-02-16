import Layout from "@/app/mainlayout";
import SingleShowData from "../../../components/blog/SingleShowData.jsx";
import SingleData from "../../../components/hooks/useGetSingleBlog.jsx";


const SingleBlog = async ({params}) => {  
const id = params; 

const seeData = await SingleData(id.id);

  return (
    <Layout>
     <SingleShowData seeData={seeData}></SingleShowData>
     </Layout>
  );
};

export default SingleBlog;