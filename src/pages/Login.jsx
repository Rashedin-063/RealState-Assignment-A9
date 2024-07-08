import { Link } from 'react-router-dom';


const Login = () => {
 
  return (
    <div>
     
      <div>
        <h2 className='text-3xl my-10 text-center font-semibold tracking-wide'>Please Login</h2>
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
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              type='password'
              required
              name='password'
              placeholder='Password'
              autoComplete='current-password'
              className='input input-bordered'
            />
            <label className='label'>
              <a href='#' className='label-text-alt link link-hover'>
                Forgot password?
              </a>
            </label>
          </div>
          <div className='form-control mt-6'>
            <button className='btn btn-primary'>Login</button>
          </div>
        </form>
        <p className='text-center mt-4'>
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
