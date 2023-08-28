import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import droneVideo from "../assets/images/drone-shot.mp4";
import experienceImg from "../assets/images/experience.jpg";

import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import FeaturedTourList from "../components/Featured-Tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-Gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonials/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      <section className="heading1">
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Discover, Explore, Experience!"} />
                </div>
                <h1>
                  Creating memories through exploring the beauty of our{" "}
                  <span className="highlight"> country</span>{" "}
                </h1>
                <p>
                  By venturing into the heart of our country, you'll have the
                  chance to connect with its rich history, taste its diverse
                  cuisines, and immerse yourself in the warmth of its people.
                  You'll witness breathtaking landscapes that will leave an
                  indelible mark on your memory.
                </p>
              </div>
            </Col>

            <Col lg="6">
              <div className="hero__img-box mt-5">
                <video autoPlay loop muted>
                  <source src={droneVideo} type="video/mp4" />
                </video>
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our Highlighted Journeys</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  Unwind and escape with us <br />
                </h2>
                <p>
                  We will serve you from our best extensive experiences. <br />
                  Indulge in tranquility and liberate yourself from the daily
                  grind
                  <br />
                  by joining us on an unforgettable journey.{" "}
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>1k+</span>
                  <h6>Successful Trips</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Loyal Customers</h6>
                </div>
                <div className="counter__box">
                  <span>2</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Testimonials"} />
              <h2 className="testimonial__title">The experiences of our beloved customers</h2>
            </Col>
            <Col lg="12">
              <Testimonials></Testimonials>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Home;
