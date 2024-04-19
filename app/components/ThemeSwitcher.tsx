'use client';

import { setIsDark } from '@/lib/redux/slices/isDarkSlice';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

type PaletteType = 'light' | 'dark' | 'system' | '';

export default function ThemeSwitcher() {
  const [mode, setMode] = useState<PaletteType>('');
  const dispatch = useDispatch();
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
    } else {
      setMode('system');
    }
  }, []);

  useEffect(() => {
    if (mode) {
      if (mode === 'system') {
        localStorage.theme = 'system';
        if (
          window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
          dispatch(setIsDark(true));
        } else {
          dispatch(setIsDark(false));
        }
      } else if (mode === 'dark') {
        dispatch(setIsDark(true));
        localStorage.theme = 'dark';
      } else if (mode === 'light') {
        dispatch(setIsDark(false));
        localStorage.theme = 'light';
      }
    }
  }, [mode]);

  const handleChange = (event: SelectChangeEvent) => {
    setMode(event.target.value as PaletteType);
  };

  return (
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
  );
}
