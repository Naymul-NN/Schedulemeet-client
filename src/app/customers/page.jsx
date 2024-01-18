import CustomersPage from '@/components/customers/CustomersPage';
import React from 'react';

export const metadata = {
    title: "Customer Stories",
    description: "Best customer service",
  };

const customer = () => {
    
    return (
        <div>
            <CustomersPage></CustomersPage>
        </div>
    );
};

export default customer;