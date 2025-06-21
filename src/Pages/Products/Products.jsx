import { NavLink, Outlet } from 'react-router';
import ShowProducts from './ShowProducts';
import { Suspense } from 'react';

const Products = () => {

    const sampleProducts = fetch('http://localhost:3000/samples').then(res => res.json())

  return (
    <div className='min-h-screen'>
        <h2 className='text-3xl text-center my-6 p-4 border rounded-xl w-1/3 mx-auto bg-gray-400'>Available Products</h2>
        <Suspense fallback={<div>Loading...</div>}>
            {
               <ShowProducts sampleProducts={sampleProducts}></ShowProducts>
            }
        </Suspense>
      
    </div>
  );
};

export default Products;
