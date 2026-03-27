import React from "react";
import { motion } from "motion/react";

const FeaturesCard = ({ feature }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="flex gap-10 p-8 items-center bg-white rounded-2xl"
    >
      <div className="border-r-2 border-dotted border-secondary pr-10">
        <img src={feature.img} alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-secondary">{feature.title}</h3>
        <p className="mt-5 text-secondary">{feature.description}</p>
      </div>
    </motion.div>
  );
};

export default FeaturesCard;
