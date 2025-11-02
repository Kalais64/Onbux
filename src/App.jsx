import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './sections/Footer';
import Home from './pages/Home';
import SellRobux from './pages/SellRobux';
import CreativeStudio from './pages/CreativeStudio';
import Payment from './pages/Payment';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-black">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sell-robux" element={<SellRobux />} />
          <Route path="/creative-studio" element={<CreativeStudio />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;