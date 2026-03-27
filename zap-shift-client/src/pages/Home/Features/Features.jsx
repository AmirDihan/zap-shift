import React from "react";

import live_tracking from "../../../assets/live-tracking.png";
import safe_delivery from "../../../assets/safe-delivery.png";
import FeaturesCard from "./../../../components/FeaturesCard/FeaturesCard";
const features = [
  {
    id: 1,
    img: live_tracking,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
  },
  {
    id: 2,
    img: safe_delivery,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    id: 3,
    img: safe_delivery,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];

const Features = () => {
  return (
    <div className="space-y-5">
      {features.map((feature, index) => (
        <FeaturesCard feature={feature} key={index}></FeaturesCard>
      ))}
    </div>
  );
};

export default Features;
