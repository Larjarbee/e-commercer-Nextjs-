'use client';
import Image from 'next/image';
import React from 'react';
import img from '/public/images/img.png';
import img1 from '/public/images/img1.png';
import img2 from '/public/images/img2.png';
import img3 from '/public/images/unsplash.png';
import img4 from '/public/images/unsplash1.png';
import img5 from '/public/images/unsplash2.png';
import Card from '@/common/Card';
import { baseURL, fetcher } from '@/configs/api';
import useSWR from 'swr';
import { Products } from '@/types/types';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Rating } from '@mui/material';
import Link from 'next/link';
import Loading from '@/app/loading';

function Hero() {
  const { data, isLoading } = useSWR(`${baseURL}/products`, fetcher);

  return (
    <Card>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
        <div className='relative'>
          <Image
            src={img2}
            alt='img'
            sizes='100vw'
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
          <h6 className='absolute left-3 bottom-5 text-white'>
            Clothing & Shoes
          </h6>
        </div>
        <div className='relative'>
          <Image
            src={img1}
            alt='img'
            sizes='100vw'
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
          <h6 className='absolute left-3 bottom-5 text-white'>Home & Living</h6>
        </div>
        <div className='relative'>
          <Image
            src={img}
            alt='img'
            sizes='100vw'
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
          <h6 className='absolute left-3 bottom-5 text-white'>
            Art & Collectibles
          </h6>
        </div>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <div className='grid grid-cols-2 gap-5 content-center md:grid-cols-4'>
          {data?.products?.toSpliced(8)?.map((product: Products) => (
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

      <div className='flex justify-between gap-10 py-10 flex-col md:flex-row'>
        <div className='flex gap-5 justify-between p-5 bg-slate-200 rounded-lg items-center'>
          <div className='space-y-3'>
            <h5>A community doing good</h5>
            <h6 className='text-sm'>
              Commerce is a global online marketplace, where people.
            </h6>
          </div>
          <div>
            <Image src={img3} width={200} height={200} alt='img' />
          </div>
        </div>

        <div className='flex gap-5 justify-between p-5 bg-slate-200 rounded-lg items-center'>
          <div className='space-y-3'>
            <h5>Support independent creators</h5>
            <h6 className='text-sm'>
              Just millions of people selling the things they love.
            </h6>
          </div>
          <div>
            <Image src={img4} width={200} height={200} alt='img' />
          </div>
        </div>

        <div className='flex gap-5 justify-between p-5 bg-slate-200 rounded-lg items-center'>
          <div className='space-y-3'>
            <h5>Peace of mind</h5>
            <h6 className='text-sm'>
              Privacy is the highest priority of our dedicated team.
            </h6>
          </div>
          <div>
            <Image src={img5} width={200} height={200} alt='img' />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Hero;
