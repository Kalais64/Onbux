import React from 'react';
import { motion } from 'framer-motion';
import RobuxCalculator from '../components/RobuxCalculator';
import BuyerRankings from '../components/BuyerRankings';

const HomeSection = () => {
  const features = [
    {
      icon: '💰',
      title: 'Harga Real-time & Transparan',
      description: 'Tidak ada biaya tersembunyi, semua harga jelas dan update real-time'
    },
    {
      icon: '⚡',
      title: 'Sistem Verifikasi Cepat',
      description: 'Proses verifikasi otomatis dalam hitungan menit'
    },
    {
      icon: '🎁',
      title: 'Cashback Loyalitas',
      description: 'Dapatkan cashback untuk setiap pembelian Robux'
    },
    {
      icon: '🛡️',
      title: 'Komunitas Terpercaya',
      description: 'Bergabung dengan ribuan player Roblox Indonesia'
    }
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Content */}
      <div className="relative z-10 section-padding pt-32">
        <div className="container-custom">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="font-orbitron text-primary-blue">Beli Robux</span>
              <br />
              <span className="text-black">Mudah & Aman</span>
              <br />
              <span className="text-primary-blue">di ONBUX</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl mx-auto mb-8"
            >
              <p className="text-xl md:text-2xl text-gray-700 mb-4">
                Dapatkan Robux dengan harga terbaik dan transparansi penuh.
              </p>
              <p className="text-lg text-gray-600">
                Hitung pajak otomatis dan lihat ranking pembeli top kami!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                className="bg-primary-blue text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Mulai Beli Robux
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white rounded-full font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📊 Lihat Harga
              </motion.button>
            </motion.div>
          </div>

          {/* Calculator and Rankings Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <RobuxCalculator />
            <BuyerRankings />
          </div>

          {/* Why Choose ONBUX */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              💸 Why Buy on <span className="text-primary-blue">ONBUX</span>?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Platform terpercaya untuk transaksi Robux dengan keamanan dan kenyamanan terjamin
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary-blue transition-all duration-300 card-hover"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <span className="text-primary-blue">✅</span>
                <span>Verified Seller</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary-blue">🛡️</span>
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary-blue">⭐</span>
                <span>5000+ Happy Customers</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary-blue">🚀</span>
                <span>Instant Delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;