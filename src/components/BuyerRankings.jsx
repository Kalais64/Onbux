import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BuyerRankings = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const topBuyers = [
    { rank: 1, username: '@ZephyrID', totalRobux: 50000, badge: '🥇', color: 'from-yellow-400 to-yellow-600' },
    { rank: 2, username: '@RBLXKing', totalRobux: 42000, badge: '🥈', color: 'from-gray-300 to-gray-500' },
    { rank: 3, username: '@LunarDev', totalRobux: 35000, badge: '🥉', color: 'from-orange-400 to-orange-600' },
    { rank: 4, username: '@ProBuilder', totalRobux: 28000, badge: '4️⃣', color: 'from-blue-400 to-blue-600' },
    { rank: 5, username: '@RobuxMaster', totalRobux: 25000, badge: '5️⃣', color: 'from-purple-400 to-purple-600' },
  ];

  const formatNumber = (num) => {
    return new Intl.NumberFormat('id-ID').format(num);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-2xl"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-primary-blue mb-2">Top Buyer Leaderboard</h3>
        <p className="text-gray-700">Pembeli Robux terbanyak di ONBUX</p>
      </div>

      <div className="space-y-4">
        {topBuyers.map((buyer, index) => (
          <motion.div
            key={buyer.rank}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            className="group"
          >
            <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-primary-blue/30 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg">
              {/* Rank and Badge */}
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${buyer.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {buyer.badge}
                </div>
                
                {/* User Info */}
                <div>
                  <div className="font-bold text-black text-lg group-hover:text-primary-blue transition-colors duration-300">
                    {buyer.username}
                  </div>
                  <div className="text-sm text-gray-600">
                    Rank #{buyer.rank}
                  </div>
                </div>
              </div>

              {/* Robux Amount */}
              <div className="text-right">
                <div className="text-xl font-bold text-primary-blue">
                  {formatNumber(buyer.totalRobux)} R$
                </div>
                <div className="text-sm text-gray-600">
                  Total Bought
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-8 pt-6 border-t border-gray-200"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-primary-blue">500+</div>
            <div className="text-sm text-gray-600">Total Buyers</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-500">2.5M+</div>
            <div className="text-sm text-gray-600">Robux Sold</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">99.9%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-700">4.9★</div>
            <div className="text-sm text-gray-600">Rating</div>
          </div>
        </div>
      </motion.div>

      {/* Join Leaderboard CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="mt-6 text-center"
      >
        <p className="text-gray-600 mb-4">Ingin masuk leaderboard?</p>
        <motion.button
          className="px-6 py-3 bg-gradient-to-r from-primary-blue to-blue-500 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Mulai Beli Robux
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default BuyerRankings;