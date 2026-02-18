import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Topbar = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="hidden md:block bg-navy-blue text-white py-2"
    >
      <div className="max-w-content mx-auto px-3 sm:px-6 lg:px-8 min-w-0">
        <div className="flex flex-wrap justify-between items-center gap-2 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 min-w-0">
            <a href="tel:9948955222" className="flex items-center gap-1.5 sm:gap-2 hover:text-sky-blue transition-colors shrink-0">
              <FaPhone className="w-3 h-3 flex-shrink-0" />
              <span>99489 55222</span>
            </a>
            <a href="mailto:jagtialstories@gmail.com" className="flex items-center gap-1.5 sm:gap-2 hover:text-sky-blue transition-colors truncate min-w-0 max-w-full">
              <FaEnvelope className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">jagtialstories@gmail.com</span>
            </a>
          </div>
          <div className="text-[10px] sm:text-xs shrink-0">
            <span className="text-sky-blue font-semibold">Established:</span> June 2019
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Topbar;
