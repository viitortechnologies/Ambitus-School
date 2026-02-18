import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle, FaAward } from 'react-icons/fa';
import { useState } from 'react';

const Hero = () => {
  const [formData, setFormData] = useState({
    Parent_Name: '',
    Phone_Number: '',
    Applying_Grade: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const err = {};
    const name = formData.Parent_Name?.trim() || '';
    const phone = formData.Phone_Number?.trim().replace(/\s/g, '') || '';
    const grade = formData.Applying_Grade?.trim() || '';

    if (!name) err.Parent_Name = 'Name is required';
    else if (name.length < 2) err.Parent_Name = 'Name must be at least 2 characters';
    else if (!/^[a-zA-Z\s.'-]+$/.test(name)) err.Parent_Name = 'Name can only contain letters and spaces';

    if (!phone) err.Phone_Number = 'Phone number is required';
    else if (!/^(\+91|0)?[6-9]\d{9}$/.test(phone)) err.Phone_Number = 'Enter a valid 10-digit Indian phone number';

    if (!grade) err.Applying_Grade = 'Please select a grade';

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setSubmitSuccess(false);
    setSubmitError('');
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError('');
    setErrors({});
    try {
      const form = e.target;
      const formDataObj = new FormData(form);
      formDataObj.append('_ajax', 'true');
      const params = new URLSearchParams(formDataObj);
      const res = await fetch('https://formsubmit.co/jagtialstories@gmail.com', {
        method: 'POST',
        body: params,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
      if (res.ok) {
        setSubmitSuccess(true);
        setFormData({ Parent_Name: '', Phone_Number: '', Applying_Grade: '' });
      } else {
        setSubmitError('Something went wrong. Please try again.');
      }
    } catch {
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[100dvh] min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-navy-blue via-blue-700 to-sky-blue pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-10"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} 
        />
      </div>

      {/* Content - scrollable on mobile so form is reachable */}
      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-10 w-full min-w-0 flex items-center py-6 sm:py-8 md:py-10 overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-8 lg:gap-10 xl:gap-12 items-center w-full min-w-0">
          {/* Left: Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-white"
          >
            {/* Single badge: Best school + Admissions together */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-3.5 sm:px-4 md:px-5 py-2 sm:py-2 md:py-2.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-4 sm:mb-4"
            >
              <FaAward className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-accent-gold flex-shrink-0" />
              <span className="font-heading font-bold text-xs sm:text-sm md:text-base whitespace-nowrap">
                Best School in Jagtial
              </span>
              <span className="text-white/40 hidden sm:inline">|</span>
              <span className="font-heading font-semibold text-xs sm:text-sm md:text-base text-accent-gold whitespace-nowrap">
                Admissions Open 2026-27
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-heading font-bold mb-3 sm:mb-4 leading-[1.2] tracking-tight break-words"
            >
              Rooted in Values,
              <br className="sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-blue to-cyan-300">
                Rising with Vision
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
              className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-4 text-blue-100 font-body font-light leading-relaxed max-w-xl"
            >
              Jagtial's Premier CBSE School: NEP 2020 Aligned Education with English Communication Excellence Since 2019
            </motion.p>

            {/* Feature Highlights - wrap on small screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
              className="flex flex-wrap items-center justify-start gap-x-2 gap-y-1.5 sm:gap-2 md:gap-3 mb-5 sm:mb-5 text-xs sm:text-sm md:text-base text-blue-200 font-body"
            >
              <span className="font-semibold">Best CBSE School Jagtial</span>
              <span className="text-white/40 hidden sm:inline">|</span>
              <span className="font-semibold">NEP 2020 Curriculum</span>
              <span className="text-white/40 hidden sm:inline">|</span>
              <span className="font-semibold">English Medium</span>
              <span className="text-white/40 hidden sm:inline">|</span>
              <span className="font-semibold">Ganesh Nagar Location</span>
            </motion.div>

            {/* CTA Buttons - full width on mobile, touch-friendly */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-3 w-full sm:w-auto"
            >
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-3 md:py-3.5 min-h-[48px] flex items-center justify-center gap-2 bg-white text-navy-blue rounded-lg font-heading font-bold text-sm sm:text-sm md:text-base lg:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 touch-manipulation"
                style={{ borderRadius: '8px' }}
              >
                Explore More
                <FaArrowRight className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-3 md:py-3.5 min-h-[48px] flex items-center justify-center bg-gradient-to-r from-accent-gold to-accent-orange text-white rounded-lg font-heading font-bold text-sm sm:text-sm md:text-base lg:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 touch-manipulation"
                style={{ borderRadius: '8px' }}
              >
                Apply Now
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Enquiry Form - stacks below content on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            className="w-full max-w-full lg:max-w-md mt-2 sm:mt-6 lg:mt-0 min-w-0 order-2 lg:order-none"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl p-4 sm:p-5 md:p-6 lg:p-7 border border-white/20">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-2 sm:mb-2">
                Enquire Now
              </h3>
              <p className="text-gray-600 font-body mb-4 sm:mb-5 text-sm sm:text-sm">
                Get in touch with us for admissions
              </p>
              
              <form
                action="https://formsubmit.co/jagtialstories@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-3 sm:space-y-3"
              >
                <input
                  type="hidden"
                  name="_captcha"
                  value="false"
                />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Admission Inquiry - Ambitus Website"
                />
                <input
                  type="hidden"
                  name="_next"
                  value="?success=true"
                />

                <div>
                  <label
                    htmlFor="hero-name"
                    className="block text-sm font-semibold text-gray-700 mb-1.5 font-body"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="hero-name"
                    name="Parent_Name"
                    value={formData.Parent_Name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-50 border font-body text-base sm:text-sm md:text-base transition-all duration-300 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent ${errors.Parent_Name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter your name"
                    style={{ borderRadius: '8px' }}
                  />
                  {errors.Parent_Name && <p className="text-red-600 text-xs mt-1 font-body">{errors.Parent_Name}</p>}
                </div>

                <div>
                  <label
                    htmlFor="hero-phone"
                    className="block text-sm font-semibold text-gray-700 mb-1.5 font-body"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="hero-phone"
                    name="Phone_Number"
                    value={formData.Phone_Number}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-50 border font-body text-base sm:text-sm md:text-base transition-all duration-300 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent ${errors.Phone_Number ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="e.g. 9948955222"
                    style={{ borderRadius: '8px' }}
                  />
                  {errors.Phone_Number && <p className="text-red-600 text-xs mt-1 font-body">{errors.Phone_Number}</p>}
                </div>

                <div>
                  <label
                    htmlFor="hero-grade"
                    className="block text-sm font-semibold text-gray-700 mb-1.5 font-body"
                  >
                    Applying Grade *
                  </label>
                  <select
                    id="hero-grade"
                    name="Applying_Grade"
                    value={formData.Applying_Grade}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-50 border font-body text-base sm:text-sm md:text-base transition-all duration-300 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent ${errors.Applying_Grade ? 'border-red-500' : 'border-gray-300'}`}
                    style={{ borderRadius: '8px' }}
                  >
                    <option value="">Select Grade</option>
                    <option value="Pre-KG">Pre-KG</option>
                    <option value="LKG">LKG</option>
                    <option value="UKG">UKG</option>
                    <option value="Grade I">Grade I</option>
                    <option value="Grade II">Grade II</option>
                    <option value="Grade III">Grade III</option>
                    <option value="Grade IV">Grade IV</option>
                    <option value="Grade V">Grade V</option>
                    <option value="Grade VI">Grade VI</option>
                    <option value="Grade VII">Grade VII</option>
                  </select>
                  {errors.Applying_Grade && <p className="text-red-600 text-xs mt-1 font-body">{errors.Applying_Grade}</p>}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-accent-gold to-accent-orange text-white px-4 sm:px-5 md:px-6 py-3 sm:py-3 md:py-3.5 min-h-[48px] rounded-lg font-heading font-bold text-sm sm:text-sm md:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 touch-manipulation disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ borderRadius: '8px' }}
                >
                  {isSubmitting ? 'Submitting...' : (
                    <>
                      <FaCheckCircle className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                      Submit
                    </>
                  )}
                </motion.button>
                {submitSuccess && (
                  <p className="text-green-600 font-body font-semibold text-sm sm:text-base text-center mt-3">
                    Thank you! Your enquiry has been submitted successfully. We will contact you soon.
                  </p>
                )}
                {submitError && (
                  <p className="text-red-600 font-body font-semibold text-sm sm:text-base text-center mt-3">
                    {submitError}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
