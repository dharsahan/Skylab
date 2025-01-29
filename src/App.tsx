import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Technology } from './pages/Technology';
import { Impact } from './pages/Impact';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';
import { AnimatedRoute } from './components/AnimatedRoute';
import { HyperSpectral } from './pages/technology/HyperSpectral';
import { MultiSpectral } from './pages/technology/MultiSpectral';
import { SAR } from './pages/technology/SAR';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="app-background">
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedRoute><Home /></AnimatedRoute>} />
          <Route path="/technology" element={<AnimatedRoute><Technology /></AnimatedRoute>} />
          <Route path="/impact" element={<AnimatedRoute><Impact /></AnimatedRoute>} />
          <Route path="/team" element={<AnimatedRoute><Team /></AnimatedRoute>} />
          <Route path="/contact" element={<AnimatedRoute><Contact /></AnimatedRoute>} />
          <Route path="/technology/hyperspectral" element={<AnimatedRoute><HyperSpectral /></AnimatedRoute>} />
          <Route path="/technology/multispectral" element={<AnimatedRoute><MultiSpectral /></AnimatedRoute>} />
          <Route path="/technology/sar" element={<AnimatedRoute><SAR /></AnimatedRoute>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;