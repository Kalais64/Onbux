import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SellerCalculator = () => {
  const [robuxAmount, setRobuxAmount] = useState(1000);
  const [animatedEarnings, setAnimatedEarnings] = useState(0);

  const ROBUX_RATE = 85000 / 1000; // 85000 IDR per 1000 Robux = 85 IDR per Robux
  const ADMIN_FEE = 0.05; // 5% admin fee

  useEffect(() => {
    const grossEarnings = robuxAmount * ROBUX_RATE;
    const netEarnings = grossEarnings * (1 - ADMIN_FEE);

    // Animate the earnings counter
    const duration = 1000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      const progress = currentStep / steps;
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic

      setAnimatedEarnings(animatedEarnings + (netEarnings - animatedEarnings) * easeProgress);

      currentStep++;
      if (currentStep >= steps) {
        clearInterval(interval);
        setAnimatedEarnings(netEarnings);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [robuxAmount]);

  const formatNumber = (num) => {
    return new Intl.NumberFormat('id-ID').format(num);
  };

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num * 1000);
  };

  const grossEarnings = robuxAmount * ROBUX_RATE;
  const adminFee = grossEarnings * ADMIN_FEE;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-2xl"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-primary-blue mb-2">🧮 Seller Calculator</h3>
        <p className="text-gray-700">Hitung penghasilan dari penjualan Robux</p>
      </div>

      {/* Input Section */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Jumlah Robux yang ingin dijual
        </label>
        <div className="relative">
          <input
            type="number"
            value={robuxAmount}
            onChange={(e) => setRobuxAmount(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-black text-lg font-semibold focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all duration-300"
            min="1"
            step="100"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary-blue font-bold">
            R$
          </div>
        </div>
        
        {/* Quick Amount Buttons */}
        <div className="flex flex-wrap gap-2 mt-4">
          {[1000, 2500, 5000, 10000].map((amount) => (
            <motion.button
              key={amount}
              onClick={() => setRobuxAmount(amount)}
              className="px-4 py-2 bg-gray-200 hover:bg-primary-blue hover:text-white text-black rounded-lg text-sm font-medium transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {formatNumber(amount)} R$
            </motion.button>
          ))}
        </div>
      </div>

      {/* Calculation Breakdown */}
      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200">
          <span className="text-gray-700">Robux yang dijual:</span>
          <span className="font-bold text-black">{formatNumber(robuxAmount)} R$</span>
        </div>
        
        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200">
          <span className="text-gray-700">Rate (100 Robux):</span>
          <span className="font-bold text-primary-blue">Rp 8.500</span>
        </div>
        
        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200">
          <span className="text-gray-700">Penghasilan kotor:</span>
          <span className="font-bold text-green-600">{formatCurrency(grossEarnings)}</span>
        </div>
        
        <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg border border-red-200">
          <span className="text-gray-700">Admin fee (5%):</span>
          <span className="font-bold text-red-600">-{formatCurrency(adminFee)}</span>
        </div>

        {/* Sell Button */}
        <motion.button
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg text-lg transition-all duration-300 mt-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => alert(`Menjual ${formatNumber(robuxAmount)} Robux dengan total penerimaan ${formatCurrency(animatedEarnings)}`)}
        >
          🚀 Sell Now
        </motion.button>
      </div>

      {/* Final Result */}
      <motion.div
        className="bg-primary-blue/10 border border-primary-blue/30 rounded-xl p-6 text-center mb-8"
        whileHover={{ scale: 1.02 }}
      >
        <div className="text-primary-blue text-3xl mb-2">💰</div>
        <div className="text-sm text-gray-600 mb-2">Total yang Anda terima</div>
        <div className="text-3xl font-bold text-primary-blue">
          {formatCurrency(animatedEarnings)}
        </div>
      </motion.div>

      {/* Action Button */}
      <motion.button
        className="w-full bg-primary-blue hover:bg-primary-blue/90 text-white font-bold py-4 rounded-xl text-lg transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        💸 Kirim Penawaran
      </motion.button>

      {/* Info */}
      <div className="mt-6 text-center text-sm text-gray-600">
        <p>⚡ Proses pembayaran 1-24 jam setelah verifikasi</p>
      </div>
    </motion.div>
  );
};

export default SellerCalculator;