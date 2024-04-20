import user1 from '../assets/Images/user-1.webp';
import user2 from '../assets/Images/user-2.jpg';
import user3 from '../assets/Images/user-3.jpeg';

export const cards = [
  {
    img: user1,
    name: 'John',
    time: '18:20',
    job: 'Front-end developer',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi sed nesciunt rem similique iure. Id animi enim iste ducimus magni! Modi culpa provident ullam, quaerat accusamus cupiditate?',
    status: 'Junior',
  },
  {
    img: user2,
    name: 'Anna',
    time: '13:02',
    job: 'UI/UX Designer',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi sed nesciunt rem similique iure. Id animi enim iste ducimus magni! Modi culpa provident ullam, quaerat accusamus cupiditate?',
    status: 'Junior',
  },

  {
    img: user3,
    name: 'Smith',
    time: 'yesterday',
    job: 'Project Manager',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi sed nesciunt rem similique iure. Id animi enim iste ducimus magni! Modi culpa provident ullam, quaerat accusamus cupiditate?',
    status: 'Junior',
  },
] as const;

export const colleagues = [
  {
    img: user1,
    name: 'Alex',
    job: 'QA Engineer',
  },
  {
    img: user2,
    name: 'Julia',
    job: 'Software Engineer',
  },
  {
    img: user3,
    name: 'Steve',
    job: 'Marketolg',
  },
  {
    img: user2,
    name: 'Julia',
    job: 'Software Engineer',
  },
  {
    img: user1,
    name: 'Alex',
    job: 'QA Engineer',
  },
] as const;
