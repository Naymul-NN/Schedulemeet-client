// import useAxiospublic from "./useAxious";


// import { useQuery } from "@tanstack/react-query";
// import useAxiospublic from "./useAxious";


// const useGetSingleBlog = (_id) => {
// const useAxiospublics = useAxiospublic();
//     const { isPending, data: singleData, refetch} = useQuery({
//         queryKey: [id],
//         queryFn: async () => {
//             const response = await useAxiospublics.get(`/api/v1/blogs/getblog/${_id}`);
//             console.log(response.data)
//             // return response.data;
//           },

//       })
    

//     return singleData
// };

// export default useGetSingleBlog;



const SingleData = async(_id) => {
    const result = await fetch(
        `${process.env.NEXT_DB_URL}/api/v1/blogs/getblog/${_id}`
    );
return result.json();
};

export default SingleData;