import { motion } from 'framer-motion';

const WhyUs = () => {
  const programmes = [
    {
      title: 'Kindergarten',
      description: 'Our Kindergarten programme at Ambitus International School, the best CBSE school in Jagtial, provides a nurturing environment for early childhood development. Through NEP 2020 aligned play-based learning, sensory exploration, and English communication from day one, we build strong foundations for lifelong learning in Jagtial\'s premier educational institution.',
      image: '/kindergarten.jpg',
      bgColor: 'bg-amber-100', // Gold/Orange brand color (lighter tint)
      textColor: 'text-gray-900',
    },
    {
      title: 'Primary School',
      description: 'The Primary School programme at Ambitus International School strengthens academic foundations through NEP 2020 aligned CBSE curriculum. As Jagtial\'s top international school, we focus on English communication excellence, creative learning, character-building, and holistic development in our Ganesh Nagar campus.',
      image: '/Primary.jpg',
      bgColor: 'bg-sky-100', // Sky Blue brand color (lighter tint)
      textColor: 'text-gray-900',
    },
    {
      title: 'Middle School',
      description: 'Our Middle School programme prepares students for future success through NEP 2020 aligned CBSE education. As the best CBSE school in Jagtial, we emphasize analytical thinking, English communication skills, leadership development, and holistic growth, ensuring students excel academically and personally.',
      image: '/middle.jpg',
      bgColor: 'bg-blue-100', // Navy Blue brand color (lighter tint)
      textColor: 'text-gray-900',
    },
  ];

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
    hidden: { opacity: 0, y: 50 },
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
      id="why-us"
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-content mx-auto px-3 sm:px-6 lg:px-8 min-w-0">
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
            Academic programmes
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-heading font-bold mb-4 text-gray-900 break-words px-1">
            Academic Programmes - NEP 2020 Aligned CBSE Curriculum
          </h2>
        </motion.div>

        {/* Programmes Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {programmes.map((programme, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group ${programme.bgColor} overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 md:p-8 flex flex-col items-center min-h-[340px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[450px] rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[50px]`}
            >
              {/* Circular Image */}
              <div className="flex justify-center mb-3 sm:mb-4 md:mb-5">
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden shadow-xl border-2 sm:border-4 border-white flex-shrink-0">
                  <motion.img
                    src={programme.image}
                    alt={programme.title}
                    className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/school.jpg';
                    }}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className={`text-lg sm:text-xl md:text-2xl font-heading font-bold ${programme.textColor} mb-2 sm:mb-3 md:mb-4 text-center break-words`}>
                {programme.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-sm md:text-base text-gray-700 font-body leading-relaxed text-center break-words line-clamp-6 sm:line-clamp-none">
                {programme.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
