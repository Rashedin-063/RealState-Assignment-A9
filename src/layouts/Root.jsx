import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';

const Root = () => {
  return (
    <div className='space-y-8 font-raleway primary-bg'>
      <div className='max-w-7xl mx-auto px-2 lg:px-0'>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
