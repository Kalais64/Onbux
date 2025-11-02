import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [selectedSubMethod, setSelectedSubMethod] = useState(null);
  const [transactionId, setTransactionId] = useState('');
  
  // Get data from navigation state
  const { robuxAmount, totalPrice } = location.state || { robuxAmount: 0, totalPrice: 0 };

  // Generate unique transaction ID
  useEffect(() => {
    const generateTransactionId = () => {
      const timestamp = Date.now().toString();
      const random = Math.random().toString(36).substring(2, 8).toUpperCase();
      return `TRX${timestamp.slice(-6)}${random}`;
    };
    
    setTransactionId(generateTransactionId());
  }, []);

  const formatNumber = (num) => {
    return new Intl.NumberFormat('id-ID').format(num);
  };

  const paymentMethods = [
    {
      id: 'bank',
      name: 'Transfer Bank',
      icon: '🏦',
      description: 'Transfer ke rekening bank',
      color: 'bg-blue-500',
      subMethods: [
        {
          id: 'bca',
          name: 'Bank BCA',
          accountNumber: '1234567890',
          accountName: 'PT ONBUX DIGITAL',
          code: 'BCA'
        },
        {
          id: 'bni',
          name: 'Bank BNI',
          accountNumber: '0987654321',
          accountName: 'PT ONBUX DIGITAL',
          code: 'BNI'
        },
        {
          id: 'bri',
          name: 'Bank BRI',
          accountNumber: '1122334455',
          accountName: 'PT ONBUX DIGITAL',
          code: 'BRI'
        },
        {
          id: 'mandiri',
          name: 'Bank Mandiri',
          accountNumber: '5544332211',
          accountName: 'PT ONBUX DIGITAL',
          code: 'MANDIRI'
        }
      ]
    },
    {
      id: 'qris',
      name: 'QRIS',
      icon: '📱',
      description: 'Scan QR Code untuk pembayaran',
      color: 'bg-green-500',
      subMethods: [
        {
          id: 'qris-bca',
          name: 'QRIS BCA',
          qrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
          merchant: 'ONBUX DIGITAL - BCA'
        },
        {
          id: 'qris-gopay',
          name: 'QRIS GoPay',
          qrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
          merchant: 'ONBUX DIGITAL - GOPAY'
        },
        {
          id: 'qris-ovo',
          name: 'QRIS OVO',
          qrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
          merchant: 'ONBUX DIGITAL - OVO'
        }
      ]
    },
    {
      id: 'ewallet',
      name: 'E-Wallet',
      icon: '💳',
      description: 'Pembayaran melalui dompet digital',
      color: 'bg-purple-500',
      subMethods: [
        {
          id: 'ovo',
          name: 'OVO',
          phoneNumber: '081234567890',
          accountName: 'ONBUX DIGITAL'
        },
        {
          id: 'gopay',
          name: 'GoPay',
          phoneNumber: '081234567890',
          accountName: 'ONBUX DIGITAL'
        },
        {
          id: 'dana',
          name: 'DANA',
          phoneNumber: '081234567890',
          accountName: 'ONBUX DIGITAL'
        },
        {
          id: 'shopeepay',
          name: 'ShopeePay',
          phoneNumber: '081234567890',
          accountName: 'ONBUX DIGITAL'
        }
      ]
    },
    {
      id: 'credit',
      name: 'Kartu Kredit',
      icon: '💰',
      description: 'Pembayaran dengan kartu kredit/debit',
      color: 'bg-orange-500',
      subMethods: [
        {
          id: 'visa',
          name: 'Visa',
          processor: 'Midtrans Gateway',
          fee: '2.9% + Rp 2.000'
        },
        {
          id: 'mastercard',
          name: 'Mastercard',
          processor: 'Midtrans Gateway',
          fee: '2.9% + Rp 2.000'
        },
        {
          id: 'jcb',
          name: 'JCB',
          processor: 'Midtrans Gateway',
          fee: '2.9% + Rp 2.000'
        }
      ]
    }
  ];

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
    setSelectedSubMethod(null);
  };

  const handleSubMethodSelect = (subMethod) => {
    setSelectedSubMethod(subMethod);
  };

  const handlePaymentConfirm = () => {
    if (!selectedMethod || !selectedSubMethod) {
      alert('Silakan pilih metode pembayaran terlebih dahulu');
      return;
    }
    
    // Here you would typically integrate with payment gateway
    alert(`Pembayaran dengan ${selectedSubMethod.name} akan diproses.\nKode Transaksi: ${transactionId}`);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Berhasil disalin ke clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center mb-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            ← Kembali
          </button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Ringkasan Pesanan</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Kode Transaksi</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{transactionId}</span>
                  <button
                    onClick={() => copyToClipboard(transactionId)}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    📋
                  </button>
                </div>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Jumlah Robux</span>
                <span className="font-semibold text-lg">{formatNumber(robuxAmount)} Robux</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Rate</span>
                <span className="font-medium">100 Robux = Rp 12.500</span>
              </div>
              
              <div className="flex justify-between items-center py-4 bg-blue-50 rounded-lg px-4">
                <span className="text-lg font-semibold text-gray-800">Total Pembayaran</span>
                <span className="text-2xl font-bold text-blue-600">Rp {formatNumber(totalPrice)}</span>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">Ketentuan Pembayaran:</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Pembayaran harus dilakukan dalam 24 jam</li>
                <li>• Robux akan dikirim maksimal 1x24 jam setelah pembayaran dikonfirmasi</li>
                <li>• Pastikan username Roblox Anda benar</li>
                <li>• Tidak ada pengembalian dana setelah Robux dikirim</li>
                <li>• Hubungi customer service jika ada kendala</li>
              </ul>
            </div>
          </motion.div>

          {/* Payment Methods */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Pilih Metode Pembayaran</h2>
            
            {!selectedMethod ? (
              /* Main Payment Methods */
              <div className="space-y-4">
                {paymentMethods.map((method, index) => (
                  <motion.button
                    key={method.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleMethodSelect(method)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 text-left"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`${method.color} p-3 rounded-lg mr-4 text-2xl`}>
                          {method.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{method.name}</h3>
                          <p className="text-sm text-gray-600">{method.description}</p>
                        </div>
                      </div>
                      <span className="text-gray-400">→</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            ) : (
              /* Sub Payment Methods */
              <div>
                <div className="flex items-center mb-4">
                  <button
                    onClick={() => setSelectedMethod(null)}
                    className="text-gray-600 hover:text-gray-800 mr-3"
                  >
                    ← Kembali
                  </button>
                  <div className="flex items-center">
                    <div className={`${selectedMethod.color} p-2 rounded-lg mr-3 text-lg`}>
                      {selectedMethod.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{selectedMethod.name}</h3>
                  </div>
                </div>

                <div className="space-y-3">
                  {selectedMethod.subMethods.map((subMethod, index) => (
                    <motion.button
                      key={subMethod.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => handleSubMethodSelect(subMethod)}
                      className={`w-full p-4 border-2 rounded-xl transition-all duration-200 text-left ${
                        selectedSubMethod?.id === subMethod.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800">{subMethod.name}</h4>
                          {subMethod.accountNumber && (
                            <p className="text-sm text-gray-600">
                              No. Rekening: {subMethod.accountNumber}
                            </p>
                          )}
                          {subMethod.phoneNumber && (
                            <p className="text-sm text-gray-600">
                              No. HP: {subMethod.phoneNumber}
                            </p>
                          )}
                          {subMethod.processor && (
                            <p className="text-sm text-gray-600">
                              Via: {subMethod.processor}
                            </p>
                          )}
                          {subMethod.fee && (
                            <p className="text-sm text-orange-600">
                              Biaya: {subMethod.fee}
                            </p>
                          )}
                        </div>
                        {selectedSubMethod?.id === subMethod.id && (
                          <span className="text-blue-500 text-xl">✓</span>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Payment Details */}
                {selectedSubMethod && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-gray-50 rounded-lg"
                  >
                    <h4 className="font-semibold text-gray-800 mb-3">Detail Pembayaran:</h4>
                    
                    {selectedMethod.id === 'bank' && (
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Bank:</span>
                          <span className="font-medium">{selectedSubMethod.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>No. Rekening:</span>
                          <div className="flex items-center gap-2">
                            <span className="font-mono">{selectedSubMethod.accountNumber}</span>
                            <button
                              onClick={() => copyToClipboard(selectedSubMethod.accountNumber)}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              📋
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span>Atas Nama:</span>
                          <span className="font-medium">{selectedSubMethod.accountName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Jumlah Transfer:</span>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-blue-600">Rp {formatNumber(totalPrice)}</span>
                            <button
                              onClick={() => copyToClipboard(totalPrice.toString())}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              📋
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedMethod.id === 'ewallet' && (
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>E-Wallet:</span>
                          <span className="font-medium">{selectedSubMethod.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>No. HP:</span>
                          <div className="flex items-center gap-2">
                            <span className="font-mono">{selectedSubMethod.phoneNumber}</span>
                            <button
                              onClick={() => copyToClipboard(selectedSubMethod.phoneNumber)}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              📋
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span>Atas Nama:</span>
                          <span className="font-medium">{selectedSubMethod.accountName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Jumlah Transfer:</span>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-blue-600">Rp {formatNumber(totalPrice)}</span>
                            <button
                              onClick={() => copyToClipboard(totalPrice.toString())}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              📋
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedMethod.id === 'qris' && (
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-3">Scan QR Code di bawah ini:</p>
                        <div className="bg-white p-4 rounded-lg inline-block">
                          <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500">QR Code {selectedSubMethod.name}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Merchant: {selectedSubMethod.merchant}</p>
                        <p className="text-sm font-bold text-blue-600 mt-1">
                          Total: Rp {formatNumber(totalPrice)}
                        </p>
                      </div>
                    )}

                    {selectedMethod.id === 'credit' && (
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-3">
                          Anda akan diarahkan ke gateway pembayaran {selectedSubMethod.processor}
                        </p>
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <p className="text-sm text-orange-700">
                            Biaya tambahan: {selectedSubMethod.fee}
                          </p>
                          <p className="text-sm font-bold text-orange-800 mt-1">
                            Total yang akan dibayar: Rp {formatNumber(Math.ceil(totalPrice * 1.029 + 2000))}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Confirm Payment Button */}
                {selectedSubMethod && (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handlePaymentConfirm}
                    className="w-full mt-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
                  >
                    Konfirmasi Pembayaran
                  </motion.button>
                )}
              </div>
            )}

            {/* Contact Info */}
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Butuh Bantuan?</h4>
              <p className="text-sm text-yellow-700">
                Hubungi customer service kami di WhatsApp: 
                <span className="font-semibold"> +62 812-3456-7890</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Payment;