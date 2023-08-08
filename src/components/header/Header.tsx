'use client';

import { Badge, FormControl, InputLabel, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { baseURL, fetcher } from '@/configs/api';
import useSWR from 'swr';
import Link from 'next/link';
import Card from '@/common/Card';
import Loading from '@/app/loading';

const Header = () => {
  const [category, setCategory] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const { data, isLoading } = useSWR(`${baseURL}/products/categories`, fetcher);

  return (
    <Card>
      <header className='flex py-2 justify-between items-center'>
        <div>
          <Link href='/'>
            <h1 className=' text-lg font-bold'>E-Commerce</h1>
          </Link>
        </div>
        <div className='w-1/2 hidden md:block'>
          <div className='flex items-center bg-slate-50 w-full px-4 py-1 rounded-full'>
            <FormControl className='w-40' size='small'>
              <InputLabel id='demo-simple-select-label'>
                <h6>All categories</h6>
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={category}
                size='small'
                label='All categories'
                onChange={handleChange}
                className='rounded-full bg-slate-200 font-light'
              >
                {isLoading ? (
                  <Loading />
                ) : (
                  data?.map((list: string, index: number) => (
                    <MenuItem value={list} key={index}>
                      <h6>
                        <Link href='/'>{list}</Link>
                      </h6>
                    </MenuItem>
                  ))
                )}
              </Select>
            </FormControl>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              size='small'
              placeholder='Search anything'
              inputProps={{ 'aria-label': 'Search anything' }}
            />
            <IconButton
              type='button'
              size='small'
              sx={{ p: '10px' }}
              aria-label='search'
            >
              <SearchIcon />
            </IconButton>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <IconButton
            type='button'
            size='small'
            sx={{ p: '10px' }}
            aria-label='search'
            className='block md:hidden'
          >
            <SearchIcon />
          </IconButton>
          <button>Help</button>
          <div className='flex gap-2 items-center'>
            <AccountCircleOutlinedIcon color='action' />
            <h6 className='hidden md:block'>Account</h6>
          </div>
          <div className='flex gap-2 items-center'>
            <Badge badgeContent={1} color='primary'>
              <ShoppingBagOutlinedIcon color='action' />
            </Badge>
            <h6 className='hidden md:block'>Shopping</h6>
          </div>
        </div>
      </header>
    </Card>
  );
};

export default Header;
