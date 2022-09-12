import React from "react";
import "./home.css";
import stain from "../../images/stainless.jpg";

const Home: React.FC = () => {
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
            who are creating handmade fashion jewelry at home for personal wear,
            and some have even successfully turned their hobbies into a
            flourishing business.
          </p>
        </div>
        <div className="hero-img-box">
          <img src={stain} alt="stainless" className="hero-img" />
        </div>
      </div>
      <div className="section-howWorks">
        <div className="container">
          <span className="subheading">How it works</span>
          <h2 className="heading-secondary">
            There are two sections in this app
          </h2>
        </div>
        <div className="container grid grid--2-cols grid--center-v">
          <div className="step-text-box">
            <h3 className="subheading">Become a Jewelry Constructor </h3>
            <p className="home-description">
              If you would like to have a class or you have a project that you
              want to sell it then you are in the right place.
            </p>
          </div>
          <div className="step-number-box">
            <p className="step-number">01</p>
          </div>
               
          <div className="step-number-box">
            <p className="step-number">02</p>
          </div>
          <div className="step-text-box">
            <h3 className="subheading">Become a Jewelry maker</h3>
            <p className="home-description">
              Are you looking for a project to do with a  Constructor or with a friend?
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
