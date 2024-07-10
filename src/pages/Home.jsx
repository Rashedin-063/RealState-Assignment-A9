import { Helmet } from 'react-helmet-async';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Relux.com || Home</title>
      </Helmet>
      <Banner/>
    </div>
  );
};

export default Home;
