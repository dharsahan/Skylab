import React, { useState, useEffect, useRef } from 'react';
import { Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'useInView';

const images = [
  '/images/logo1.png',
  '/images/logo2.jpg',
  '/images/logo3.jpg',
  '/images/logo4.jpg',
  '/images/logo5.jpg',
];

export function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();

  const headlineRef = useRef(null);
  const firstHeroRef = useRef(null);
  const secondHeroRef = useRef(null);
  const pricingRef = useRef(null);

  const headlineVisible = useInView(headlineRef);
  const firstHeroVisible = useInView(firstHeroRef);
  const secondHeroVisible = useInView(secondHeroRef);
  const pricingVisible = useInView(pricingRef);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
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
              w-full max-w-3xl mx-auto"
              style={{
                transform: `translateY(${scrollPosition * 0.1}px)`,
              }}>
        
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
      <section 
        ref={headlineRef}
        className={`relative py-24 overflow-hidden transition-all duration-1000 transform
        ${headlineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        {/* Glowing orb effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 
                          bg-gradient-to-r from-white to-purple-200 
                          bg-clip-text text-transparent">
              Maximize Yields with Real-Time Insights
            </h2>
            <div className="w-full relative mb-12">
        {/* Glowing border effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-sm" />
        <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-purple-500/20">
          <img
            src="https://i.postimg.cc/wv4M0tDS/dash.jpg"
            alt="SkyLabs Agricultural Dashboard"
            className="w-full h-auto"
          />
          {/* Reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
        </div>
      </div>

      <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed">
        Increase your harvest and boost your profits with SkyLabs' real-time satellite monitoring. 
        Get daily updates, personalized recommendations, and the tools you need to achieve maximum 
        yields and a more profitable farm.
      </p>
          </div>
        </div>
      </section>
      {/* First Hero Container */}
      <div 
        ref={firstHeroRef}
        className={`w-[90%] max-w-7xl mx-auto 
        bg-black/20 rounded-3xl border border-white/10 
        shadow-2xl shadow-purple-500/5
        hover:shadow-purple-500/10 
        transition-all duration-1000 transform
        p-10 mb-20
        ${firstHeroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left  Image with enhanced effects */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden 
                transform hover:scale-[1.02] transition-transform duration-700
                order-2 md:order-1">
          <img 
          src="https://i.postimg.cc/QHWJsZ9D/IMG-20250129-WA0012.jpg"
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
          onClick={() => navigate('/technology')}
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

      {/* Second Hero Container */}
      <div 
        ref={secondHeroRef}
        className={`w-[90%] max-w-7xl mx-auto 
        bg-black/20 rounded-3xl border border-white/10 
        shadow-2xl shadow-purple-500/5
        hover:shadow-purple-500/10 
        transition-all duration-1000 transform
        p-10 mb-20
        ${secondHeroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
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
            onClick={() => navigate('/technology')}
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
            src="https://i.postimg.cc/rD1G0GNY/IMG-20250129-WA0005.jpg"
            alt="Space Technology"
            className="w-full h-full object-cover scale-105  "
          
          />
          <div className="absolute inset-0 bg-gradient-to-t 
                  from-black/60 via-black/20 to-transparent" />
          </div>
        </div>
      </div>      
      {/* Pricing Section */}
      <div 
        ref={pricingRef}
        className={`w-full px-8 py-20 transition-all duration-1000 transform
        ${pricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center 
                      bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 
                      bg-clip-text text-transparent mb-16">
          Choose Your Plan
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10
                          p-8 hover:border-purple-500/50 transition-all duration-300
                          hover:shadow-lg hover:shadow-purple-500/10">
            <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
            <p className="text-4xl font-bold text-white mb-6">₹2999<span className="text-lg text-white/60">/mo</span></p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-white/80">
                <span className="mr-2">✓</span> Daily Satellite Images
              </li>
              <li className="flex items-center text-white/80">
                <span className="mr-2">✓</span> Basic Analytics
              </li>
              <li className="flex items-center text-white/80">
                <span className="mr-2">✓</span> Email Support
              </li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-purple-600 text-white font-medium
                               hover:bg-purple-700 transition-colors duration-300">
              Get Started
            </button>
          </div>
  
          {/* Pro Plan */}
          <div className="bg-black/30 backdrop-blur-xl rounded-2xl border border-purple-500/50
                          p-8 transform scale-105 shadow-lg shadow-purple-500/20
                          hover:shadow-purple-500/30 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
            <p className="text-4xl font-bold text-white mb-6">₹4499<span className="text-lg text-white/60">/mo</span></p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-white/80">
                <span className="mr-2">✓</span> All Basic Features
              </li>
              <li className="flex items-center text-white/80">
                <span className="mr-2">✓</span> Advanced Analytics
              </li>
              <li className="flex items-center text-white/80">
                <span className="mr-2">✓</span> Priority Support
              </li>
              <li className="flex items-center text-white/80">
                <span className="mr-2">✓</span> Custom Reports
              </li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600
                               font-medium text-white hover:from-pink-600 hover:to-purple-600
                               transition-all duration-300">
              Get Pro
            </button>
          </div>
  
          {/* Enterprise Plan */}
          <div className="bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10
                          p-8 hover:border-purple-500/50 transition-all duration-300
                          hover:shadow-lg hover:shadow-purple-500/10">
            <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
            <p className="text-4xl font-bold text-white mb-6">Custom</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-white/80">
                <span className="mr-2">✓</span> All Pro Features
              </li>
              <li className="flex items-center text-white/80">
                <span className="mr-2">✓</span> Custom Integration
              </li>
              <li className="flex items-center text-white/80">
                <span className="mr-2">✓</span> 24/7 Support
              </li>
              <li className="flex items-center text-white/80">
                <span className="mr-2">✓</span> Dedicated Manager
              </li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-white/10 text-white font-medium
                               hover:bg-white/20 transition-colors duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      
    </section>
  );
}

