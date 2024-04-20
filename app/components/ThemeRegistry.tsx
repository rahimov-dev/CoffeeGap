'use client';

import { ThemeProvider } from '@emotion/react';
import { ReactNode, useEffect, useMemo } from 'react';
import { SelectChangeEvent, createTheme } from '@mui/material';
import { getDesignTokens } from '../theme/colors';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';

type PaletteType = 'light' | 'dark' | 'system' | '';

export default function ThemeRegistry({
  children,
}: {
  children: ReactNode;
}) {
  const isDark = useAppSelector((state) => state.isDark);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const theme = useMemo(
    () => createTheme(getDesignTokens(isDark ? 'dark' : 'light')),
    [isDark],
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
