import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import product1 from "../assets/Native-Starches-p.jpg";
import product2 from "../assets/Sodium-Bicarbonate-p.jpg";
import product3 from "../assets/Oil-Fats-p.jpg";
import product4 from "../assets/spices-p.jpg";
import product5 from "../assets/Table-Salt-p.jpg";
import product6 from "../assets/Flavorings-p.jpg";
import product7 from "../assets/Glucose-Syrupe-p.jpg";
import product8 from "../assets/Protein-p.jpg";
import product9 from "../assets/Modified-Starches-p.jpg";
import product10 from "../assets/flour-p.jpg";
import product11 from "../assets/Food-Additives-p.jpg";
import product12 from "../assets/Dextrose-Monohydrate-p.jpg";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const cardRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = cardRefs.current;

    gsap.set(cards, { opacity: 0, y: 50 });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  const cards = [
    { id: 1, image: product1, name: "Native Starches" },
    { id: 2, image: product2, name: "Sodium Bicarbonate" },
    { id: 3, image: product3, name: "Oil & Fats" },
    { id: 4, image: product4, name: "Spices" },
    { id: 5, image: product5, name: "Table Salt" },
    { id: 6, image: product6, name: "Flavorings" },
    { id: 7, image: product7, name: "Glucose Syrup" },
    { id: 8, image: product8, name: "Textured Protein" },
    { id: 9, image: product9, name: "Modified Starches" },
    { id: 10, image: product10, name: "Flour" },
    { id: 11, image: product11, name: "Food Additives" },
    { id: 12, image: product12, name: "Dextrose Monohydrate" },
  ];

  return (
    <div id="products-section" className="container-fluid team py-5">
      <div className="container py-5">
        <h1 className="heading text-center mb-5 fs-48 Recoleta">
          Our Products
        </h1>
        <div className="row g-4" ref={containerRef}>
          {cards.map((card, index) => (
            <div
              className="col-md-6 col-lg-6 col-xl-4"
              key={card.id}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <div className="item p-4 pt-0">
                <div
                  className="item-img"
                  style={{ minHeight: "350px", height: "350px" }}
                >
                  <img
                    src={card.image}
                    className="img-fluid rounded w-100 cursor-pointer"
                    alt="Image"
                    style={{ objectFit: "cover", height: "100%" }}
                  />
                </div>
                <div
                  className="item-content pt-4 d-flex justify-content-center align-items-center flex-column"
                  style={{ height: "100%" }}
                >
                  <h4 className="text-center Raleway fw-bold">{card.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
