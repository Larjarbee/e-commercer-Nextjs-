'use client';
import theme from '@/configs/Theme';
import { ThemeProvider } from '@mui/material';
import React from 'react';

function ThemeProviderCard({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeProviderCard;
