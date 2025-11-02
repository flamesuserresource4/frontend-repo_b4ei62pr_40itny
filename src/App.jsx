import React from 'react';
import HeroCover from './components/HeroCover';
import ScrollScenes from './components/ScrollScenes';
import CommunitySpotlight from './components/CommunitySpotlight';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white antialiased">
      <HeroCover />
      <ScrollScenes />
      <CommunitySpotlight />
      <FooterCTA />
    </div>
  );
}

export default App;
