import React from 'react';

import BackgroundVideo from './animations/animation_backgroundVideo.js';

import Navbar from './components/component_navbar.js';
import Intro from './components/component_intro.js';
import Experience from './components/component_experience.js';
import Skills from './components/component_skills.js';

import Footer from './components/component_footer.js';

function App() {
  return (
    <div className="App relative text-gray-200">
      <BackgroundVideo />
      <div className="relative z-10">
        {<Navbar />}
        {<Intro />}
        {<Experience />}
        {<Skills />}
        {/*<Projects />*/}
        {<Footer />}
      </div>
    </div>
  );
}

export default App;