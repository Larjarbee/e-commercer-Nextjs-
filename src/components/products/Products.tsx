'use client';
import React from 'react';
import { baseURL, fetcher } from '@/configs/api';
import useSWR from 'swr';
import { Products } from '@/types/types';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Rating } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Loading from '@/app/loading';

function Products() {
  const { data, isLoading } = useSWR(`${baseURL}/products`, fetcher);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='grid grid-cols-2 gap-5 content-center md:grid-cols-4'>
          {data?.products?.map((product: Products) => (
            <div
              key={product?.id}
              className=' rounded-lg border overflow-hidden'
            >
              <Link href={`/products/${product?.id}`}>
                <div className='w-full h-40 relative'>
                  <Image
                    src={product?.thumbnail}
                    alt='img'
                    fill={true}
                    className='mx-auto object-cover'
                  />
                  <div className='absolute py-1 p-2 rounded-full bg-white top-3 right-3 hover:bg-primary-main hover:text-white'>
                    <FavoriteBorderIcon fontSize='small' />
                  </div>
                  <div className='absolute py-1 p-2 rounded-lg top-3 left-3 bg-primary-main text-white'>
                    <h6 className=' text-xs'>
                      -{product?.discountPercentage}%
                    </h6>
                  </div>
                </div>
                <div className='p-3'>
                  <h6 className='text-sm opacity-50'>{product?.brand}</h6>
                  <h5>{product?.title}</h5>

                  <div className='flex justify-between items-center mt-3 md:hidden'>
                    <h6>${product?.price}</h6>
                    <div className='flex items-center gap-1'>
                      <Rating name='rate' value={1} max={1} readOnly />
                      <h6>{product?.rating}</h6>
                    </div>
                  </div>
                  <div className='hidden justify-between items-center mt-3 md:flex'>
                    <h6>${product?.price}</h6>
                    <Rating
                      name='rate'
                      value={product?.rating}
                      max={5}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Products;
