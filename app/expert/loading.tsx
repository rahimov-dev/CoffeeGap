import styles from '../loading.module.css';

export default function loading() {
  return (
    <div className='flex items-center justify-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
      <div className='loader-23'>
        <div className='circle-23'></div>
        <div className='circle-23'></div>
        <div className='circle-23'></div>
        <div className='circle-23'></div>
      </div>
    </div>
  );
}
