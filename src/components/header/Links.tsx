'use client';
import Card from '@/common/Card';
import React from 'react';
import { baseURL, fetcher } from '@/configs/api';
import useSWR from 'swr';
import Link from 'next/link';
import Loading from '@/app/loading';

function Links() {
  const { data, isLoading } = useSWR(`${baseURL}/products/categories`, fetcher);
  return (
    <Card>
      <div className='flex items-center justify-center overflow-auto'>
        {isLoading ? (
          <Loading />
        ) : (
          data?.toSpliced(11)?.map((list: string, index: number) => (
            <div key={index}>
              <h6 className='px-5 py-3 border-b-2 border-primary-lighter text-sm hover:text-primary-main hover:border-primary-main'>
                <Link href='/'>{list}</Link>
              </h6>
            </div>
          ))
        )}
      </div>
    </Card>
  );
}

export default Links;
