import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PortfolioShowcase from '../components/PortfolioShowcase';
import FloatingElements from '../components/FloatingElements';

const CreativeStudio = () => {
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
              <span className="text-primary-blue">ONBUX</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Jasa pembuatan game Roblox profesional dengan tim developer berpengalaman
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
              {[
                { number: "50+", label: "Games Created" },
                { number: "100K+", label: "Total Visits" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary-blue font-orbitron">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300"
              >
                Konsultasi Gratis
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary-blue text-primary-blue rounded-full font-semibold text-lg hover:bg-primary-blue hover:text-white transition-all duration-300"
              >
                Lihat Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Solusi lengkap untuk semua kebutuhan pengembangan game Roblox Anda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎮",
                title: "Game Development",
                description: "Pembuatan game Roblox dari konsep hingga publish dengan gameplay yang engaging",
                features: ["Custom Scripting", "UI/UX Design", "Game Mechanics", "Beta Testing"]
              },
              {
                icon: "🎨",
                title: "3D Modeling & Assets",
                description: "Pembuatan model 3D, texture, dan asset berkualitas tinggi untuk game Anda",
                features: ["Character Models", "Environment Assets", "Weapons & Items", "Animations"]
              },
              {
                icon: "💻",
                title: "Scripting Services",
                description: "Pengembangan script Lua untuk fitur-fitur khusus dan sistem kompleks",
                features: ["Custom Systems", "Admin Commands", "Anti-Exploit", "Data Management"]
              },
              {
                icon: "🎯",
                title: "Game Optimization",
                description: "Optimasi performa game untuk pengalaman bermain yang smooth dan stabil",
                features: ["Performance Tuning", "Memory Optimization", "Loading Speed", "Bug Fixes"]
              },
              {
                icon: "📱",
                title: "UI/UX Design",
                description: "Desain interface yang menarik dan user-friendly untuk game Roblox",
                features: ["Modern Interface", "Mobile Responsive", "User Experience", "Icon Design"]
              },
              {
                icon: "🚀",
                title: "Game Publishing",
                description: "Bantuan publish game ke platform Roblox dengan strategi marketing",
                features: ["Store Setup", "SEO Optimization", "Marketing Strategy", "Community Building"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-primary-blue">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <span className="w-2 h-2 bg-primary-blue rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
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
              Portfolio Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Lihat berbagai project game Roblox yang telah kami kerjakan dengan hasil yang memuaskan
            </p>
          </motion.div>
          
          <PortfolioShowcase />
        </div>
      </section>

      {/* Testimonials Section */}
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
              Testimoni Client
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Apa kata client yang telah mempercayakan project mereka kepada ONBUX
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Gaming",
                role: "Game Developer",
                rating: 5,
                comment: "ONBUX berhasil mewujudkan visi game saya dengan sempurna. Tim yang profesional dan hasil yang memuaskan!"
              },
              {
                name: "Sarah Creative",
                role: "Content Creator",
                rating: 5,
                comment: "Pelayanan yang excellent dan komunikasi yang baik. Game yang dibuat sesuai ekspektasi dan deadline tepat waktu."
              },
              {
                name: "Ryan Studios",
                role: "Indie Developer",
                rating: 5,
                comment: "Kualitas coding dan design yang top notch. Sangat recommend untuk yang butuh jasa development game Roblox!"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <div className="font-bold text-primary-blue">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white text-black">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 text-black">
              Siap Wujudkan Game Impian Anda?
            </h2>
            <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
              Konsultasikan ide game Anda dengan tim expert kami dan dapatkan quote terbaik
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-black to-white text-white rounded-full font-semibold text-lg hover:from-gray-800 hover:to-gray-200 transition-all duration-300"
              >
                Konsultasi Gratis
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-black text-black rounded-full font-semibold text-lg hover:bg-black hover:text-white transition-all duration-300"
              >
                Request Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CreativeStudio;