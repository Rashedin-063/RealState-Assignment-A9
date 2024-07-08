import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Menu from '../../components/Menu';

const Navbar = () => {
  return (
    <div
      className='navbar primary-bg rounded-md py-4 lg:py-6 px-4'
    >
      <div className='navbar-start -ml-2 lg:-ml-0'>
        {/* dropdown */}
        <div className='dropdown'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost hover:bg-transparent lg:hidden relative hover:scale-110'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-7 w-7 wmd:h-8 md:w-8'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=' dropdown-content rounded-box z-[1] mt-3 ml-4 flex flex-col gap-4 primary-bg shadow-xl w-48 pl-8 pt-6 pb-4 font-light'
          >
            <Menu />
          </ul>
        </div>
        {/* logo */}
        <Link
          to='/'
          className='text-2xl md:text-3xl lg:text-4xl font-bold cursor-pointer flex items-center -ml-2 lg:-ml-0'
        >
          <span className='text-blue-300'> Relux</span>
          <span className='text-blue-500'>.Com</span>
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='gap-4 px-1'>
          <Menu />
        </ul>
      </div>
      <div className='navbar-end flex gap-2 mt-2 mr-6 md:mr-16'>
        <div className='gap-2 flex'>
          <Button label='Sign In' type='primary'></Button>
          <Button type='secondary' label='Sign Up'></Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
