"use client";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialItem from "./TestimonialItem";
import { getTestimonialData } from "@/lib/getTestimonialData";
import SectionIntro from "@/components/SectionIntro/SectionIntro";
import { NextArrow, PrevArrow } from "./Arrows";
import "./testimonial.css";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const testimonialData = await getTestimonialData();
      setReviews(testimonialData); // Set the fetched data to the reviews state
    }
    fetchData();
  }, []); // Runs once on component mount

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    // arrows: false,
    centerMode: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          //   dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section id="testimonial" className="my-40">
      <SectionIntro
        sectionCategory="Testimonial"
        sectionTitle="What Customer Says"
        sectionDescription="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      />
      <div className="mt-16 space-x-5">
        {reviews.length > 0 ? (
          <Slider {...settings}>
            {reviews.map((review) => (
              <TestimonialItem key={review.id} review={review} />
            ))}
          </Slider>
        ) : (
          <p>Loading...</p> // Optional loading state
        )}
      </div>
    </section>
  );
};

export default Testimonial;
