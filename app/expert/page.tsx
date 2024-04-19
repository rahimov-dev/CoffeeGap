import { Container } from '@mui/material';
import Image from 'next/image';
import { AiFillThunderbolt } from 'react-icons/ai';
import user1 from '/assets/Images/user-1.webp';
import user2 from '/assets/Images/user-2.jpg';
import user3 from '/assets/Images/user-3.jpeg';

export default function page() {
  return (
    <main>
      <Container>
        <div className='flex gap-x-4'>
          <div className='w-[70%] '>
            <h1 className='text-lg font-semibold tracking-wider text-gray-700'>
              Upcoming Cofechats
            </h1>
            <div className='flex justify-between my-4 gap-x-8'>
              <div className='rounded-md shadow-md border-t-2 border-sky-500 w-[32%]'>
                <div className='border-b p-2 flex items-end'>
                  <Image
                    src={user1}
                    alt='avatar'
                    quality='95'
                    priority={true}
                    className='border-b-4 border-sky-600 w-[4.5rem] h-[4.5rem] rounded-full object-cover'
                  />

                  <div className='ml-4 tracking-wider'>
                    <h2 className='text-gray-600 text-lg font-semibold'>
                      John
                    </h2>
                    <span className='text-gray-500 text-sm'>
                      last seen at 18:20
                    </span>
                  </div>
                </div>

                <div className='px-4 pb-4 mt-4 tracking-wider'>
                  <p className='text-gray-600 text-lg font-semibold'>
                    Front-end Developer
                  </p>
                  <p className='h-[18vh] text-sky-900 text-sm py-1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quo eligendi sed nesciunt rem similique
                    iure. Id animi enim iste ducimus magni! Modi culpa
                    provident ullam, quaerat accusamus cupiditate?
                  </p>

                  <button
                    className='flex items-center mt-4 bg-gradient-sky bg-gradient-sky-hover text-white font-semibold rounded-md py-1 px-2 tracking-wider 
								cursor-pointer'
                  >
                    <AiFillThunderbolt className='mr-1 text-yellow-300' />
                    Junior
                  </button>
                </div>
              </div>

              <div className='rounded-md shadow-md border-t-2 border-sky-500 w-[32%]'>
                <div className='border-b p-2 flex items-end'>
                  <Image
                    src={user2}
                    alt='avatar'
                    quality='95'
                    priority={true}
                    className='border-b-4 border-sky-600 w-[4.5rem] h-[4.5rem] rounded-full object-cover'
                  />

                  <div className='ml-4 tracking-wider'>
                    <h2 className='text-gray-600 text-lg font-semibold'>
                      Anna
                    </h2>
                    <span className='text-gray-500 text-sm'>
                      last seen at 13:01
                    </span>
                  </div>
                </div>

                <div className='px-4 pb-4 mt-4 tracking-wider'>
                  <p className='text-gray-600 text-lg font-semibold'>
                    UI/UX Designer
                  </p>
                  <p className='h-[18vh] text-sky-900 text-sm py-1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quo eligendi sed nesciunt rem similique
                    iure. Id animi enim iste ducimus magni! Modi culpa
                    provident ullam, quaerat accusamus cupiditate?
                  </p>

                  <button
                    className='flex items-center mt-4 bg-gradient-sky bg-gradient-sky-hover text-white font-semibold rounded-md py-1 px-2 tracking-wider 
								cursor-pointer'
                  >
                    <AiFillThunderbolt className='mr-1 text-yellow-300' />
                    Junior
                  </button>
                </div>
              </div>

              <div className='rounded-md shadow-md border-t-2 border-sky-500 w-[32%]'>
                <div className='border-b p-2 flex items-end'>
                  <Image
                    src={user3}
                    alt='avatar'
                    quality='95'
                    priority={true}
                    className='border-b-4 border-sky-600 w-[4.5rem] h-[4.5rem] rounded-full object-cover'
                  />

                  <div className='ml-4 tracking-wider'>
                    <h2 className='text-gray-600 text-lg font-semibold'>
                      Smith
                    </h2>
                    <span className='text-gray-500 text-sm'>
                      last seen yesterday
                    </span>
                  </div>
                </div>

                <div className='px-4 pb-4 mt-4 tracking-wider'>
                  <p className='text-gray-600 text-lg font-semibold'>
                    Project Manager
                  </p>
                  <p className='h-[18vh] text-sky-900 text-sm py-1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quo eligendi sed nesciunt rem similique
                    iure. Id animi enim iste ducimus magni! Modi culpa
                    provident ullam, quaerat accusamus cupiditate?
                  </p>

                  <button
                    className='flex items-center mt-4 bg-gradient-sky bg-gradient-sky-hover text-white font-semibold rounded-md py-1 px-2 tracking-wider 
								cursor-pointer'
                  >
                    <AiFillThunderbolt className='mr-1 text-yellow-300' />
                    Junior
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='w-[30%]'>
            <h1 className='text-lg font-semibold tracking-wider text-gray-700'>
              Colleagues
            </h1>
            <div className='my-4 flex flex-col gap-y-4'>
              <div className='rounded-md shadow-md border-t-2 border-sky-500'>
                <div className='flex items-center p-2 tracking-wider'>
                  <Image
                    src={user3}
                    alt='avatar'
                    quality='95'
                    priority={true}
                    className='border-b-2 border-sky-600 w-[2.4rem] h-[2.4rem] rounded-full object-cover'
                  />
                  <h2 className='mx-2 font-semibold text-gray-700'>
                    Steve
                  </h2>
                  <p className='text-sky-900'>Marketolg</p>
                </div>
              </div>

              <div className='rounded-md shadow-md border-t-2 border-sky-500'>
                <div className='flex items-center p-2 tracking-wider'>
                  <Image
                    src={user2}
                    alt='avatar'
                    quality='95'
                    priority={true}
                    className='border-b-2 border-sky-600 w-[2.4rem] h-[2.4rem] rounded-full object-cover'
                  />
                  <h2 className='mx-2 font-semibold text-gray-700'>
                    Julia
                  </h2>
                  <p className='text-sky-900'>Software Engineer</p>
                </div>
              </div>

              <div className='rounded-md shadow-md border-t-2 border-sky-500'>
                <div className='flex items-center p-2 tracking-wider'>
                  <Image
                    src={user1}
                    alt='avatar'
                    quality='95'
                    priority={true}
                    className='border-b-2 border-sky-600 w-[2.4rem] h-[2.4rem] rounded-full object-cover'
                  />
                  <h2 className='mx-2 font-semibold text-gray-700'>
                    Alex
                  </h2>
                  <p className='text-sky-900'>QA Engineer</p>
                </div>
              </div>

              <div className='rounded-md shadow-md border-t-2 border-sky-500'>
                <div className='flex items-center p-2 tracking-wider'>
                  <Image
                    src={user2}
                    alt='avatar'
                    quality='95'
                    priority={true}
                    className='border-b-2 border-sky-600 w-[2.4rem] h-[2.4rem] rounded-full object-cover'
                  />
                  <h2 className='mx-2 font-semibold text-gray-700'>
                    Julia
                  </h2>
                  <p className='text-sky-900'>Software Engineer</p>
                </div>
              </div>

              <div className='rounded-md shadow-md border-t-2 border-sky-500'>
                <div className='flex items-center p-2 tracking-wider'>
                  <Image
                    src={user3}
                    alt='avatar'
                    quality='95'
                    priority={true}
                    className='border-b-2 border-sky-600 w-[2.4rem] h-[2.4rem] rounded-full object-cover'
                  />
                  <h2 className='mx-2 font-semibold text-gray-700'>
                    Steve
                  </h2>
                  <p className='text-sky-900'>Marketolg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
