import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Parent of',
      child: 'Aarav, Grade 3',
      rating: 5,
      text: 'Ambitus International School, the best CBSE school in Jagtial, has transformed my child\'s English communication skills beyond expectations. Located in Ganesh Nagar, this NEP 2020 aligned institution provides exceptional CBSE education. The teachers are patient, caring, and the safe campus environment gives complete peace of mind. As Jagtial parents, we couldn\'t have asked for a better school. The individual attention each child receives is remarkable. Highly recommended for parents seeking top CBSE education in Jagtial!',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Parent of',
      child: 'Ananya, Grade 5',
      rating: 5,
      text: 'The individual attention at Ambitus International School, Jagtial\'s premier CBSE institution, is truly remarkable. My daughter has shown tremendous growth in academics and confidence. The school lives up to its reputation as the best CBSE school in Jagtial, Telangana. The NEP 2020 aligned curriculum and English communication program from day one have been exceptional. The caring staff at our Ganesh Nagar campus makes all the difference. We are grateful for choosing this top international school in Jagtial.',
    },
    {
      name: 'Sunita Reddy',
      role: 'Parent of',
      child: 'Rohan, Grade 2',
      rating: 5,
      text: 'Best decision for our child\'s education! Ambitus International School, the best CBSE school in Jagtial, has exceeded all expectations. The NEP 2020 aligned CBSE curriculum and English communication program from day one are exceptional. The safe, secure Ganesh Nagar campus and holistic approach make it Jagtial\'s top international school. Our child loves attending this premier CBSE institution in Jagtial, Telangana, every day!',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="testimonials"
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-content mx-auto px-3 sm:px-6 lg:px-8 min-w-0">
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
            Testimonials
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-heading font-bold mb-4 text-gray-900 break-words">
            What Parents Say
          </h2>
          <p className="text-sm sm:text-sm md:text-base text-gray-600 font-body max-w-2xl mx-auto px-1">
            Real experiences from parents — Why Ambitus International School is Jagtial's Best CBSE School | Trusted by Families in Ganesh Nagar, Jagtial, Telangana
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 relative min-w-0"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-sky-blue/20">
                <FaQuoteLeft className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                  >
                    <FaStar className="w-5 h-5 fill-accent-gold text-accent-gold" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-5 md:mb-6 font-body relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-3 md:pt-4">
                <p className="font-heading font-bold text-gray-800 text-base md:text-lg mb-1">
                  {testimonial.name}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 font-body">
                  <span className="font-semibold">{testimonial.role}</span> {testimonial.child}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel View */}
        <div className="md:hidden relative overflow-hidden min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg border border-blue-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-sky-blue/20">
                <FaQuoteLeft className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="w-5 h-5 fill-accent-gold text-accent-gold"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-5 md:mb-6 font-body relative z-10">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-3 md:pt-4">
                <p className="font-heading font-bold text-gray-800 text-base md:text-lg mb-1">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 font-body">
                  <span className="font-semibold">{testimonials[currentIndex].role}</span> {testimonials[currentIndex].child}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Indicators - touch-friendly 44px target */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <span
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-sky-blue w-8 h-2 sm:h-2.5'
                      : 'bg-gray-300 w-2 h-2 sm:h-2.5'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
