import React from 'react';

import BackgroundVideo from './animations/animation_backgroundVideo.js';

import Intro from './components/components_intro.js';

function App() {
  return (
    <div className="App relative text-gray-200">
      <BackgroundVideo />
      <div className="relative z-10">
        {/*<Navbar />*/}
        {<Intro />}
        {/*<Experience />*/}
        {/*<Skills />*/}
        {/*<Projects />*/}
        {/*<About />*/}
        {/*<Footer />*/}
      </div>
    </div>
  );
}

export default App;