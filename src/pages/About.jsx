

const About = () => {
  return (
    <div className='max-w-md md: md:max-w-xl lg:max-w-2xl mx-auto mt-12 space-y-4 px-2 text-justify text-white opacity-90'>
      <h2 className='text-3xl text-center mb-8 font-bold'>About Us</h2>
      <h5 className='text-lg font-semibold'>
        Welcome to{' '}
        <a
          className='text-xl text-blue-600 font-semibold hover:underline'
          href='/'
          target='_blank'
        >
          Relux.com
        </a>{' '}
      </h5>
      <p>
        At Relux.com , we specialize in connecting discerning clients with the
        most luxurious real estate options available. Our mission is to offer an
        unparalleled selection of exquisite penthouses, stunning beachfront
        properties, lavish resorts, private islands, opulent villas, and grand
        mansions. Each listing is meticulously chosen to ensure it meets our
        high standards of elegance, comfort, and sophistication, providing you
        with a home that truly reflects your lifestyle and aspirations.
      </p>
      <p>
        Our collection of properties caters to a wide range of tastes and
        preferences. Whether you are seeking a serene beachfront retreat, a
        vibrant city penthouse, or a secluded private island, Relux.com is your
        ultimate destination for luxury real estate. We believe that your home
        should be a sanctuary that offers both beauty and tranquility.
      </p>
      <p>
        Feel free to reach out to us through our social media channels{' '}
        <a
          className='text-blue-800 font-semibold hover:underline'
          href='https://www.facebook.com'
          target='_blank'
        >
          Facebook
        </a>
        ,{' '}
        <a
          className='text-blue-800 font-semibold hover:underline'
          href='https://www.twitter.com'
          target='_blank'
        >
          Twitter
        </a>
        ,{' '}
        <a
          className='text-blue-800 font-semibold hover:underline'
          href='https://www.instagram.com'
          target='_blank'
        >
          Instagram
        </a>{' '}
        or drop us an email at{' '}
        <a
          className='text-blue-800 font-bold hover:underline'
          href='https://mail.google.com/mail/?view=cm&fs=1&to=rashedinislam.06@gmail.com'
          target='_blank'
        >
          contact@relux.com
        </a>{' '}
      </p>
    </div>
  );
};

export default About;