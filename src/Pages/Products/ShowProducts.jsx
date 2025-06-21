import React, { Suspense, use } from 'react';
import Single from './single';


const ShowProducts = ({sampleProducts}) => {
    const data = use(sampleProducts);
    console.log(data);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-1 '>
           <Suspense fallback={<div className='text-center text-2xl font-bold'>Loading...</div>}>
            {
            data.map((product) => (
                <Single key={product.id} product={product}></Single>
            ))
           }
           </Suspense>
        </div>
    );
};

export default ShowProducts;