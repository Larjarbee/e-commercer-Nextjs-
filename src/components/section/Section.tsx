'use client';
import React from 'react';
import EastIcon from '@mui/icons-material/East';
import Card from '@/common/Card';
import { baseURL, fetcher } from '@/configs/api';
import useSWR from 'swr';
import { Products } from '@/types/types';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { InputBase, Rating } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { RouteEnum } from '@/common/Constant';
import Loading from '@/app/loading';

function Section() {
  const { data, isLoading } = useSWR(`${baseURL}/products`, fetcher);
  return (
    <Card>
      <div className='flex justify-between'>
        <h5>Discover unique hand-picked items</h5>
        <h6 className='flex items-center text-primary-main hover:cursor-pointer hover:underline'>
          <Link href={RouteEnum.PRODUCTS}>
            View all{' '}
            <span className='pl-3'>
              <EastIcon />
            </span>
          </Link>
        </h6>
      </div>

      <div className='grid grid-cols-2 gap-5 pb-10 content-center md:grid-cols-4'>
        {isLoading ? (
          <Loading />
        ) : (
          data?.products
            ?.toReversed()
            ?.toSpliced(20)
            ?.map((product: Products) => (
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
            ))
        )}
      </div>

      <div className='py-14 px-5 space-y-5 bg-blue-500 rounded-lg text-white md:px-20'>
        <div className='w-full md:w-1/2'>
          <h6>Yes!</h6>
          <h6>
            Send me exclusive offers, unique gift ideas, and personalized tips
            for shopping and selling on Commerce.
          </h6>
        </div>

        <div className='flex items-center mt-3 justify-center mx-auto bg-slate-50 w-full px-2 py-1 rounded-full md:w-2/3'>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            size='small'
            placeholder='Drop your Email'
            inputProps={{ 'aria-label': 'Drop your Email' }}
          />

          <button className='px-3 md:px-10'>
            Subscribe{' '}
            <span className='pl-3'>
              <EastIcon />
            </span>
          </button>
        </div>
        <h6 className='text-center text-sm underline font-extralight'>
          First order only. You’re ready?
        </h6>
      </div>
    </Card>
  );
}

export default Section;
