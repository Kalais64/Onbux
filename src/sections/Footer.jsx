import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: '📷',
      url: 'https://instagram.com/onbux.roblox',
      color: 'from-pink-500 to-purple-500'
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      url: 'https://wa.me/628xxxxxx',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Discord',
      icon: '🎮',
      url: '#',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:support@onbux.com',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Beli Robux', href: '#home' },
    { name: 'Jual Robux', href: '#sell' },
    { name: 'Creative Studio', href: '#studio' }
  ];

  const services = [
    'Robux Calculator',
    'Buyer Rankings',
    'Map Design',
    'Game Development',
    'UI/UX Design',
    'System Scripting'
  ];

  return (
    <footer className="relative bg-white border-t border-gray-200">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-10 text-4xl opacity-10 text-blue-500"
        >
          💎
        </motion.div>
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 text-3xl opacity-10 text-blue-500"
        >
          🎮
        </motion.div>
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-1/4 text-2xl opacity-10 text-blue-500"
        >
          ⭐
        </motion.div>
      </div>

      <div className="section-padding relative z-10">
        <div className="container-custom">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-blue rounded-xl flex items-center justify-center text-2xl">
                  🌌
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">ONBUX</h3>
                  <p className="text-sm text-gray-600">Robux Marketplace & Creative Studio</p>
                </div>
              </div>
              
              <p className="text-black mb-6 max-w-md">
                Your trusted Robux marketplace & creative studio. Kami menyediakan layanan jual beli Robux 
                yang aman dan terpercaya, serta jasa pembuatan game Roblox profesional.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary-blue text-white text-sm font-medium hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{social.icon}</span>
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-black mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-black hover:text-primary-blue transition-colors duration-300 flex items-center space-x-2"
                    >
                      <span className="w-1 h-1 bg-primary-blue rounded-full"></span>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-black mb-4">Our Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="text-black text-sm flex items-center space-x-2">
                    <span className="w-1 h-1 bg-primary-blue rounded-full"></span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-2xl font-bold text-primary-blue mb-1">1000+</div>
              <div className="text-sm text-black">Happy Customers</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-2xl font-bold text-primary-blue mb-1">50M+</div>
              <div className="text-sm text-black">Robux Traded</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-2xl font-bold text-primary-blue mb-1">150+</div>
              <div className="text-sm text-black">Projects Done</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-2xl font-bold text-primary-blue mb-1">24/7</div>
              <div className="text-sm text-black">Support</div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 mb-12 border border-gray-200"
          >
            <div className="text-center">
              <h4 className="text-2xl font-bold text-black mb-4">🔔 Stay Updated!</h4>
              <p className="text-black mb-6">
                Dapatkan update terbaru tentang promo Robux dan project portfolio kami
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-full text-black placeholder-gray-500 focus:outline-none focus:border-primary-blue"
                />
                <motion.button
                  className="bg-black text-white font-bold px-6 py-3 rounded-full border-2 border-black hover:bg-white hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center"
          >
            <div className="text-black text-sm mb-4 md:mb-0">
              <strong className="text-black">ONBUX © 2025</strong> - All rights reserved. 
              Made with ❤️ for Roblox Community
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-black">
              <a href="#" className="hover:text-primary-blue transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-blue transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-blue transition-colors">Support</a>
            </div>
          </motion.div>

          {/* Scroll to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center border-2 border-black hover:bg-white hover:text-black transition-all duration-300 z-50"
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;