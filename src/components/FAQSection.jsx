import q1 from '../assets/q1.webp'

// import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

/* eslint-disable react/no-unescaped-entities */
const FAQSection = () => {
  return (
    <div className='pt-12'>
      <h2 className='text-4xl lg:text-5xl font-extrabold text-gray-100 mb-12 text-center'>
        Frequently Asked Questions
      </h2>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 bg-blue-100 py-12 bg-opacity-30 rounded-md'>
        <div className='flex flex-col md:flex-row gap-6'>
          <div
            data-aos='zoom-in'
            data-aos-duration='2000'
          >
            <img
              className='min-h-[420px] w-[1200px] rounded-3xl'
              src={q1}
              alt=''
            />
          </div>
          {/* Accordion */}
          <div
            data-aos='fade-left'
            data-aos-duration='2000'
          >
            {/* q&a 1 */}
            <div className='collapse collapse-arrow bg-base-200 mb-2'>
              <input type='radio' name='my-accordion-2' defaultChecked />
              <div className='collapse-title text-xl font-medium'>
                What services does Relux.com.com offer?
              </div>
              <div className='collapse-content'>
                <p>
                  {' '}
                  Relux.com.com offers a wide range of real estate services
                  including buying and selling properties, rental services,
                  property management, and investment consultation. We
                  specialize in luxury properties such as penthouses, beachfront
                  properties, resorts, private islands, villas, and mansions.
                </p>
              </div>
            </div>
            {/* q&a 2 */}
            <div className='collapse collapse-arrow bg-base-200 mb-2'>
              <input type='radio' name='my-accordion-2' />
              <div className='collapse-title text-xl font-medium'>
                How can I list my property on Relux.com?
              </div>
              <div className='collapse-content'>
                <p>
                  {' '}
                  To list your property on Relux.com, you can contact us through
                  our website or call our customer service. Our team will guide
                  you through the process, help you prepare your property for
                  listing, and ensure that it reaches the right audience.
                </p>
              </div>
            </div>
            {/* q&a 3 */}
            <div className='collapse collapse-arrow bg-base-200 mb-2'>
              <input type='radio' name='my-accordion-2' />
              <div className='collapse-title text-xl font-medium'>
                What are the benefits of using Relux.com?
              </div>
              <div className='collapse-content'>
                <p>
                  {' '}
                  Relux.com provides personalized service, expert market
                  knowledge, and extensive marketing reach. Our dedicated team
                  of professionals ensures a seamless and stress-free
                  experience, whether you are buying, selling, or renting a
                  property. We prioritize your needs and work tirelessly to
                  achieve your real estate goals.
                </p>
              </div>
            </div>
            {/* q&a 4 */}
            <div className='collapse collapse-arrow bg-base-200 mb-2'>
              <input type='radio' name='my-accordion-2' />
              <div className='collapse-title text-xl font-medium'>
                How do I schedule a property viewing?
              </div>
              <div className='collapse-content'>
                <p>
                  To schedule a property viewing, you can visit the property
                  listing on our website and use the contact form to request a
                  viewing. Alternatively, you can call our office directly, and
                  one of our agents will assist you in arranging a convenient
                  time for the viewing.
                </p>
              </div>
            </div>
            {/* q&a 5 */}
            <div className='collapse collapse-arrow bg-base-200 mb-2'>
              <input type='radio' name='my-accordion-2' />
              <div className='collapse-title text-xl font-medium'>
                What should I consider when buying a luxury property?
              </div>
              <div className='collapse-content'>
                <p>
                  When buying a luxury property, it's important to consider
                  factors such as location, amenities, future resale value, and
                  your personal preferences. Working with an experienced real
                  estate agent like those at Relux.com can help you navigate
                  these factors and make an informed decision that aligns with
                  your lifestyle and investment goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
