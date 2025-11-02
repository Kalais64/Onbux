import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SellerCalculator from '../components/SellerCalculator';

const SellSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const steps = [
    {
      number: '1',
      title: 'Isi Form Jumlah Robux',
      description: 'Masukkan jumlah Robux yang ingin dijual dan lihat estimasi penghasilan',
      icon: '📝'
    },
    {
      number: '2',
      title: 'Hubungi Admin ONBUX',
      description: 'Kirim penawaran melalui Instagram atau WhatsApp untuk verifikasi',
      icon: '📱'
    },
    {
      number: '3',
      title: 'Transaksi via Roblox',
      description: 'Transfer Robux melalui group Roblox atau Gamepass yang aman',
      icon: '🎮'
    },
    {
      number: '4',
      title: 'Terima Pembayaran',
      description: 'Dapatkan pembayaran dalam 1-24 jam setelah verifikasi selesai',
      icon: '💰'
    }
  ];

  const contactMethods = [
    {
      platform: 'Instagram',
      handle: '@onbux.roblox',
      url: 'https://instagram.com/onbux.roblox',
      icon: '📷',
      color: 'from-pink-500 to-purple-500',
      description: 'DM untuk penawaran cepat'
    },
    {
      platform: 'WhatsApp',
      handle: '+62 8xx-xxxx-xxxx',
      url: 'https://wa.me/628xxxxxx',
      icon: '💬',
      color: 'from-green-500 to-green-600',
      description: 'Chat langsung dengan admin'
    }
  ];

  return (
    <section id="sell" className="min-h-screen relative overflow-hidden bg-white">
      <div className="section-padding">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary-blue">💰 Jual Robux</span>
              <br />
              <span className="text-black">Mudah & Menguntungkan</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ubah Robux kamu jadi uang tunai atau saldo game lainnya dengan proses yang aman dan terpercaya!
            </p>
          </motion.div>

          {/* Calculator and Steps Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Seller Calculator */}
            <div>
              <SellerCalculator />
            </div>

            {/* Steps */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-black mb-8">📩 Cara Jual Lewat ONBUX</h3>
              
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-primary-blue transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl">{step.icon}</span>
                      <h4 className="text-lg font-bold text-black">{step.title}</h4>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-black mb-4">📱 Hubungi Kami</h3>
            <p className="text-gray-600 text-lg mb-8">Pilih platform yang paling nyaman untuk Anda</p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {contactMethods.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="block p-6 bg-primary-blue rounded-xl text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-4xl mb-3">{contact.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{contact.platform}</h4>
                  <p className="text-lg font-semibold mb-1">{contact.handle}</p>
                  <p className="text-sm opacity-90">{contact.description}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-center text-black mb-8">🌟 Keuntungan Jual di ONBUX</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-lg font-bold text-black mb-2">Proses Cepat</h4>
                <p className="text-gray-600">Pembayaran dalam 1-24 jam</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h4 className="text-lg font-bold text-black mb-2">Aman & Terpercaya</h4>
                <p className="text-gray-600">Sistem keamanan berlapis</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💎</div>
                <h4 className="text-lg font-bold text-black mb-2">Harga Kompetitif</h4>
                <p className="text-gray-600">Rate terbaik di pasaran</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SellSection;