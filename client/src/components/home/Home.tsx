import React from "react";
import "./home.css";
import stain from "../../images/stainless.jpg";
import Testimonial from "../testimonial/Testimonial";

const Home: React.FC = () => {
  return (
    <main className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">Jewelry Making</h1>
          <p className="hero-description">
            Have you ever seen an expensive necklace in a store and thought, 'I
            could make that at home'? Have art supplies ever inspired you to
            create your own accessories and jewelry?
          </p>
          <p className="hero-description">
            If you have, you're not alone in your search for the perfect DIY
            hobby that's also an art form. Millions of women are crafting
            handmade fashion jewelry at home for personal wear, and some have
            even turned their hobbies into thriving businesses.
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
              If you're interested in offering a class or selling a project,
              you've come to the right place.
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
              Are you searching for a project to work on independently or with a
              friend?
            </p>
          </div>
        </div>
      </div>
      <Testimonial />
    </main>
  );
};

export default Home;
