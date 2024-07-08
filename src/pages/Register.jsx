import { Link } from 'react-router-dom';

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form);
    const name = form.get('name');
    const email = form.get('email');
    const photo = form.get('photo');
    const password = form.get('password');
    console.log(name, email, photo, password);

    // reset
  };

  return (
    <div>
      <div className='px-4'>
        <h2 className='text-3xl mt-12 mb-8 text-center font-semibold tracking-wide'>Please Register</h2>
        <form
          onSubmit={handleRegister}
          className='w-3/4 lg:w-1/2 mx-auto space-y-4'
        >
          <div className='form-control'>
            <input
              type='text'
              required
              name='name'
              placeholder='Name'
              className='input input-bordered bg-slate-700'
            />
          </div>
          <div className='form-control'>
            <input
              type='text'
              required
              name='photo'
              placeholder='Photo URL'
              className='input input-bordered bg-slate-700'
            />
          </div>
          <div className='form-control'>
         
            <input
              type='email'
              required
              name='email'
              placeholder='Email'
              className='input input-bordered bg-slate-700'
            />
          </div>
          <div className='form-control'>
            <input
              type='password'
              required
              name='password'
              placeholder='Password'
              autoComplete='new-password'
              className='input input-bordered bg-slate-700'
            />
            <label className='label'>
              <a href='#' className='label-text-alt link link-hover'>
                Forgot password?
              </a>
            </label>
          </div>
          <div className='form-control mt-6'>
            <button className='btn btn-primary'>Register</button>
          </div>
        </form>
        <p className='text-center mt-4'>
          Already have an account?{' '}
          <Link className='text-blue-600 font-bold' to='/login'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
