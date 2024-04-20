'use client';

import { createTheme } from '@mui/material';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export default createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});
