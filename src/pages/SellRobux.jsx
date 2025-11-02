import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SellerCalculator from '../components/SellerCalculator';
import FloatingElements from '../components/FloatingElements';

const SellRobux = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });

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
            <h1 className="text-5xl md:text-7xl font-bold font-orbitron mb-6">
              <span className="text-primary-blue">Jual Robux</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Tukarkan Robux kamu menjadi uang tunai dengan rate terbaik dan proses yang mudah
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-black text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Mulai Jual Sekarang
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary-blue text-primary-blue rounded-xl font-semibold text-lg hover:bg-primary-blue hover:text-white transition-all duration-300"
              >
                Lihat Rate
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
              Kalkulator Penjualan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hitung berapa uang yang akan kamu terima dari penjualan Robux
            </p>
          </motion.div>
          
          <SellerCalculator />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 text-primary-blue">
              Cara Jual Robux
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proses penjualan yang mudah dan cepat dalam 3 langkah sederhana
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                title: "Hubungi Kami",
                description: "Kontak admin melalui Instagram atau WhatsApp dengan jumlah Robux yang ingin dijual",
                icon: "📱"
              },
              {
                step: "02", 
                title: "Verifikasi Akun",
                description: "Admin akan memverifikasi akun Roblox dan jumlah Robux yang tersedia",
                icon: "✅"
              },
              {
                step: "03",
                title: "Transfer & Bayar",
                description: "Transfer Robux sesuai instruksi, pembayaran langsung dikirim ke rekening kamu",
                icon: "💰"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-gradient rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                <div className="text-4xl mb-4 mt-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-primary-blue">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
              Hubungi Admin
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pilih platform yang paling nyaman untuk menghubungi admin kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-pink-500 to-purple-600 p-8 rounded-2xl text-white shadow-xl"
            >
              <div className="text-4xl mb-4">📷</div>
              <h3 className="text-2xl font-bold mb-4">Instagram</h3>
              <p className="mb-6 opacity-90">
                Chat langsung dengan admin melalui Instagram untuk proses yang lebih personal
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Chat di Instagram
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-2xl text-white shadow-xl"
            >
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-4">WhatsApp</h3>
              <p className="mb-6 opacity-90">
                Hubungi admin via WhatsApp untuk respon yang cepat dan komunikasi real-time
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-white text-green-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Chat di WhatsApp
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-primary-blue text-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 text-white">
              Keuntungan Jual di ONBUX
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Mengapa ribuan seller memilih ONBUX sebagai platform jual Robux terpercaya
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "💎",
                title: "Rate Tinggi",
                description: "Dapatkan rate penjualan terbaik di Indonesia"
              },
              {
                icon: "⚡",
                title: "Proses Cepat",
                description: "Pembayaran langsung setelah Robux diterima"
              },
              {
                icon: "🔒",
                title: "Aman Terpercaya",
                description: "Transaksi dijamin aman dengan sistem escrow"
              },
              {
                icon: "📞",
                title: "Support 24/7",
                description: "Admin siap membantu kapan saja dibutuhkan"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-white">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellRobux;