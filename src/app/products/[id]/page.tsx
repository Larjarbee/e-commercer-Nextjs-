'use client';
import React from 'react';
import { baseURL, fetcher } from '@/configs/api';
import useSWR from 'swr';
import Card from '@/common/Card';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Rating } from '@mui/material';

function DetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const { data, isLoading } = useSWR(`${baseURL}/products/${id}`, fetcher);

  return (
    <Card>
      <div
        className=' h-96 w-auto'
        style={{
          backgroundImage: `url( ${data?.thumbnail})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className='h-96 rounded-lg bg-gradient-to-t from-black ...' />
      </div>

      <div className='flex px-5 gap-5 flex-col-reverse md:flex-row md:px-10'>
        <div className='w-1/2'>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination]}
            className='mySwiper'
          >
            {data?.images?.map((image: string, index: number) => (
              <SwiperSlide key={index}>
                <Image src={image} alt='img' width={150} height={50} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <div className='p-5 space-y-5'>
            <div>
              <h6 className='text-sm opacity-50'>{data?.brand}</h6>
              <h2 className=' text-2xl'>{data?.title}</h2>
            </div>

            <div className='space-y-2'>
              <h5>Description</h5>
              <h6>{data?.description}</h6>
            </div>

            <div className='flex justify-between items-center mt-3'>
              <div className='flex gap-1'>
                <h6>${data?.price}</h6>
                <h6 className=' line-through text-red-500'>
                  ${data?.discountPercentage}% off
                </h6>
              </div>
              {data?.rating && (
                <Rating
                  name='rate'
                  value={data?.rating}
                  max={5}
                  precision={0.5}
                  readOnly
                />
              )}
            </div>

            <div className='flex gap-5'>
              <input
                type='number'
                min='1'
                max='5'
                step='1'
                defaultValue='1'
                className='px-3'
              />
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default DetailPage;
