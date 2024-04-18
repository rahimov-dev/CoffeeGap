'use client';

import { ThemeProvider } from '@emotion/react';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  createTheme,
} from '@mui/material';
import { getDesignTokens } from '../theme/colors';

type PaletteType = 'light' | 'dark' | 'system' | '';

export default function ThemeRegistry({
  children,
}: {
  children: ReactNode;
}) {
  const [mode, setMode] = useState<PaletteType>('');
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      const localTheme = localStorage.getItem('theme');
      if (localTheme === 'system') {
        setMode('system');
      } else if (localTheme === 'dark') {
        setMode('dark');
      } else if (localTheme === 'light') {
        setMode('light');
      }
    }
  }, []);

  useEffect(() => {
    if (mode) {
      if (mode === 'system') {
        localStorage.theme = 'system';
        if (
          window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
          setIsDark(true);
        } else {
          setIsDark(false);
        }
      } else if (mode === 'dark') {
        setIsDark(true);
        localStorage.theme = 'dark';
      } else if (mode === 'light') {
        setIsDark(false);
        localStorage.theme = 'light';
      }
    }
  }, [mode]);

  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const theme = useMemo(
    () => createTheme(getDesignTokens(isDark ? 'dark' : 'light')),
    [isDark],
  );

  const handleChange = (event: SelectChangeEvent) => {
    setMode(event.target.value as PaletteType);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='dark:bg-slate-900 bg-slate-200 flex items-center justify-center'>
        <Select
          labelId='theme'
          id='theme-select'
          value={mode}
          label='Age'
          onChange={handleChange}
          size='small'
        >
          <MenuItem value={'system'}>System</MenuItem>
          <MenuItem value={'dark'}>Dark</MenuItem>
          <MenuItem value={'light'}>Light</MenuItem>
        </Select>
      </div>
      {children}
    </ThemeProvider>
  );
}
