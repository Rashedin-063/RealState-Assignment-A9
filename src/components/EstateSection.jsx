import { useState } from "react";
import Button from "./Button";
import EstateCard from "./EstateCard";
import PropTypes from 'prop-types';

const EstateSection = ({ data }) => {
  const [dataLength, setDataLength] = useState(4)
  

  
  return (
    <div className='text-center text-white'>
      <h2 className='text-4xl lg:text-5xl font-bold mt-16'>
        Discover Your Dream Estate
      </h2>
      <p className='mt-4 mb-12 max-w-xl mx-auto opacity-85 px-2'>
        Explore our premium estates, where luxury meets comfort. From beachfront
        properties to private islands, each estate is meticulously designed to
        offer unparalleled elegance and tranquility.
      </p>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data.slice(0, dataLength).map((singleData) => (
          <EstateCard key={singleData.id} singleData={singleData} />
        ))}
      </div>
      <div onClick={() => setDataLength(data.length)} className={dataLength === data.length ? 'hidden mt-8' : 'mt-8'}>
        <Button type='secondary' label='Show All'></Button>
      </div>
    </div>
  );
};

EstateSection.propTypes = {
  data: PropTypes.array.isRequired,
};

export default EstateSection;