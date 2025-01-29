import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const images = [
  '/images/logo1.png',
  '/images/logo2.jpg',
  '/images/logo3.jpg',
  '/images/logo4.jpg',
  '/images/logo5.jpg',
];

export function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden scroll-smooth">
      {/* Parallax background */}
      <div 
      className="absolute inset-0 opacity-20"
      style={{
        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
      }}
      >
      <div className="stars absolute inset-0" />
      </div>

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <div className="bg-gradient-to-br from-black/40 to-purple-900/30 
              rounded-3xl p-12 shadow-2xl
              transform transition-all duration-700 ease-out 
              hover:scale-[1.02]
              border border-white/10 hover:border-purple-500/50
              origin-center will-change-transform
              w-full max-w-3xl mx-auto">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold 
               tracking-tight animate-fade-in
               text-transparent bg-clip-text bg-gradient-to-r 
               from-white to-purple-400 mb-6
               leading-tight max-w-3xl mx-auto
               transition-transform duration-700 ease-out">
          Satellites for Smart and Sustainable Farm
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-300 
              max-w-2xl mx-auto leading-relaxed mb-8
              transition-all duration-700 ease-out
              hover:text-white">
          SkyLabs empowers Indian farmers with daily satellite insights for optimized yields and a healthier planet. Explore the power of space to transform your farm.
        </p>

        <button 
          onClick={() => navigate('/technology')}
          className="group relative inline-flex items-center justify-center 
             px-8 py-4 text-lg font-semibold overflow-hidden
             bg-gradient-to-r from-purple-600 to-pink-600
             rounded-full transition-all duration-500 
             transform hover:scale-105 hover:shadow-lg 
             hover:shadow-purple-500/50
             before:absolute before:inset-0
             before:bg-gradient-to-r before:from-pink-600 before:to-purple-600
             before:opacity-0 before:transition-opacity before:duration-500
             hover:before:opacity-100">
          <span className="relative z-10 flex items-center transition-transform duration-300 ease-in-out">
          Get Started
          <Rocket className="ml-2 w-5 h-5 
           transform transition-all duration-300 ease-in-out
           group-hover:translate-x-2 group-hover:rotate-12
           group-hover:scale-110" />
          </span>
        </button>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 
            max-w-2xl mx-auto leading-relaxed mb-8
            transition-all duration-700 ease-out
            hover:text-white">
            
        </p>
      
        <p className="text-xs sm:text-sm md:text-base text-gray-400 
          max-w-2xl mx-auto leading-relaxed mb-8
          transition-all duration-700 ease-out
          hover:text-white">
          Cultivating a Sustainable Agriculture from Above
        </p>
        </div>
      </div>
      </div>

      
      {/* Images Section */}
      

      {/* Headline Section */}
      <div className="w-full px-8 mb-16">
        <h1 className="text-6xl md:text-7xl font-bold 
        text-left
        bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 
        bg-clip-text text-transparent 
        mb-6">
        Maximize Yields with Real-Time Insights
        </h1>
        <p className="text-xl text-white/70 text-left max-w-3xl">
        Increase your harvest and boost your profits with SkyLabs' real-time satellite monitoring. Get daily updates, personalized recommendations, and the tools you need to achieve maximum yields and a more profitable farm.
        </p>
        <div className="relative w-full mt-8 rounded-2xl overflow-hidden aspect-[16/9]">
        <img 
          src="https://i.postimg.cc/wv4M0tDS/dash.jpg" 
          alt="Space Innovation"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      </div>
      {/* Hero Container */}
  <div className="w-[90%] max-w-7xl mx-auto 
        bg-black/20 
        rounded-3xl border border-white/10 
        shadow-2xl shadow-purple-500/5
        hover:shadow-purple-500/10 
        transition-all duration-500 ease-out 
        p-10 mb-20">
    <div className="grid md:grid-cols-2 gap-12 items-center">
    {/* Left Image with enhanced effects */}
    <div className="relative h-[500px] rounded-2xl overflow-hidden 
            transform hover:scale-[1.02] transition-transform duration-700
            order-2 md:order-1">
      <img 
      src="/images/img2.jpg"
      alt="Space Technology"
      className="w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t 
              from-black/60 via-black/20 to-transparent" />
    </div>

    {/* Right Content with enhanced animations */}
    <div className="text-left space-y-6 transform transition-all duration-700
            order-1 md:order-2">
      <h2 className="text-5xl md:text-6xl font-bold 
            bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 
            bg-clip-text text-transparent 
            leading-tight">
       Maximize Your Harvest with Personalized AI Advice
      </h2>
      
      <p className="text-xl text-white/80 leading-relaxed">
      Farming smarter is easier than ever with SkyLabs. Get personalized, AI-powered advice delivered right to your phone. From irrigation schedules to fertilizer recommendations, we make data-driven decisions simple and accessible
      </p>

      <button 
      onClick={() => navigate('/contact')}
      className="group relative px-10 py-4 
            bg-gradient-to-r from-purple-600 to-pink-600 
            rounded-xl overflow-hidden
            hover:scale-105 active:scale-95
            transition-all duration-300 ease-out"
      >
      <span className="relative z-10 text-white font-semibold 
               text-lg flex items-center gap-3">
        Get Started
        <Rocket className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </span>
      </button>
    </div>
    </div>
  </div>

      {/* Hero Container */}
      <div className="w-[90%] max-w-7xl mx-auto 
            bg-black/20 
            rounded-3xl border border-white/10 
            shadow-2xl shadow-purple-500/5
            hover:shadow-purple-500/10 
            transition-all duration-500 ease-out 
            p-10 mb-20">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left Content with enhanced animations */}
      <div className="text-left space-y-6 transform transition-all duration-700">
      <h2 className="text-5xl md:text-6xl font-bold 
              bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 
              bg-clip-text text-transparent 
              leading-tight">
        Stay Ahead of Threats with Instant Alerts
      </h2>
      
      <p className="text-xl text-white/80 leading-relaxed">
      Never lose sleep worrying about your crops. SkyLabs' smart alert system monitors your fields 24/7 and sends you real-time notifications if any potential issues arise. From pest and disease alerts to soil moisture and nutrient deficiency warnings, we help you stay ahead of threats and ensure a healthy, thriving harvest. Protect your investment and maximize your profits with SkyLabs
      </p>

      <button 
        onClick={() => navigate('/contact')}
        className="group relative px-10 py-4 
            bg-gradient-to-r from-purple-600 to-pink-600 
            rounded-xl overflow-hidden
            hover:scale-105 active:scale-95
            transition-all duration-300 ease-out"
      >
        <span className="relative z-10 text-white font-semibold 
               text-lg flex items-center gap-3">
        Get Started
        <Rocket className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </span>
      </button>
      </div>

      {/* Right Image with enhanced effects */}
      <div className="relative h-[500px] rounded-2xl overflow-hidden 
              transform hover:scale-[1.02] transition-transform duration-700">
      <img 
        src="/images/img1.jpg"
        alt="Space Technology"
        className="w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t 
              from-black/60 via-black/20 to-transparent" />
      </div>
    </div>
      </div>      
      {/* Scroll indicator */}
      
    </section>
  );
}

