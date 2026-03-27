import React from "react";
import merchant_bg from "../../../assets/be-a-merchant-bg.png";
import merchant_location from "../../../assets/location-merchant.png";

const Merchant = () => {
  return (
    <div className="bg-secondary flex flex-col md:flex-row p-20 rounded-2xl bg-top bg-no-repeat" style={{ backgroundImage: `url(${merchant_bg})` }}>
      <div className="space-y-4 w-2/3">
        <h3 className="text-3xl font-bold text-white">
          Merchant and Customer Satisfaction <br /> is Our First Priority
        </h3>
        <p className="text-white">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Pathao courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>
        <button className="btn rounded-3xl bg-primary mr-4">Become a Merchant</button>
        <button className="btn rounded-3xl bg-transparent border-primary text-primary mb-4">Earn with ZapShift Courier</button>
      </div>
      <div>
        <img src={merchant_location} alt="" />
      </div>
    </div>
  );
};

export default Merchant;
