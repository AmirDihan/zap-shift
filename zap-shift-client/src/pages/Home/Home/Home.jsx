import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import HowItWorks from "../HowItWorks/HowItWorks";
import Brands from "../Brands/Brands";
import Features from "../Features/Features";
import Merchant from "../Merchant/Merchant";
import Reviews from "../Reviews/Reviews";
import Faq from "../Faq/Faq";

const reviewPromise = fetch('../../../../public/data/reviews.json').then(res => res.json())

const Home = () => {
  return (
    <div>
      {/* Banner section */}
      <Banner></Banner>
      {/* How it works section */}
      <HowItWorks></HowItWorks>
      {/* Our Services section */}
      <Services></Services>
      {/* Brands section */}
      <Brands></Brands>
      {/* Special features section */}
      <hr className="border-dotted border-[#03373D] mb-10" />
      <Features></Features>
      <hr className="border-dotted border-[#03373D] my-10" />
      {/* Merchant section */}
      <Merchant></Merchant>
      {/* Reviews section */}
      <Reviews reviewPromise={reviewPromise}></Reviews>
      {/* FAQ section */}
      <Faq></Faq>
    </div>
  );
};

export default Home;
