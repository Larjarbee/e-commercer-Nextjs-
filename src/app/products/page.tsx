import Card from '@/common/Card';
import Products from '@/components/products/Products';
import React from 'react';

function productPage() {
  return (
    <Card>
      <h1 className='text-center uppercase p-10 text-lg font-bold'>Products</h1>
      <Products />
    </Card>
  );
}

export default productPage;
