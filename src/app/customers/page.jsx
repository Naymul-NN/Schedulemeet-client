
import CustomerPages from '@/components/customers/CustomersPage';
import React from 'react';
import Layout from '../mainlayout';

export const metadata = {
  title: "Customer Stories",
  description: "Best customer service",
};

const CustomerPage = () => {

  return (
    <Layout>
      <CustomerPages />
    </Layout>
  )


}

export default CustomerPage;