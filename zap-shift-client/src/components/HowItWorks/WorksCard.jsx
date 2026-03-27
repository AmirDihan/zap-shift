import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { motion} from "framer-motion";

const WorksCard = ({ work, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="card bg-base-100 shadow-sm rounded-xl text-secondary"
    >
      <div className="card-body">
        <CiDeliveryTruck className="text-4xl" />
        <h2 className="card-title">{work.title}</h2>
        <p>{work.description}</p>
      </div>
    </motion.div>
  );
};

export default WorksCard;
