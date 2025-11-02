import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Rankings = () => {
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data untuk rankings
  const mockRankings = [
    { id: 1, username: "RobuxKing", totalPurchased: 2500000, level: "Diamond", avatar: "RK" },
  { id: 2, username: "GameMaster", totalPurchased: 1800000, level: "Platinum", avatar: "GM" },
  { id: 3, username: "ProPlayer", totalPurchased: 1200000, level: "Gold", avatar: "PP" },
  { id: 4, username: "RobloxFan", totalPurchased: 950000, level: "Silver", avatar: "RF" },
    { id: 5, username: "BuilderPro", totalPurchased: 750000, level: "Silver", avatar: "🏗️" },
    { id: 6, username: "DevMaster", totalPurchased: 600000, level: "Bronze", avatar: "💻" },
    { id: 7, username: "CreativeUser", totalPurchased: 450000, level: "Bronze", avatar: "🎨" },
    { id: 8, username: "GamerX", totalPurchased: 300000, level: "Bronze", avatar: "🎲" },
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setRankings(mockRankings);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const formatNumber = (num) => {
    return new Intl.NumberFormat('id-ID').format(num);
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Diamond': return 'text-blue-600 bg-blue-50';
      case 'Platinum': return 'text-gray-600 bg-gray-50';
      case 'Gold': return 'text-yellow-600 bg-yellow-50';
      case 'Silver': return 'text-gray-500 bg-gray-100';
      case 'Bronze': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return `#${rank}`;
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-primary-blue mb-6 text-center">
            🏆 Top Buyers Ranking
          </h3>
          <div className="space-y-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl animate-pulse">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                </div>
                <div className="h-6 bg-gray-200 rounded w-20"></div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
      >
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-primary-blue mb-2">
            Top Buyers Ranking
          </h3>
          <p className="text-gray-600">Pengguna dengan pembelian Robux terbanyak</p>
        </div>

        <div className="space-y-3">
          {rankings.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, x: 10 }}
              className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                index < 3 
                  ? 'bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              {/* Rank */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                {index < 3 ? (
                  <span className="text-2xl">{getRankIcon(index + 1)}</span>
                ) : (
                  <span className="text-lg font-bold text-gray-500">#{index + 1}</span>
                )}
              </div>

              {/* Avatar */}
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                {user.avatar}
              </div>

              {/* User Info */}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 truncate">{user.username}</h4>
                <p className="text-sm text-gray-600">
                  {formatNumber(user.totalPurchased)} Robux dibeli
                </p>
              </div>

              {/* Level Badge */}
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(user.level)}`}>
                {user.level}
              </div>

              {/* Progress Bar */}
              <div className="hidden md:block w-24">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.min((user.totalPurchased / 2500000) * 100, 100)}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-primary-blue h-2 rounded-full"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="bg-blue-50 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-primary-blue">
              {formatNumber(rankings.reduce((sum, user) => sum + user.totalPurchased, 0))}
            </div>
            <div className="text-sm text-gray-600">Total Robux Terjual</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-primary-blue">{rankings.length}</div>
            <div className="text-sm text-gray-600">Active Buyers</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-primary-blue">
              {rankings.length > 0 ? formatNumber(Math.floor(rankings.reduce((sum, user) => sum + user.totalPurchased, 0) / rankings.length)) : 0}
            </div>
            <div className="text-sm text-gray-600">Rata-rata Pembelian</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 mb-4">Ingin masuk ke ranking? Mulai beli Robux sekarang!</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
          >
            Mulai Beli Robux
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Rankings;