import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programmes', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center px-3 sm:px-6 lg:px-8 pt-2 sm:pt-5 md:pt-6"
    >
      {/* Contained Box Model Header */}
      <motion.nav
        className={`max-w-content w-full rounded-xl sm:rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 sm:py-3 md:py-4'
            : 'bg-white/90 backdrop-blur-sm py-2 sm:py-3 md:py-4'
        }`}
      >
        <div className="px-3 sm:px-6 lg:px-8 min-w-0">
          <div className="flex items-center justify-between gap-2 min-w-0">
            {/* Logo */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center flex-shrink-0 min-w-0 max-w-[45%] sm:max-w-none"
            >
              <img
                src="/Ambitus logo Horizontal.png"
                alt="Ambitus International School - Best CBSE School in Jagtial"
                className="h-8 sm:h-12 md:h-14 w-auto max-h-12 sm:max-h-14 object-contain object-left"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/Ambitus logo Horizontal.png';
                }}
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="relative group px-3 xl:px-4 py-2 text-gray-700 font-body font-medium hover:text-navy-blue transition-colors duration-300 text-sm xl:text-base"
                >
                  {link.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-blue group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                  />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block px-5 xl:px-6 py-2 xl:py-2.5 bg-gradient-to-r from-accent-gold to-accent-orange text-white rounded-lg font-heading font-bold text-sm xl:text-base shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ borderRadius: '8px' }}
            >
              Admissions Open
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 focus:outline-none p-2.5 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="w-6 h-6" />
                ) : (
                  <FaBars className="w-6 h-6" />
                )}
              </motion.div>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden bg-white border-t border-gray-100 mt-4"
              >
                <div className="py-4 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-700 hover:text-sky-blue font-body font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-base"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                  <motion.a
                    href="#contact"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="block px-6 py-3 bg-gradient-to-r from-accent-gold to-accent-orange text-white rounded-lg font-heading font-bold text-center mt-4"
                    style={{ borderRadius: '8px' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Admissions Open
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Navbar;
