import { FaGithub, FaGoogle } from 'react-icons/fa';

import UseAuth from '../hooks/UseAuth';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { googleLogin, githubLogin } = UseAuth();

  const handleGoogleLogin = () => {
    googleLogin().then(() => {
      toast.success('Your google login is successful');
      navigate(location?.state || '/');
    });
  };

  const handleGithubLogin = () => {
    githubLogin().then(() => {
      toast.success('Your github login is successful');
      
    });
  };

  return (
    <div>
      <div className='mt-8 flex flex-col md:flex-row justify-between'>
        <a
          onClick={handleGoogleLogin}
          className='cursor-pointer text-2xl flex gap-2 items-center bg-blue-400 text-black px-8 py-2 rounded-md mb-4 md:mb-0 justify-center'
        >
          <FaGoogle />
          <p className='text-lg font-semibold'>Google Login</p>
        </a>
        <a
          onClick={handleGithubLogin}
          className='cursor-pointer text-2xl flex gap-2 items-center bg-blue-400 text-black px-8 py-2 rounded-md justify-center'
        >
          <FaGithub />
          <p className='text-lg font-semibold'>Github Login</p>
        </a>
      </div>
    </div>
  );
};

export default SocialLogin;
