import React from "react";
import "./home.css";
import stain from "../../images/stainless.jpg";

const Home:React.FC = () => {
  return (
    <main className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">Jewelry Making</h1>
          <p className="hero-description">
            Have you ever spotted an expensive necklace at a store and said to
            yourself- ‘I could make that at home myself’? And have you ever
            looked at art supplies and been inspired to create accessories and
            jewelry of your own design?
          </p>
          <p className="hero-description">
            If you have, then you’re not alone in your search for the perfect
            DIY hobby that is also a form of art. There are millions of women
            who are creating handmade fashion jewelry at home for personal
            wear, and some have even successfully turned their hobbies into a
            flourishing business.
          </p>
        </div>
        <div className="hero-img-box">
          <img src={stain} alt="stainless" className="hero-img" />
        </div>
      </div>
    </main>
  );
};

export default Home;
