import { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Button from '../components/Button';
import { FaHandPointRight } from 'react-icons/fa';
// import map
import {
  MapContainer,
  TileLayer,
  Marker, Popup
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { saveDataToLS } from '../utility/localStorage';



const EstateDetails = () => {
  const [bookmark, setBookmark] = useState(true);

  const data = useLoaderData();

  const { id } = useParams();
  const idInt = parseInt(id);

  const selectedData = data.find((singleData) => singleData.id === idInt);

  const {
    estate_title,
    image,
    segment_name,
    description,
    price,
    status,
    facilities,
    location,
    area,
    year_built,
    bedrooms,
    bathrooms,
  } = selectedData;

  const handleAddToCart = selectedData => {
  saveDataToLS(selectedData)
}

  return (
    <div className='mt-2 lg:mt-8'>
      <div className='grid gid-cols-2 lg:grid-cols-6 gap-3 lg:gap-6'>
        <div className='lg:col-span-3 bg-slate-600 bg-opacity-60 rounded-md lg:h-[570px]'>
          <div className='items-center -mt-4 text-white space-y-5 pl-6'>
            <h2 className='text-4xl font-semibold pt-12 lg:pt-16'>
              {estate_title}
            </h2>
            <h3 className='text-xl font-medium opacity-95 '>
              <span className='text-yellow-300 font-semibold text-xl mr-4'>
                {' '}
                Category:
              </span>
              {segment_name}
            </h3>

            <p className=' opacity-85 tracking-wider leading-relaxed font-merriweather'>
              <span className='text-yellow-300 font-semibold text-xl mr-4'>
                {' '}
                Description:
              </span>
              {description}
            </p>
            <div className='flex text-lg'>
              <span className='text-yellow-300 font-semibold text-lg mr-4'>
                {' '}
                Speciality:
              </span>
              <div className='flex flex-wrap gap-4'>
                <p className='text-yellow-100 font-bold'>Area: {area}</p>
                <p>
                  Built in:
                  <span className='text-yellow-100 ml-2 text-xl'>
                    {year_built}
                  </span>
                </p>
                <p>
                  Bedrooms:
                  <span className='text-yellow-100 ml-2 text-xl'>
                    {bedrooms}
                  </span>
                </p>
                <p>
                  Bathrooms:
                  <span className='text-yellow-100 ml-2 text-xl'>
                    {bathrooms}
                  </span>
                </p>
              </div>
            </div>
            <div className='flex gap-6'>
              <span className='text-yellow-300 font-semibold text-lg'>
                {' '}
                Facilities:
              </span>
              <ol className='flex flex-wrap gap-4'>
                {facilities.map((facility, idx) => (
                  <li className='flex gap-2 items-center' key={idx}>
                    <FaHandPointRight className='text-yellow-100' />
                    {facility}
                  </li>
                ))}
              </ol>
            </div>

            <div className='flex gap-8 md:gap-4'>
              <p className='text-xl text-red-600 bg-slate-400 px-2 py-1 rounded-md shadow-xl  my-2 font-semibold'>
                <span className='text-red-900 font-medium'> For:</span> {status}
              </p>
              <p className='text-xl text-red-600 bg-slate-400 px-2 py-1 rounded-md shadow-xl my-2 font-semibold'>
                <span className='text-red-900 font-normal'> Price:</span>{' '}
                {price}
              </p>
            </div>
            <div
              onClick={() => setBookmark(!bookmark)}
              className=' flex justify-center pb-4'
            >
              {bookmark ? (
                <a onClick={() => handleAddToCart(selectedData)}>
                  <Button type='primary' label='Add to Bookmark' />
                </a>
              ) : (
                <Link to='/bookmark'>
                  <Button type='secondary' label='View All Bookmark' />
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className='lg:col-span-3'>
          <img className='w-full h-1/3 rounded-md' src={image} alt='' />
          <div className='mt-4'>
            <h2 className='text-center text-lg pb-4 text-gray-50'>
              Location:{' '}
              <span className='text-yellow-300 text-xl font-semibold ml-2'>
                {location.lat}
              </span>{' '}
              latitude,
              <span className='text-yellow-300 text-xl font-semibold ml-8'>
                {location.lng}
              </span>{' '}
              longitude
            </h2>

            <div>
              <MapContainer
                center={[location.lat, location.lng]}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: '275px', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={[location.lat, location.lng]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
