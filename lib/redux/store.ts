import { configureStore } from '@reduxjs/toolkit';
import isDarkSlice from './slices/isDarkSlice';

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      isDark: isDarkSlice,
    },
  });

  store.subscribe(() => {
    console.log(store.getState());
  });

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = ReturnType<AppStore['dispatch']>;
