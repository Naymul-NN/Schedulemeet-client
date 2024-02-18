"use client"
import React, { useContext } from 'react';
import { AuthContext } from '../auth/Authprovider';
import useAxiospublic from '../hooks/useAxious';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

const MyBlog = () => {
    const {user} = useContext(AuthContext);
   
    const axiosPublic = useAxiospublic();

    const { isFetching, data,  } = useQuery({
        queryKey: [user?.email, 'myblog'],
        queryFn: () =>
            axiosPublic.get(`/api/v1/blogs/getblogbyEmail/${user?.email}`).then((res) => res.data),
    });

    if (isFetching) {
        return <p>Loading...</p>;
    }

    if (!data.result || data.result.length === 0) {
        return <p>No blogs found for the current user.</p>;
    }
    //  console.log(data.result)
    return (
        <div>
            <h1>{data.result.blogMessage}</h1>
            {
                data.result?.map ((item) => 
                ( <div key={item._id} className="flex justify-center items-center h-full">
                <div className="w-[50%] bg-white rounded-md shadow-md p-4 my-4 border-[1px] space-y-4">
                    <div className="flex items-center gap-2">
                        <Image className="w-[50px]  h-[50px] rounded-full" src={item?.blogUserImage} width={100} height={100} alt="blog Image"></Image>
                        <div>
                            <h2>{item?.blogUserName}</h2>
                            <h2 className="text-[#676767]">{item?.blogTime?.dates}-{item?.blogTime.months}-2024</h2>
                        </div>

                    </div>
                    <h2 className="font-bold">{item?.blogTitle}</h2>
                    <Image className="block w-full h-[500px]" src={item?.blogImage} width={500} height={500} alt="blog Image"></Image>
                    <p className="p-4 whitespace-pre-wrap">{item?.blogMessage}</p>
                </div>
            </div>

                ))}
           
        </div>
    );
};

export default MyBlog;