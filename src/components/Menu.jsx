import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='lg:flex lg:gap-5 space-y-4 lg:space-y-0'>
      <li>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive
              ? 'border-2 border-blue-300 px-3 py-1 rounded text-blue-400 font-semibold'
              : 'font-semibold hover:border-b-2 border-b-blue-600'
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/update'
          className={({ isActive }) =>
            isActive
              ? 'border-2 border-blue-300 px-3 py-1 rounded text-blue-400 font-semibold'
              : 'font-semibold hover:border-b-2 border-b-blue-600'
          }
        >
         Update Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/login'
          className={({ isActive }) =>
            isActive
              ? 'border-2 border-blue-300 px-3 py-1 rounded text-blue-400 font-semibold'
              : 'font-semibold hover:border-b-2 border-b-blue-600'
          }
        >
          Sign In
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/register'
          className={({ isActive }) =>
            isActive
              ? 'border-2 border-blue-300 px-3 py-1 rounded text-blue-400 font-semibold'
              : 'font-semibold hover:border-b-2 border-b-blue-600'
          }
        >
        Register
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive
              ? 'border-2 border-blue-300 px-3 py-1 rounded text-blue-400 font-semibold'
              : 'font-semibold hover:border-b-2 hover:border-b-blue-600'
          }
        >
          About
        </NavLink>
      </li>
    </div>
  );
};

export default Menu;
