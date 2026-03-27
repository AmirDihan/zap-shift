import React from "react";
import WorksCard from './../../../components/HowItWorks/WorksCard';

const HowItWorks = () => {
  const howItWorksData = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      description:
        "Schedule a pickup from your location and we’ll deliver your package safely to its destination.",
      icon: "pick-drop",
    },
    {
      id: 2,
      title: "Cash On Delivery",
      description:
        "Collect payment from customers at delivery time and receive your funds quickly and securely.",
      icon: "cod",
    },
    {
      id: 3,
      title: "Delivery Hub",
      description:
        "Use our centralized hubs for faster sorting, tracking, and efficient shipment handling.",
      icon: "hub",
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      description:
        "Business-friendly shipping solutions designed for SMEs and corporate clients with bulk delivery support.",
      icon: "corporate",
    },
  ];
  return (
    <div className="p-10">
      <h3 className="text-3xl mb-5 text-secondary font-bold">How It Works</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {howItWorksData.map((work, index) => (
          <WorksCard work={work} key={index}></WorksCard>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
