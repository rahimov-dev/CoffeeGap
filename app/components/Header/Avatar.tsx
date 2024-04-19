import { Avatar, Stack, Typography } from '@mui/material';

export default function AvatarComponent() {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center lg:gap-[1rem] cursor-pointer'>
      <Avatar />
      <span className='font-semibold hidden md:inline text-xl'>
        John Doe
      </span>
    </div>
  );
}
