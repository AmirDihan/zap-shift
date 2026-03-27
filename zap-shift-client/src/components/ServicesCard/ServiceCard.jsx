import { motion } from "motion/react"
import {
  FaTruck,
  FaGlobe,
  FaWarehouse,
  FaMoneyBillWave,
  FaBuilding,
  FaUndo,
} from "react-icons/fa";

const iconMap = {
  delivery: <FaTruck />,
  nationwide: <FaGlobe />,
  fulfillment: <FaWarehouse />,
  cod: <FaMoneyBillWave />,
  corporate: <FaBuilding />,
  return: <FaUndo />,
};

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className={`p-6 rounded-2xl backdrop-blur-lg border shadow-lg cursor-pointer bg-white text-black hover:bg-primary`}
    >
      {/* Icon */}
      <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl
        bg-white/20 backdrop-blur-md">
        {iconMap[service.icon]}
      </div>

      <h3 className="font-bold text-lg mb-2">{service.title}</h3>
      <p className="text-sm opacity-80">{service.description}</p>
    </motion.div>
  );
};

export default ServiceCard;