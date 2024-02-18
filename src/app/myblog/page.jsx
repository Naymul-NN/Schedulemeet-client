import React from 'react';
import Layout from '../mainlayout';
import MyBlog from '@/components/blog/MyBlog';

const MyBlogs = () => {
    return (
            <Layout>
           <div className='bg-white text-black'>
            <MyBlog></MyBlog>
            </div>
        </Layout>
    );
};

export default MyBlogs;