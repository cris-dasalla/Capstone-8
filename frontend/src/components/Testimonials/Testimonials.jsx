import React from "react";
import Slider from "react-slick";
import pic1 from "../../assets/images/Criss.jpg";
import pic2 from "../../assets/images/Abdul.jpg";
import pic3 from "../../assets/images/Jemelou.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slideToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slideToShow: 2,
          slideToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slideToShow: 1,
          slideToScroll: 5,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          My journey with Speed Tours was absolutely extraordinary! From the
          moment I booked my tour to the day I returned home, I felt like I was
          in the hands of true travel experts.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={pic1} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5 className="mb-0 mt-3">Cris Dasalla</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          The attention to detail in planning my trip was remarkable. The
          itinerary was well-structured, balancing must-see sights with hidden
          gems that I wouldn't have discovered on my own.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={pic2} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5 className="mb-0 mt-3">Abdulaziz De Borja</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          What truly stood out, though, was the personal touch. The team at
          Speed Tours took the time to understand my interests
          and preferences, and it reflected in every aspect of my journey. They
          went above and beyond to make sure I had the most enriching experience
          possible.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={pic3} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5 className="mb-0 mt-3">Jemelou Ann Paul</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
