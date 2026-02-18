import { motion } from 'framer-motion';
import { FaLightbulb, FaUsers, FaHeart } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: FaLightbulb,
      title: 'Innovative Learning',
    },
    {
      icon: FaUsers,
      title: 'Holistic Development',
    },
    {
      icon: FaHeart,
      title: 'Community Impact',
    },
  ];

  return (
    <section
      id="about"
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-content mx-auto px-3 sm:px-6 lg:px-8 min-w-0">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm sm:text-base font-body font-semibold text-sky-blue mb-2"
            >
              About
            </motion.span>
            
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-heading font-bold text-gray-900 mb-3 leading-tight break-words">
              About Ambitus International School - Best CBSE School in Jagtial
            </h2>
            
            <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-semibold text-gray-700 mb-4 break-words">
              Excellence in Education Since 2019 | NEP 2020 Aligned CBSE Curriculum
            </h3>
            
            <p className="text-sm sm:text-base text-gray-600 font-body leading-relaxed mb-5 break-words">
              Ambitus International School, established in June 2019, is recognized as the <strong className="text-gray-900">best CBSE school in Jagtial, Telangana</strong>. Located in Ganesh Nagar, our institution offers NEP 2020 aligned education with a focus on English communication, holistic development, and academic excellence. As a leading international school in Jagtial, we provide world-class CBSE education that prepares students for global opportunities while maintaining strong Indian values.
            </p>

            {/* Feature Points */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 min-w-0"
                >
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-sky-blue to-navy-blue p-2 sm:p-2.5 rounded-lg">
                      <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>
                  <h4 className="text-sm sm:text-base font-heading font-bold text-gray-900 break-words">
                    {feature.title}
                  </h4>
                </motion.div>
              ))}
            </div>

            {/* Know More Button */}
            <motion.a
              href="#why-us"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-5 md:mt-6 px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-accent-gold to-accent-orange text-white rounded-lg font-heading font-bold text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ borderRadius: '8px' }}
            >
              Know more
            </motion.a>
          </motion.div>

          {/* Right: Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full min-w-0 aspect-[4/3] max-w-full sm:max-w-xl lg:max-w-2xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-2xl"
                style={{ borderRadius: '16px' }}
              >
                <img
                  src="/school.jpg"
                  alt="Ambitus International School"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/school.jpg';
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
