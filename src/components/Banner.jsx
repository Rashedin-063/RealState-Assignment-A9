// import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
// AOS.init();

// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import custom css
import './Banner.css';

// import banner image
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.webp';
import banner4 from '../assets/banner4.jpg';
import banner5 from '../assets/banner5.jpg';
import { useEffect } from 'react';

const Banner = () => {

    useEffect(() => {
      AOS.init({once:true});
    }, []);

    const handleSlideChange = () => {
      AOS.refresh();
    };
  return (
    <div className='mt-8 text-justify'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={2000}
        pagination={{
          clickable: true,
        }}
  
        navigation={true}
        onSlideChange={handleSlideChange}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        {/* slide 1 */}
        <SwiperSlide>
          <div
            data-aos='fade-left'
            data-aos-duration='3000'
            style={{
              backgroundImage: `url(${banner1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '80vh',
              borderRadius: '1rem',
            }}
          >
            <div className='relative min-h-[80vh]'>
              <h1
                data-aos='fade-down'
                data-aos-duration='3000'
                className=' text-4xl lg:text-7xl text-gray-100 font-semibold p-5 lg:p-16 '
              >
                Welcome to Relux.com{' '}
                <span className='text-2xl block mt-3 opacity-85'>
                  Exquisite Homes, Extraordinary Lives
                </span>
              </h1>

              <p
                data-aos='zoom-in'
                data-aos-duration='3000'
                className=' text-base lg:text-lg text-gray-300 font-medium p-3 lg:p-10 bg-slate-600 max-w-2xl bg-opacity-85 absolute bottom-8 lg:right-4 rounded-xl shadow-lg pl-4 lg:pl-0'
              >
                Discover a world of opulence at Relux.com, where every property
                is a masterpiece. From beachfront paradises to exclusive private
                islands, find your dream home with us.
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 2 */}
        <SwiperSlide>
          <div           
            style={{
              backgroundImage: `url(${banner2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '80vh',
              borderRadius: '1rem',
            }}
          >
            <div
              className='relative min-h-[80vh]'>
              <h1
                data-aos='fade-in'
                data-aos-duration='3000'
                className=' text-4xl lg:text-5xl text-gray-200 font-semibold p-2 lg:p-4 bg-slate-600 bg-opacity-45 rounded-xl pl-4 lg:pl-2 tracking-tighter lg:tracking-normal pt-4 '>
                Exclusive Estates, Endless Elegance
                <span className='text-2xl block mt-3 opacity-85'></span>
              </h1>

              <p
                data-aos='zoom-in'
                data-aos-duration='3000'
                className=' text-base lg:text-lg text-gray-300 font-medium p-3 lg:p-10 bg-slate-600 max-w-2xl bg-opacity-85 absolute bottom-8 lg:right-4 rounded-xl shadow-lg pl-4 lg:pl-0'>
                Step into a world of elegance and exclusivity at Relux.com.
                Explore our portfolio of prestigious estates, each designed to
                embody sophistication and timeless beauty.
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 3 */}
        <SwiperSlide>
          <div
            data-aos='fade-down'
            data-aos-duration='5000'
            style={{
              backgroundImage: `url(${banner3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '80vh',
              borderRadius: '1rem',
            }}
          >
            <h1 className=' text-4xl lg:text-5xl text-gray-200 font-semibold p-2 lg:p-4 bg-slate-600 bg-opacity-45 max-w-2xl rounded-xl pl-4 pt-4'>
              Luxurious Living Redefined
              <span className='text-2xl block mt-3 opacity-85'></span>
            </h1>

            <p className=' text-base lg:text-lg text-gray-300 font-medium p-3 lg:p-10 bg-slate-600 max-w-2xl bg-opacity-85 absolute bottom-8 lg:right-4 rounded-xl shadow-lg pl-4'>
              Immerse yourself in luxury at Relux.com, where each property is
              crafted to redefine upscale living. From serene beachfront
              retreats to private estates, discover your perfect sanctuary.
            </p>
          </div>
        </SwiperSlide>
        {/* slide 4 */}
        <SwiperSlide>
          <div
            data-aos='fade-down'
            data-aos-duration='6000'
            style={{
              backgroundImage: `url(${banner4})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '80vh',
              borderRadius: '1rem',
            }}
          >
            <h1 className=' text-4xl lg:text-5xl text-gray-200 font-semibold p-2 lg:p-4 bg-slate-600 bg-opacity-65  rounded-xl pl-4 pt-4 '>
              Your Gateway to Extraordinary Homes
              <span className='text-2xl block mt-3 opacity-85'></span>
            </h1>

            <p className=' text-base lg:text-lg text-gray-300 font-medium p-3 lg:p-10 bg-slate-600 max-w-2xl bg-opacity-85 absolute bottom-8 lg:right-4 rounded-xl shadow-lg pl-4'>
              Discover extraordinary homes at Relux.com, where every residence
              tells a story of luxury and comfort. Whether you seek a modern
              penthouse or a historic mansion, find your dream home with us.
            </p>
          </div>
        </SwiperSlide>
        {/* slide 5 */}
        <SwiperSlide>
          <div
            data-aos='fade-down'
            data-aos-duration='6000'
            style={{
              backgroundImage: `url(${banner5})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '80vh',
              borderRadius: '1rem',
            }}
          >
            <h1 className=' text-4xl lg:text-5xl text-gray-200 font-semibold p-2 lg:p-4 bg-slate-600 bg-opacity-45 max-w-2xl rounded-xl pt-4'>
              Seaside Serenity Awaits
              <span className='text-2xl block mt-3 opacity-85'></span>
            </h1>

            <p className=' text-base lg:text-lg text-gray-300 font-medium p-3 lg:p-10 bg-slate-600 max-w-2xl bg-opacity-85 absolute bottom-8 lg:right-4 rounded-xl shadow-lg pl-4'>
              Experience the tranquility of coastal living with Relux.com. Our
              collection of seaside properties offers unparalleled views and
              luxurious amenities, ensuring a life of relaxation and
              rejuvenation.b
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
