import PropTypes from 'prop-types';
import UseAuth from '../hooks/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className='text-center mt-20'>
        <span className='loading loading-spinner text-error'></span>
      </div>
    );
  }


  if (user) {
    return children
  }
  return <Navigate to='/login' state={location.pathname} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;