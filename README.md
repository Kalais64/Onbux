# 🌌 ONBUX - Robux Marketplace & Creative Studio

A modern, animated website for Robux trading and Roblox game development services built with React, TailwindCSS, and Framer Motion.

## ✨ Features

### 🏠 Home Section
- **Interactive Robux Calculator** - Real-time conversion with tax calculations
- **Buyer Rankings** - Top buyer leaderboard with animated statistics
- **Hero Section** - Eye-catching introduction with call-to-action buttons
- **Trust Indicators** - Customer testimonials and service highlights

### 💰 Sell Robux Section
- **Seller Calculator** - Calculate earnings from selling Robux
- **Contact Methods** - Instagram and WhatsApp integration
- **Process Explanation** - Step-by-step selling guide
- **Benefits Overview** - Why choose ONBUX for selling

### 🎨 Creative Studio Section
- **Portfolio Showcase** - Interactive project gallery with modal views
- **Service Offerings** - Map design, game development, UI/UX design
- **Team Statistics** - Projects completed, happy clients, experience
- **Client Testimonials** - Real feedback from satisfied customers

### 🎯 Key Features
- **Responsive Design** - Works perfectly on all devices
- **Dark Theme** - Modern dark UI with neon green accents
- **Smooth Animations** - Parallax effects, fade-ins, hover animations
- **Floating Elements** - Dynamic background animations
- **Interactive Components** - Calculators, modals, smooth scrolling

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Styling:** TailwindCSS
- **Animations:** Framer Motion + GSAP
- **Build Tool:** Vite
- **Fonts:** Google Fonts (Poppins, Orbitron)
- **Icons:** Emoji-based design system

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd onbux
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── BuyerRankings.jsx
│   ├── FloatingElements.jsx
│   ├── Navbar.jsx
│   ├── PortfolioShowcase.jsx
│   ├── RobuxCalculator.jsx
│   └── SellerCalculator.jsx
├── sections/            # Main page sections
│   ├── Footer.jsx
│   ├── HomeSection.jsx
│   ├── SellSection.jsx
│   └── StudioSection.jsx
├── App.jsx             # Main app component
├── main.jsx            # React entry point
└── index.css           # Global styles & animations
```

## 🎨 Design System

### Colors
- **Primary Dark:** `#0a0a0a` - Main background
- **Primary Neon:** `#00ff88` - Accent color
- **Neon Dark:** `#00cc6a` - Darker accent
- **Gray Variants:** Multiple shades for UI elements

### Typography
- **Primary Font:** Poppins (body text)
- **Accent Font:** Orbitron (headings)

### Animations
- **Parallax Effects** - Multi-layer scrolling animations
- **Hover Effects** - Interactive element responses
- **Loading Animations** - Smooth transitions and counters
- **Floating Elements** - Background decoration animations

## 🔧 Customization

### Updating Content
- **Calculator Rates:** Modify exchange rates in calculator components
- **Portfolio Items:** Update project data in `PortfolioShowcase.jsx`
- **Contact Info:** Change social links in `Footer.jsx` and `SellSection.jsx`
- **Statistics:** Update numbers in various components

### Styling Changes
- **Colors:** Modify `tailwind.config.js` for color scheme changes
- **Animations:** Update keyframes in `index.css`
- **Layout:** Adjust component structures and TailwindCSS classes

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🌟 Performance Features

- **Optimized Images:** SVG icons for scalability
- **Lazy Loading:** Components load as needed
- **Smooth Scrolling:** Hardware-accelerated animations
- **Efficient Bundling:** Vite optimization for fast loading

## 🚀 Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify

### Traditional Hosting
1. Build the project: `npm run build`
2. Upload contents of `dist/` folder to your web server

## 📞 Support & Contact

For questions about this project or ONBUX services:
- **Instagram:** @onbux.roblox
- **WhatsApp:** Contact through website
- **Email:** support@onbux.com

## 📄 License

This project is created for ONBUX. All rights reserved.

---

**Made with ❤️ for the Roblox Community**