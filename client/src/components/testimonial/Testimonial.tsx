import React, { useState } from "react";
import "./testimonial.css";
import { Testimonials } from "../../util";
import six from "../../images/customer-6.jpg";
import three from "../../images/customer-3.jpg";




const Testimonial: React.FC = () => {
  const [testimonials,setTestimonials] = useState<Testimonials>()

  return (
    <section>
      <div className="carousel">
        <img src={six} alt="bangles" className="testimonial-img" />
        <blockquote className="testimonial">
          <p className="testimonial-text">
            <span className="testimonial-quot">&#10077; </span> The AI algorithm
            is very good, it chooses the project for me every time. It's amazing
            it brings you the right project any time! I also invited my friend.
          </p>
          <p className="testimonial-name">&mdash; Nina Hadley</p>
        </blockquote>
        <img src={three} alt="bangles" className="testimonial-img" />
        <blockquote className="testimonial">
          <p className="testimonial-text">
            <span className="testimonial-quot">&#10077; </span> I got smartKids
            for the my daughter and I, and it fills up so much time being
            tother! Plus, they send everything you need to start the project.
          </p>
          <p className="testimonial-name">&mdash; simin York</p>
        </blockquote>

        <div className="dots">
          <button className="dot dot-white"></button>
          <button className="dot"></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
