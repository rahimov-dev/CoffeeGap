'use client';

import { Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: -250 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='flex flex-col justify-center items-center h-[20rem]'
      >
        <h2 className='font-semibold text-lg text-gray-600 py-4'>
          This is a temporary modal for redirecting to junior or
          expert 😏
        </h2>
        <div className='flex items-center flex-col py-6 rounded-md bg-white w-[20rem]'>
          <h2 className='font-bold text-lg'>
            Are you a Junior or an expert ?
          </h2>
          <div className='flex gap-x-4 mt-3'>
            <button
              onClick={() => {
                router.push('/junior');
              }}
              className='border-2 border-amber-500 px-3 rounded-md font-semibold'
            >
              Junior
            </button>
            <button
              onClick={() => {
                router.push('/expert');
              }}
              className='border-2 border-amber-500 px-3 rounded-md font-semibold'
            >
              Expert
            </button>
          </div>
        </div>
      </motion.div>
    </Container>
  );
}
