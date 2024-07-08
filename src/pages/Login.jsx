import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash} from 'react-icons/fa';
import { useState } from 'react';
import SocialLogin from '../components/SocialLogin';
import { Helmet } from 'react-helmet-async';



const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div>
        <h2 className='text-3xl my-10 text-center font-semibold tracking-wide'>
          Please Login
        </h2>
        <form className='w-3/4 lg:w-1/2 mx-auto'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              required
              name='email'
              placeholder='Email'
              className='input input-bordered'
            />
          </div>
          <div className='form-control relative flex flex-col mt-3'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              required
              name='password'
              placeholder='Password'
              autoComplete='current-password'
              className='input input-bordered'
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className='absolute top-12 right-5'
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            <label className='label'>
              <a href='#' className='label-text-alt link link-hover'>
                Forgot password?
              </a>
            </label>
          </div>
          <div className='form-control mt-6'>
            <button className='btn btn-primary text-lg font-semibold'>
              Sign In
            </button>
          </div>
          <SocialLogin />
        </form>
        <p className='text-center mt-8 bg-gray-800 p-2 w-3/4 mx-auto rounded shadow-lg'>
          Do not have an account{' '}
          <Link className='text-blue-600 font-bold' to='/register'>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
