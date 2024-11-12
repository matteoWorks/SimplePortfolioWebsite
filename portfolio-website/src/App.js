import React from 'react';

import BackgroundVideo from './animations/animation_backgroundVideo.js';

import Intro from './components/component_intro.js';
import Experience from './components/component_experience.js';

import Footer from './components/component_footer.js';

function App() {
  return (
    <div className="App relative text-gray-200">
      <BackgroundVideo />
      <div className="relative z-10">
        {/*<Navbar />*/}
        {<Intro />}
        {<Experience />}
        {/*<Skills />*/}
        {/*<Projects />*/}
        {/*<About />*/}
        {<Footer />}
      </div>
    </div>
  );
}

export default App;