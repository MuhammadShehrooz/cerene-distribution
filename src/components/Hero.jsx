import React from "react";
import carousel1 from "../assets/Native-Starches-carousel.jpg";
import carousel2 from "../assets/spices-carousel.jpg";
import carousel3 from "../assets/Food-Additives-carousel.jpg";
import carousel4 from "../assets/Oil -Fats-carousel.jpg";
import carousel5 from "../assets/flour-carousel.jpg";
import carousel6 from "../assets/Table-Salt-carousel.jpg";
import carousel7 from "../assets/Sodium-Bicarbonate-carousel.jpg";
import carousel8 from "../assets/Flavorings-carousel.jpg";

const carouselItems = [
  {
    image: carousel1,
    alt: "Starches",
    title: "High-Quality Starches",
    description:
      "We provide premium starches for various industries, ensuring top-quality performance.",
  },
  {
    image: carousel2,
    alt: "Spices and Seasonings",
    title: "Authentic Spices and Seasonings",
    description:
      "Delivering rich flavors with a wide range of spices and seasonings for every taste.",
  },
  {
    image: carousel3,
    alt: "Food Additives",
    title: "Reliable Food Additives",
    description:
      "Our food additives enhance food safety, texture, and shelf life.",
  },
  {
    image: carousel4,
    alt: "Oils and Fats",
    title: "Premium Oils and Fats",
    description:
      "Offering a variety of oils and fats for food manufacturing and culinary use.",
  },
  {
    image: carousel5,
    alt: "Flour",
    title: "Premium Quality Flour",
    description:
      "Supplying versatile and finely milled flour varieties for baking, cooking, and industrial use.",
  },
  {
    image: carousel6,
    alt: "Table Salt",
    title: "Essential Table Salt",
    description:
      "Pure, refined salt—an everyday essential for cooking, seasoning, and food preservation across industries.",
  },
  {
    image: carousel7,
    alt: "Sodium Bicarbonate",
    title: "Versatile Sodium Bicarbonate",
    description:
      "A multi-purpose ingredient used across food, pharmaceutical, and industrial applications for leavening, cleaning, and more.",
  },
  {
    image: carousel8,
    alt: "Flavorings",
    title: "Rich and Versatile Flavorings",
    description:
      "Enhance taste and aroma with our premium flavorings—crafted to elevate every culinary creation.",
  },
];

const Hero = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img src={item.image} className="d-block w-100" alt={item.alt} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Hero;
