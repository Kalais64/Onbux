import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Neon City Map',
      type: 'Map Design',
      category: 'Futuristic',
      description: 'Cyberpunk-themed city map dengan neon lighting dan advanced building system',
      features: ['Custom Lighting', 'Interactive Buildings', 'Vehicle System', 'Day/Night Cycle'],
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
      color: 'from-cyan-500 to-blue-600',
      icon: '🌃'
    },
    {
      id: 2,
      title: 'Tower Battle Arena',
      type: 'System + Map',
      category: 'PvP Game',
      description: 'Competitive tower defense dengan multiplayer battle system dan ranking',
      features: ['Multiplayer System', 'Tower Upgrades', 'Real-time Combat', 'Leaderboard'],
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop',
      color: 'from-red-500 to-orange-600',
      icon: '🏰'
    },
    {
      id: 3,
      title: 'Cafe Tycoon Deluxe',
      type: 'UI + Script',
      category: 'Tycoon Game',
      description: 'Complete cafe management system dengan modern UI dan automation features',
      features: ['Modern UI Design', 'Automation System', 'Customer AI', 'Economy Balance'],
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop',
      color: 'from-green-500 to-emerald-600',
      icon: '☕'
    },
    {
      id: 4,
      title: 'Space Station Hub',
      type: 'Map Design',
      category: 'Sci-Fi',
      description: 'Massive space station dengan zero-gravity mechanics dan exploration system',
      features: ['Zero Gravity', 'Modular Design', 'Exploration System', 'Sci-Fi Aesthetics'],
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop',
      color: 'from-purple-500 to-indigo-600',
      icon: '🚀'
    },
    {
      id: 5,
      title: 'Medieval Kingdom',
      type: 'Full Game',
      category: 'RPG',
      description: 'Complete medieval RPG dengan quest system, combat, dan kingdom building',
      features: ['Quest System', 'Combat Mechanics', 'Kingdom Building', 'Character Progression'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      color: 'from-yellow-600 to-amber-700',
      icon: '⚔️'
    },
    {
      id: 6,
      title: 'Racing Circuit Pro',
      type: 'System + Map',
      category: 'Racing Game',
      description: 'Professional racing game dengan realistic physics dan multiplayer tournaments',
      features: ['Realistic Physics', 'Multiple Tracks', 'Tournament System', 'Car Customization'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      color: 'from-blue-500 to-teal-600',
      icon: '🏎️'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Portfolio Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative overflow-hidden rounded-xl bg-gray-850 border border-gray-700/50 hover:border-primary-neon/30 transition-all duration-300">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                
                {/* Project Icon */}
                <div className="absolute top-4 right-4 text-3xl bg-black/50 rounded-full w-12 h-12 flex items-center justify-center">
                  {project.icon}
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="text-white text-center"
                  >
                    <div className="text-4xl mb-2">👁️</div>
                    <p className="font-semibold">View Details</p>
                  </motion.div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white`}>
                    {project.type}
                  </span>
                  <span className="text-xs text-gray-400">{project.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-neon transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.color} opacity-60`}></div>
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-300"
                >
                  ✕
                </button>
                
                <div className="absolute bottom-4 left-6">
                  <div className="text-4xl mb-2">{selectedProject.icon}</div>
                  <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                  <p className="text-lg text-gray-200">{selectedProject.type}</p>
                </div>
              </div>
              
              {/* Modal Content */}
              <div className="p-6">
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>
                
                <h3 className="text-xl font-bold text-white mb-4">🚀 Key Features</h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-neon rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.button
                    className="flex-1 bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    💬 Diskusi Project
                  </motion.button>
                  <motion.button
                    className="flex-1 border-2 border-primary-neon text-primary-neon font-bold py-3 rounded-lg hover:bg-primary-neon hover:text-black transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    📋 Request Quote
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioShowcase;