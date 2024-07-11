import { Helmet } from 'react-helmet-async';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router-dom';
import EstateSection from '../components/EstateSection';
import ClientReview from '../components/ClientReview';

const Home = () => {
  const data = useLoaderData();
  
  return (
    <div className='space-y-8'>
      <Helmet>
        <title>Relux.com || Home</title>
      </Helmet>
      <Banner />
      <EstateSection data={data} />
      <ClientReview/>
    </div>
  );
};

export default Home;
