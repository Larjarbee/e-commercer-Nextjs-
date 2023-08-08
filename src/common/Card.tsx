'use client';
import { Container } from '@mui/material';
import React from 'react';

function Card({ children }: { children: React.ReactNode }) {
  return <Container className='space-y-5'>{children}</Container>;
}

export default Card;
