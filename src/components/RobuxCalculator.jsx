import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const RobuxCalculator = () => {
  const navigate = useNavigate();
  const [robuxAmount, setRobuxAmount] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [displayPrice, setDisplayPrice] = useState(0);

  // Rate: 12500 IDR = 100 Robux
  const robuxRate = 100 / 12500; // 0.008 Robux per IDR
  const pricePerRobux = 12500 / 100; // 125 IDR per Robux

  useEffect(() => {
    if (robuxAmount) {
      const calculatedPrice = Math.ceil(parseFloat(robuxAmount) * pricePerRobux);
      setTotalPrice(calculatedPrice);
    } else {
      setTotalPrice(0);
    }
  }, [robuxAmount]);

  useEffect(() => {
    // Animate number counting
    const duration = 1000;
    const steps = 60;
    const stepValue = totalPrice / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setDisplayPrice(Math.floor(stepValue * currentStep));
      
      if (currentStep >= steps) {
        setDisplayPrice(totalPrice);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [totalPrice]);

  const handlePurchase = () => {
    if (!robuxAmount || robuxAmount <= 0) {
      alert('Silakan masukkan jumlah Robux yang valid');
      return;
    }
    
    navigate('/payment', {
      state: {
        robuxAmount: parseInt(robuxAmount),
        totalPrice: totalPrice
      }
    });
  };

  const quickRobuxAmounts = [200, 300, 500, 700, 1000, 1500, 2000, 5000, 10000];

  const handleQuickRobux = (robuxAmountValue) => {
    setRobuxAmount(robuxAmountValue.toString());
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('id-ID').format(num);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calculator Input */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
        >
          <h3 className="text-2xl font-bold mb-6 text-primary-blue">Pilih Jumlah Robux</h3>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Jumlah Robux
            </label>
            <div className="relative">
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                Robux
              </span>
              <input
                type="number"
                value={robuxAmount}
                onChange={(e) => setRobuxAmount(e.target.value)}
                placeholder="0"
                className="w-full pl-4 pr-20 py-4 border-2 border-gray-200 rounded-full text-lg font-semibold focus:border-primary-blue focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-3">Pilih jumlah Robux cepat:</p>
            <div className="grid grid-cols-2 gap-2">
              {quickRobuxAmounts.map((robuxAmount) => (
                <motion.button
                  key={robuxAmount}
                  onClick={() => handleQuickRobux(robuxAmount)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 border-2 border-primary-blue text-primary-blue rounded-full hover:bg-primary-blue hover:text-white transition-all duration-300 text-sm font-medium"
                >
                  {formatNumber(robuxAmount)} Robux
                </motion.button>
              ))}
            </div>
          </div>

          <div className="text-xs text-gray-500 space-y-1">
            <p>• Rate: 100 Robux = Rp 12.500</p>
            <p>• Harga sudah final, tidak ada biaya tambahan</p>
            <p>• Harga dapat berubah sewaktu-waktu</p>
          </div>
        </motion.div>

        {/* Calculator Result */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-black">Hasil Perhitungan</h3>
          
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-lg mb-2 text-black">Total uang yang harus dibayar:</p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={displayPrice}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.2, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-5xl font-bold font-orbitron mb-4 text-black"
                >
                  Rp {formatNumber(displayPrice)}
                </motion.div>
              </AnimatePresence>
              <p className="text-xl text-black">Rupiah</p>
            </div>

            {robuxAmount && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-100 p-4 rounded-xl"
              >
                <h4 className="font-semibold mb-3 text-black">Rincian:</h4>
                <div className="space-y-2 text-sm text-black">
                  <div className="flex justify-between">
                    <span>Jumlah Robux:</span>
                    <span>{formatNumber(robuxAmount)} Robux</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rate:</span>
                    <span>100 Robux = Rp 12.500</span>
                  </div>
                  <div className="border-t border-gray-300 pt-2 flex justify-between font-semibold">
                    <span>Total Harga:</span>
                    <span>Rp {formatNumber(totalPrice)}</span>
                  </div>
                </div>
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePurchase}
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
            >
              Beli Sekarang
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RobuxCalculator;