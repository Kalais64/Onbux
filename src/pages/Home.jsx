import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import RobuxCalculator from '../components/RobuxCalculator';
import BuyerRankings from '../components/BuyerRankings';
import FloatingElements from '../components/FloatingElements';

const Home = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div className="min-h-screen bg-white text-black">
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="container mx-auto text-center">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl font-bold font-orbitron mb-6">
              <span className="text-primary-blue">ONBUX</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Platform terpercaya untuk membeli Robux dengan harga terbaik dan layanan terdepan
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-black text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Beli Robux Sekarang
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary-blue text-primary-blue rounded-xl font-semibold text-lg hover:bg-primary-blue hover:text-white transition-all duration-300"
              >
                Lihat Harga
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 text-primary-blue">
              Kalkulator Robux
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hitung berapa Robux yang bisa kamu dapatkan dengan budget yang tersedia
            </p>
          </motion.div>
          
          <RobuxCalculator />
        </div>
      </section>

      {/* Rankings Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <BuyerRankings />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            ref={featuresRef}
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 text-primary-blue">
              Mengapa Pilih ONBUX?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami memberikan layanan terbaik dengan keamanan dan kepercayaan yang tinggi
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Proses Cepat",
                description: "Robux langsung masuk ke akun dalam hitungan menit"
              },
              {
                icon: "🔒",
                title: "100% Aman",
                description: "Transaksi dijamin aman dengan sistem keamanan berlapis"
              },
              {
                icon: "💰",
                title: "Harga Terbaik",
                description: "Dapatkan Robux dengan harga paling kompetitif di Indonesia"
              },
              {
                icon: "🎯",
                title: "Akurat",
                description: "Sistem otomatis memastikan jumlah Robux sesuai pesanan"
              },
              {
                icon: "📞",
                title: "Support 24/7",
                description: "Tim customer service siap membantu kapan saja"
              },
              {
                icon: "⭐",
                title: "Terpercaya",
                description: "Ribuan customer puas dengan layanan kami"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-primary-blue">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 px-4 bg-primary-blue text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-12 text-black">
              Dipercaya Ribuan Gamers Indonesia
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "50K+", label: "Customer Puas" },
                { number: "1M+", label: "Robux Terjual" },
                { number: "99.9%", label: "Success Rate" },
                { number: "24/7", label: "Customer Support" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold font-orbitron mb-2 animate-counter text-black">
                    {stat.number}
                  </div>
                  <div className="text-lg text-black font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;