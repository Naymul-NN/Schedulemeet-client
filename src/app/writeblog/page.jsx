import WriteBlog from '@/components/blog/WriteBlog';
import React from 'react';
import Layout from '../mainlayout';

const writeBlog = () => {
    return (
      <Layout>
       <div className='text-center'>
          <WriteBlog></WriteBlog>
        </div>
        </Layout> 
    );
};

export default writeBlog;