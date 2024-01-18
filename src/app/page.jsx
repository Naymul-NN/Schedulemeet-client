import Banner from '@/components/banner/Banner ';
import Container from '@/components/container/Container';
import React from 'react';

const page = () => {
  return (
    <Container>
      <div className='min-h-screen'>
        <Banner></Banner>
      </div>
    </Container>
  );
};

export default page;