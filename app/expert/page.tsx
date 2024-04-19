import { Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { AiFillThunderbolt } from 'react-icons/ai';

interface IUser {
  image: string;
  firstName: string;
  lastName?: string;
  profession: string;
  role: 'junior' | 'expert';
  skills?: string[];
}

export default function page() {
  const usersData: IUser[] = [
    {
      image: '/assets/Images/user-1.webp',
      firstName: 'John',
      profession: 'Front-End developer',
      role: 'junior',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    },
    {
      image: '/assets/Images/user-2.jpg',
      firstName: 'Anna',
      profession: 'UI/UX Designer',
      role: 'junior',
      skills: ['HTML', 'CSS', 'Figma', 'React.js'],
    },
    {
      image: '/assets/Images/user-3.jpeg',
      firstName: 'Richard',
      profession: 'Project Manager',
      role: 'junior',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    },
  ];
  return (
    <main>
      <Container>
        <Stack gap='1rem' flexDirection='row' paddingTop='1rem'>
          <div className='w-[70%]'>
            <Typography
              variant='h4'
              fontWeight='bold'
              className='text-[var(--text-primary)]'
            >
              Upcoming Cofechats
            </Typography>
            <Stack
              display='grid'
              gridTemplateColumns='repeat(3, minmax(0, 1fr))'
              columnGap='1rem'
              marginTop='1rem'
            >
              {usersData.map((user, index) => (
                <div
                  key={index}
                  className='rounded-md shadow-md border-t-2 border-sky-500 w-full'
                >
                  <div className='border-b p-2 flex items-end'>
                    <Image
                      src={user.image}
                      alt='avatar'
                      width={50}
                      height={50}
                      quality='95'
                      priority={true}
                      className='border-b-4 border-sky-600 w-[4.5rem] h-[4.5rem] rounded-full object-cover'
                    />

                    <div className='ml-4 tracking-wider'>
                      <h2 className='text-gray-800 text-lg font-semibold'>
                        {user.firstName} {user?.lastName}
                      </h2>
                    </div>
                  </div>

                  <div className='px-4 pb-4 mt-4 tracking-wider'>
                    <p className='text-gray-600 text-lg font-semibold'>
                      {user.profession}
                    </p>
                    <p className='h-[18vh] text-sky-900 text-sm py-1'>
                      Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Quo eligendi sed nesciunt rem
                      similique iure. Id animi enim iste ducimus
                      magni! Modi culpa provident ullam, quaerat
                      accusamus cupiditate?
                    </p>

                    <button className='flex items-center mt-4 bg-gradient-sky bg-gradient-sky-hover text-white font-semibold rounded-md py-1 px-2 tracking-wider cursor-pointer'>
                      <AiFillThunderbolt className='mr-1 text-yellow-300' />
                      Junior
                    </button>
                  </div>
                </div>
              ))}
            </Stack>
          </div>

          <div className='w-[30%]'>
            <Typography
              variant='h4'
              fontWeight='bold'
              className='text-[var(--text-primary)]'
            >
              Colleagues
            </Typography>
            <div className='my-4 flex flex-col gap-y-4'>
              <div className='rounded-md shadow-md border-t-2 border-sky-500'>
                <div className='flex items-center p-2 tracking-wider'>
                  <h2 className='mx-2 font-semibold text-gray-700'>
                    Steve
                  </h2>
                  <p className='text-sky-900'>Marketolg</p>
                </div>
              </div>

              <div className='rounded-md shadow-md border-t-2 border-sky-500'>
                <div className='flex items-center p-2 tracking-wider'>
                  <h2 className='mx-2 font-semibold text-gray-700'>
                    Julia
                  </h2>
                  <p className='text-sky-900'>Software Engineer</p>
                </div>
              </div>

              <div className='rounded-md shadow-md border-t-2 border-sky-500'>
                <div className='flex items-center p-2 tracking-wider'>
                  <h2 className='mx-2 font-semibold text-gray-700'>
                    Alex
                  </h2>
                  <p className='text-sky-900'>QA Engineer</p>
                </div>
              </div>

              <div className='rounded-md shadow-md border-t-2 border-sky-500'>
                <div className='flex items-center p-2 tracking-wider'>
                  <h2 className='mx-2 font-semibold text-gray-700'>
                    Julia
                  </h2>
                  <p className='text-sky-900'>Software Engineer</p>
                </div>
              </div>

              <div className='rounded-md shadow-md border-t-2 border-sky-500'>
                <div className='flex items-center p-2 tracking-wider'>
                  <h2 className='mx-2 font-semibold text-gray-700'>
                    Steve
                  </h2>
                  <p className='text-sky-900'>Marketolg</p>
                </div>
              </div>
            </div>
          </div>
        </Stack>
      </Container>
    </main>
  );
}
