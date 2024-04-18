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

type PaletteType = 'light' | 'dark' | 'system';

export default function ThemeRegistry({
  children,
}: {
  children: ReactNode;
}) {
  const [mode, setMode] = useState<PaletteType>('light');
  const [isDark, setIsDark] = useState<boolean>(false);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteType) => {
          return prevMode === 'light' ? 'dark' : 'light';
        });
      },
    }),
    [],
  );

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      const localTheme = localStorage.getItem('theme');
      if (localTheme === 'system') {
        setMode('system');
        localStorage.setItem('theme', 'system');
      } else if (localTheme === 'dark') {
        setMode('dark');
        localStorage.setItem('theme', 'dark');
      } else if (localTheme === 'light') {
        setMode('light');
        localStorage.setItem('theme', 'light');
      }
    } else {
      setMode('system');
    }
  }, []);

  useEffect(() => {
    if (mode) {
      if (mode === 'system') {
        if (
          window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
          setIsDark(true);
        } else {
          setIsDark(false);
        }
      } else if (mode === 'dark') {
        setIsDark(true);
      } else if (mode === 'light') {
        setIsDark(false);
      }
    }
  }, [mode]);

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
