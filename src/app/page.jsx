
import Container from '@/components/container/Container';
import Homepage from '@/pages/HomePage/home';
import React from 'react';

const page = () => {
  return (
    <Container>
      <div className='min-h-screen'>
        <Homepage></Homepage>
      </div>

    </Container>
  );
};

export default page;