import { motion } from 'framer-motion';
import { FaQuoteLeft, FaAward, FaEye, FaBullseye } from 'react-icons/fa';

const Director = () => {
  return (
    <section
      id="director"
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-navy-blue/5 via-sky-blue/10 to-cyan-50/30 relative overflow-hidden"
    >
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(30, 58, 138) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-content mx-auto px-3 sm:px-6 lg:px-8 relative z-10 min-w-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm sm:text-base font-body font-semibold text-sky-blue mb-2"
          >
            Director's Desk
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-heading font-bold mb-4 text-gray-900 break-words">
            Message from the Director
          </h2>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Left Side: Director's Message Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full min-w-0">
              {/* Top Accent Bar */}
              <div className="h-1.5 sm:h-2 bg-gradient-to-r from-navy-blue via-sky-blue to-cyan-500"></div>

              <div className="p-4 sm:p-6 md:p-8 relative">
                {/* Quote Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 0.1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4"
                >
                  <FaQuoteLeft className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 text-navy-blue" />
                </motion.div>

                {/* Director's Message */}
                <div className="relative z-10">
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-base md:text-lg font-body text-gray-700 leading-relaxed mb-6 italic"
                    style={{ maxWidth: '100%', fontSize: 'clamp(14px, 2vw, 18px)' }}
                  >
                    "Every child is unique, and every child needs care, patience, and the right direction to grow. We do not rush children; we guide them with care."
                  </motion.blockquote>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-sm md:text-base font-body text-gray-600 leading-relaxed mb-6"
                    style={{ fontSize: 'clamp(13px, 1.8vw, 16px)' }}
                  >
                    At <span className="font-bold text-navy-blue">Ambitus International School</span>, Jagtial's best CBSE school, we believe education is not about rushing through the NEP 2020 aligned curriculum, but ensuring each child truly understands and internalizes learning. Our approach, established since 2019 in Ganesh Nagar, Jagtial, is built on patience, care, and personalized attention for every student.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-sm md:text-base font-body text-gray-600 leading-relaxed mb-6"
                    style={{ fontSize: 'clamp(13px, 1.8vw, 16px)' }}
                  >
                    In our safe and encouraging campus environment in Jagtial, children receive the time and support needed to understand, learn correctly, and grow with confidence. This philosophy, combined with our NEP 2020 aligned CBSE curriculum and English communication focus, has established Ambitus International School as the top international school in Jagtial, where parents trust us with their children's future.
                  </motion.p>

                  {/* Director Signature */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="pt-6 border-t-2 border-gray-100"
                  >
                    <h3 className="text-lg md:text-xl font-heading font-bold text-navy-blue mb-2">
                      Shravan Reddy Gaddam
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 font-body font-semibold mb-3">
                      Director, Ambitus International School
                    </p>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-blue/10 via-cyan-50 to-blue-50 rounded-full border-2 border-sky-blue/20 shadow-md"
                    >
                      <FaAward className="w-4 h-4 text-accent-gold" />
                      <span className="text-xs sm:text-sm font-body font-bold text-navy-blue">
                        Leading Excellence Since 2019
                      </span>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Vision and Mission Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative min-w-0"
            >
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full">
                {/* Top Accent Bar */}
                <div className="h-1.5 sm:h-2 bg-gradient-to-r from-navy-blue to-sky-blue"></div>

                <div className="p-4 sm:p-6 md:p-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gradient-to-br from-navy-blue to-sky-blue p-2.5 sm:p-3 rounded-lg w-fit mb-3 sm:mb-4"
                  >
                    <FaEye className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-gray-900 mb-3 sm:mb-4 break-words">
                    Our Vision
                  </h3>

                  <p className="text-sm md:text-base font-body text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.8vw, 16px)' }}>
                    To provide future-ready education that blends CBSE academic excellence, English communication skills, and holistic child development. As Jagtial's best CBSE school, we envision nurturing confident communicators and lifelong learners through NEP 2020 aligned curriculum, excellence, care, and global standards at our Ganesh Nagar campus.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative min-w-0"
            >
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full">
                {/* Top Accent Bar */}
                <div className="h-1.5 sm:h-2 bg-gradient-to-r from-sky-blue to-cyan-500"></div>

                <div className="p-4 sm:p-6 md:p-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-gradient-to-br from-sky-blue to-cyan-500 p-2.5 sm:p-3 rounded-lg w-fit mb-3 sm:mb-4"
                  >
                    <FaBullseye className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-gray-900 mb-3 sm:mb-4 break-words">
                    Our Mission
                  </h3>

                  <p className="text-sm md:text-base font-body text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.8vw, 16px)' }}>
                    To deliver high-quality, child-centric CBSE education with NEP 2020 alignment that focuses on strong conceptual understanding, English communication excellence from day one, and a safe, caring environment. As the best CBSE school in Jagtial, we ensure every child at our Ganesh Nagar campus thrives and reaches their full potential.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Director;
