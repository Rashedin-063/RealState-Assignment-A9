import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

// import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const EstateCard = ({ singleData }) => {
  const { id, estate_title, image, segment_name, description, price, status } = singleData;


  return (
    <div className=''>
      <div
        data-aos='zoom-in'
        data-aos-duration='3000'
        className='card w-full bg-slate-600 shadow-xl py-5 max-h-xl max-h-2xl text-white'>
        <figure className='max-w-72 h-40 mx-auto '>
          <img src={image} alt='Album' className='rounded-xl' />
        </figure>
        <div className='card-body items-center text-center -mt-4'>
          <h2 className='text-2xl font-semibold '>{estate_title}</h2>
          <h3 className='text-lg font-medium opacity-95'>{segment_name}</h3>

          <p className='text-sm opacity-75 tracking-wider leading-relaxed font-merriweather'>
            {description}
          </p>
          <div className='flex gap-8 md:gap-4'>
            <p className='text-xl text-red-600 bg-slate-400 px-2 py-1 rounded-md shadow-xl  my-2 font-semibold'>
              <span className='text-red-900 font-medium'> For:</span> {status}
            </p>
            <p className='text-xl text-red-600 bg-slate-400 px-2 py-1 rounded-md shadow-xl my-2 font-semibold'>
              <span className='text-red-900 font-normal'> Price:</span> {price}
            </p>
          </div>
          <div className='card-actions -mb-4 mt-4'>
            <Link to={`/estate/${id}`}>
              <Button type='primary' label='View Property' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

EstateCard.propTypes = {
  singleData: PropTypes.object.isRequired,
};

export default EstateCard;