import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PortfolioShowcase from '../components/PortfolioShowcase';

const StudioSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: '🗺️',
      title: 'Map Design',
      description: 'Custom map design dari konsep hingga implementasi lengkap',
      features: ['Terrain Sculpting', 'Building Design', 'Lighting Setup', 'Optimization'],
      price: 'Mulai dari Rp 500K'
    },
    {
      icon: '⚙️',
      title: 'Game System',
      description: 'Scripting dan system development untuk gameplay mechanics',
      features: ['Combat System', 'Economy System', 'UI/UX Design', 'Database Integration'],
      price: 'Mulai dari Rp 750K'
    },
    {
      icon: '🎮',
      title: 'Full Game Development',
      description: 'Complete game development dari konsep hingga publish',
      features: ['Game Design', 'Full Development', 'Testing & Debug', 'Launch Support'],
      price: 'Mulai dari Rp 2M'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Modern interface design untuk game Roblox Anda',
      features: ['Modern Design', 'Responsive Layout', 'Animation Effects', 'User Experience'],
      price: 'Mulai dari Rp 300K'
    }
  ];

  const teamStats = [
    { label: 'Projects Completed', value: '150+', icon: '✅' },
    { label: 'Happy Clients', value: '80+', icon: '😊' },
    { label: 'Years Experience', value: '3+', icon: '📅' },
    { label: 'Team Members', value: '8', icon: '👥' }
  ];

  const testimonials = [
    {
      name: 'RobloxDev123',
      project: 'Tycoon Game',
      rating: 5,
      comment: 'Amazing work! The team delivered exactly what I wanted and more. Highly recommended!'
    },
    {
      name: 'GameMaster456',
      project: 'PvP Arena',
      rating: 5,
      comment: 'Professional service, great communication, and excellent results. Will work with them again!'
    },
    {
      name: 'BuilderPro789',
      project: 'Map Design',
      rating: 5,
      comment: 'The map design exceeded my expectations. Very detailed and optimized perfectly!'
    }
  ];

  return (
    <section id="studio" className="min-h-screen relative overflow-hidden bg-white">
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
              <span className="text-primary-blue">🧱 ONBUX</span>
              <br />
              <span className="text-black">Creative Studio</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Tim kreatif kami siap bantu kamu bikin map, UI, system, dan full game profesional Roblox
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {teamStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-bold text-primary-blue">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center text-black mb-12">🛠️ Our Services</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary-blue/30 transition-all duration-300 card-hover"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-xl font-bold text-black mb-3">{service.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-blue rounded-full"></div>
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-primary-blue font-bold text-sm">{service.price}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Portfolio Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center text-black mb-4">🎨 Portfolio Showcase</h3>
            <p className="text-center text-gray-600 mb-12">Lihat beberapa project terbaik yang telah kami kerjakan</p>
            
            <PortfolioShowcase />
          </motion.div>

          {/* About ONBUX Studio */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid lg:grid-cols-2 gap-12 mb-16"
          >
            {/* About Text */}
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">💬 About ONBUX Studio</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong className="text-primary-blue">Berdiri sejak 2023</strong>, ONBUX Creative Studio telah menjadi 
                  pilihan utama developer dan creator Roblox Indonesia untuk mewujudkan ide game mereka.
                </p>
                <p>
                  Tim kami terdiri dari <strong className="text-primary-blue">developer Roblox profesional</strong> dan 
                  <strong className="text-primary-blue"> builder berpengalaman</strong> yang memahami seluk-beluk 
                  platform Roblox dari segi teknis hingga user experience.
                </p>
                <p>
                  Dengan rata-rata waktu pengerjaan <strong className="text-primary-blue">3-7 hari</strong> untuk 
                  project standar, kami berkomitmen memberikan hasil terbaik dengan timeline yang jelas dan komunikasi 
                  yang transparan.
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center text-white">✓</div>
                  <span className="text-black">100% Original Work</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center text-white">⚡</div>
                  <span className="text-black">Fast Turnaround Time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center text-white">🛡️</div>
                  <span className="text-black">Post-Launch Support</span>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">⭐ Client Testimonials</h3>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="font-bold text-black">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.project}</div>
                      </div>
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i}>⭐</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm italic">"{testimonial.comment}"</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center bg-gray-50 rounded-2xl p-8 border border-gray-200"
          >
            <h3 className="text-3xl font-bold text-black mb-4">🚀 Ready to Start Your Project?</h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Konsultasi gratis untuk project Anda. Tim kami siap membantu mewujudkan ide game impian Anda!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-black to-white text-white font-bold px-8 py-4 rounded-xl hover:from-gray-800 hover:to-gray-200 hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                💬 Konsultasi Gratis
              </motion.button>
              <motion.button
                className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white font-bold px-8 py-4 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📋 Request Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;