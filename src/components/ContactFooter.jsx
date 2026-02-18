import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaCalendar,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

const ContactFooter = () => {
  const [formData, setFormData] = useState({
    Parent_Name: '',
    Phone_Number: '',
    Applying_Grade: '',
    Message: '',
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
    const message = formData.Message?.trim() || '';

    if (!name) err.Parent_Name = 'Name is required';
    else if (name.length < 2) err.Parent_Name = 'Name must be at least 2 characters';
    else if (!/^[a-zA-Z\s.'-]+$/.test(name)) err.Parent_Name = 'Name can only contain letters and spaces';

    if (!phone) err.Phone_Number = 'Phone number is required';
    else if (!/^(\+91|0)?[6-9]\d{9}$/.test(phone)) err.Phone_Number = 'Enter a valid 10-digit Indian phone number';

    if (!grade) err.Applying_Grade = 'Please select a grade';

    if (!message) err.Message = 'Message is required';
    else if (message.length < 10) err.Message = 'Message must be at least 10 characters';

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
        setFormData({ Parent_Name: '', Phone_Number: '', Applying_Grade: '', Message: '' });
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
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      >
        <div className="max-w-content mx-auto px-3 sm:px-6 lg:px-8 min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-4 text-gray-800 break-words">
              Get In Touch
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '150px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 sm:h-1.5 bg-gradient-to-r from-navy-blue via-sky-blue to-cyan-500 mx-auto mb-4 sm:mb-6 rounded-full max-w-[120px] sm:max-w-[150px]"
            />
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-body break-words px-1">
              Ready to join the Best CBSE School in Jagtial? Contact us today!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="min-w-0"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-gray-800 mb-4 sm:mb-6 break-words">
                Admission Inquiry Form
              </h3>
              <form
                action="https://formsubmit.co/jagtialstories@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5 bg-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl"
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
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2 font-body"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="Parent_Name"
                    value={formData.Parent_Name}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-gray-50 border focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent font-body text-sm sm:text-base transition-all duration-300 min-w-0 ${errors.Parent_Name ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.Parent_Name && <p className="text-red-600 text-xs mt-1 font-body">{errors.Parent_Name}</p>}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2 font-body"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="Phone_Number"
                    value={formData.Phone_Number}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-gray-50 border focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent font-body text-sm sm:text-base transition-all duration-300 min-w-0 ${errors.Phone_Number ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="e.g. 9948955222"
                  />
                  {errors.Phone_Number && <p className="text-red-600 text-xs mt-1 font-body">{errors.Phone_Number}</p>}
                </div>

                <div>
                  <label
                    htmlFor="grade"
                    className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2 font-body"
                  >
                    Child's Age/Grade *
                  </label>
                  <select
                    id="grade"
                    name="Applying_Grade"
                    value={formData.Applying_Grade}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-gray-50 border focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent font-body text-sm sm:text-base transition-all duration-300 min-w-0 ${errors.Applying_Grade ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="">Select Grade</option>
                    <option value="Pre-KG">Pre-KG</option>
                    <option value="LKG">LKG</option>
                    <option value="UKG">UKG</option>
                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 2">Grade 2</option>
                    <option value="Grade 3">Grade 3</option>
                    <option value="Grade 4">Grade 4</option>
                    <option value="Grade 5">Grade 5</option>
                    <option value="Grade 6">Grade 6</option>
                    <option value="Grade 7">Grade 7</option>
                  </select>
                  {errors.Applying_Grade && <p className="text-red-600 text-xs mt-1 font-body">{errors.Applying_Grade}</p>}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2 font-body"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="Message"
                    rows="3"
                    value={formData.Message}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-gray-50 border focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent font-body text-sm sm:text-base transition-all duration-300 resize-none min-w-0 min-h-[80px] sm:min-h-[100px] ${errors.Message ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter your message"
                  />
                  {errors.Message && <p className="text-red-600 text-xs mt-1 font-body">{errors.Message}</p>}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-accent-gold to-accent-orange text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-heading font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px] touch-manipulation disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
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
            </motion.div>

            {/* Right: Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8 min-w-0"
            >
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-gray-800 mb-4 sm:mb-6 break-words">
                  Contact Information
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="bg-sky-blue p-3 rounded-full mr-4 flex-shrink-0"
                    >
                      <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.div>
                    <div>
                      <p className="font-heading font-bold text-gray-800 mb-1 text-base sm:text-lg">
                        Address
                      </p>
                      <p className="text-gray-600 font-body text-sm sm:text-base">
                        Road no.1, Ganesh Nagar, Jagtial. 505327
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="bg-sky-blue p-3 rounded-full mr-4 flex-shrink-0"
                    >
                      <FaPhone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.div>
                    <div>
                      <p className="font-heading font-bold text-gray-800 mb-1 text-base sm:text-lg">
                        Phone
                      </p>
                      <a
                        href="tel:9948955222"
                        className="text-sky-blue hover:text-navy-blue transition-colors duration-300 font-body text-sm sm:text-base"
                      >
                        99489 55222
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="bg-sky-blue p-3 rounded-full mr-4 flex-shrink-0"
                    >
                      <FaCalendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.div>
                    <div>
                      <p className="font-heading font-bold text-gray-800 mb-1 text-base sm:text-lg">
                        Established
                      </p>
                      <p className="text-gray-600 font-body text-sm sm:text-base">June 2019</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Google Maps */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl min-w-0"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.1234567890123!2d78.91234567890123!3d18.78901234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDQ3JzIwLjQiTiA3OMKwNTQnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin&q=Road+no.1%2C+Ganesh+Nagar%2C+Jagtial%2C+505327"
                  width="100%"
                  height="300"
                  style={{ border: 0, minHeight: '240px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-56 sm:h-64 md:h-72 lg:h-80"
                  title="Ambitus International School Location"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-8 sm:py-12 md:py-16 overflow-hidden">
        <div className="max-w-content mx-auto px-3 sm:px-6 lg:px-8 min-w-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8">
            {/* School Logo & Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="min-w-0"
            >
              <img
                src="/Ambitus logo Vertical.png"
                alt="Ambitus International School Logo"
                className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto max-w-full mb-4 sm:mb-6 object-contain object-left"
              />
              <p className="text-gray-400 text-xs sm:text-sm font-body leading-relaxed break-words">
                Best CBSE School in Jagtial offering NEP 2020 aligned holistic education. Excellence in academics, communication, and holistic development.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-base sm:text-lg md:text-xl font-heading font-bold mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'About', href: '#about' },
                  { name: 'Why Choose Us', href: '#why-us' },
                  { name: "Director's Desk", href: '#director' },
                  { name: 'Testimonials', href: '#testimonials' },
                  { name: 'Contact', href: '#contact' },
                ].map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 font-body text-xs sm:text-sm md:text-base py-1 inline-block touch-manipulation"
                  >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-base sm:text-lg md:text-xl font-heading font-bold mb-3 sm:mb-4">Follow Us</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3 sm:space-x-0 mb-4 sm:mb-6">
                <motion.a
                  href="https://www.facebook.com/profile.php?id=100057077335962"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/ambitusinternational_school/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:opacity-90 transition-colors duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/@ambitusinternationalschooljgl"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                </motion.a>
              </div>
              <div className="text-gray-400 text-sm font-body space-y-1">
                <p>Road no.1, Ganesh Nagar</p>
                <p>Jagtial. 505327</p>
                <p className="mt-2">
                  <a
                    href="tel:9948955222"
                    className="hover:text-white transition-colors duration-300"
                  >
                    99489 55222
                  </a>
                </p>
                <p>Established: June 2019</p>
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400 text-[10px] sm:text-xs md:text-sm font-body break-words px-2 space-y-1"
          >
            <p>&copy; 2026 Ambitus International School. All rights reserved. | Best CBSE School in Jagtial</p>
            <p>
              Developed by{' '}
              <a
                href="https://viitortechnologies.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 transition-colors duration-300 underline underline-offset-2"
              >
                Viitor Technologies
              </a>
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
