import {  useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import UseAuth from '../hooks/UseAuth';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const UpdateProfile = () => {
  const { user, updateUserProfile } = UseAuth();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUpdateProfile = ({ name, photo, email, password }) => {
    updateUserProfile(name, photo, email, password)
      .then(() => {
        toast.success('Profile updated successfully');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className='mt-20'>
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
      <h2 className='text-3xl my-10 text-center font-semibold tracking-wide'>
        Update Your Profile
      </h2>
      <form
        onSubmit={handleSubmit(handleUpdateProfile)}
        className='w-3/4 lg:w-1/2 mx-auto space-y-4'
      >
        <div className='form-control'>
          <input
            type='text'
            {...register('name')}
            defaultValue={user.displayName}
            placeholder='Name'
            className='input input-bordered bg-slate-700'
          />
          {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
        </div>
        <div className='form-control'>
          <input
            type='text'
            {...register('photo')}
            defaultValue={user.photoURL}
            placeholder='Photo URL'
            className='input input-bordered bg-slate-700'
          />
          {errors.photo && (
            <p className='text-red-500'>{errors.photo.message}</p>
          )}
        </div>
        <div className='form-control'>
          <input
            type='email'
            {...register('email')}
            defaultValue={user.email}
            placeholder='Email'
            className='input input-bordered bg-slate-700'
          />
          {errors.email && (
            <p className='text-red-500'>{errors.email.message}</p>
          )}
        </div>
        <div className='form-control relative flex flex-col mt-3'>
          <input
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            placeholder='Password'
            autoComplete='new-password'
            className='input input-bordered bg-slate-700'
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className='absolute top-5 right-5 cursor-pointer'
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          {errors.password && (
            <p className='text-red-500'>{errors.password.message}</p>
          )}
        </div>
        <div className='form-control mt-6'>
          <button className='btn btn-primary'>Update Profile</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
