import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FaStar } from 'react-icons/fa';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Reviews = () => {
  // Updated testimonial data
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Fitness Enthusiast',
      review:
        'I am impressed with the training provided by this academy. The coaches are highly skilled and the facilities are top-notch.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Mike Thompson',
      position: 'Professional Athlete',
      review:
        'This academy has transformed my performance. The training programs are tailored to individual needs and the results are outstanding.',
      rating: 4.5,
    },
    {
      id: 3,
      name: 'Emily Williams',
      position: 'Sports Parent',
      review:
        "My child's progress has been remarkable since joining this academy. The coaches are dedicated and provide excellent guidance.",
      rating: 4,
    },
  ];

  return (
    <div className="bg-gray-100 py-10 my-4">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Reviews from our valuable customer</h2>
        <Carousel
          showArrows={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2000}
          transitionTime={500}
          swipeable={true}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <p className="text-lg mb-4">{testimonial.review}</p>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="flex items-center">
                  <FaStar
                    className="text-yellow-500 text-xl mr-1"
                    aria-label="star"
                  />
                  <FaStar
                    className="text-yellow-500 text-xl mr-1"
                    aria-label="star"
                  />
                  <FaStar
                    className="text-yellow-500 text-xl mr-1"
                    aria-label="star"
                  />
                  <FaStar
                    className="text-yellow-500 text-xl mr-1"
                    aria-label="star"
                  />
                  <FaStar
                    className="text-yellow-500 text-xl mr-1"
                    aria-label="star"
                  />
                </div>
                <div>
                  <div className="text-gray-900 font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
