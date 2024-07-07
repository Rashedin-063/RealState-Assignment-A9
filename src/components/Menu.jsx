import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='lg:flex lg:gap-5'>
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
          to='/listed'
          className={({ isActive }) =>
            isActive
              ? 'border-2 border-blue-300 px-3 py-1 rounded text-blue-400 font-semibold'
              : 'font-semibold hover:border-b-2 border-b-blue-600'
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/pages'
          className={({ isActive }) =>
            isActive
              ? 'border-2 border-blue-300 px-3 py-1 rounded text-blue-400 font-semibold'
              : 'font-semibold hover:border-b-2 border-b-blue-600'
          }
        >
          Read Pages
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive
              ? 'border-2 border-blue-300 px-3 py-1 rounded text-blue-400 font-semibold'
              : 'font-semibold hover:border-b-2 border-b-blue-600'
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive
              ? 'border-2 border-blue-300 px-3 py-1 rounded text-blue-400 font-semibold'
              : 'font-semibold hover:border-b-2 hover:border-b-blue-600'
          }
        >
          Contact
        </NavLink>
      </li>
    </div>
  );
};

export default Menu;
