import React from "react";
import ServiceCard from "../../../components/ServicesCard/ServiceCard";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Express & Standard Delivery",
      description: "Fast delivery within 24–72 hours with express options.",
      icon: "delivery",
    },
    {
      id: 2,
      title: "Nationwide Delivery",
      description: "Delivery available in every district across the country.",
      icon: "nationwide",
      highlight: true,
    },
    {
      id: 3,
      title: "Fulfillment Solution",
      description: "Inventory, packaging, and order processing solutions.",
      icon: "fulfillment",
    },
    {
      id: 4,
      title: "Cash on Home Delivery",
      description: "Secure cash collection at doorstep across Bangladesh.",
      icon: "cod",
    },
    {
      id: 5,
      title: "Corporate Service",
      description: "Advanced logistics support for business clients.",
      icon: "corporate",
    },
    {
      id: 6,
      title: "Parcel Return",
      description: "Easy product return and exchange system.",
      icon: "return",
    },
  ];
  return (
    <div className="bg-secondary text-white py-16 px-5 text-center my-10 rounded-2xl">
      <h2 className="text-3xl font-bold mb-4">Our Services</h2>
      <p className="mb-10">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to <br /> business shipments — we deliver
        on time, every time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
