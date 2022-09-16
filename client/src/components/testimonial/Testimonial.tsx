import React, { useState } from "react";
import "./testimonial.css";
import { Testimonials } from "../../util";
import test from "../../mock/testimonial.json";

const Testimonial: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonials[]>(test);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
      {testimonials.map((item, index) => (
        <div
          className={`carousel ${index === currentIndex && "carousel-active"}`}
        >
          <img src={item.cover} alt="bangles" className="testimonial-img" />
          <blockquote className="testimonial">
            <p className="testimonial-text">
              <span className="testimonial-quot">&#10077; </span> {item.text}
            </p>
            <p className="testimonial-name">&mdash; {item.name}</p>
          </blockquote>
        </div>
      ))}
      </div>
      <div className="dots">
        <button
          className={`dot ${currentIndex === 1 && "dot-white"}`}
          onClick={() => setCurrentIndex(0)}
        ></button>
        <button
          className={`dot ${currentIndex === 0 && "dot-white"}`}
          onClick={() => setCurrentIndex(1)}
        ></button>
      </div>
    </section>
  );
};

export default Testimonial;
