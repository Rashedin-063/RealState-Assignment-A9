import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';

const Root = () => {
  return (
    <div className='space-y-8'>
      <div className='max-w-7xl mx-auto'>
        <Navbar />
        <div className='min-h-[73vh] lg:min-h-[69vh]'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
