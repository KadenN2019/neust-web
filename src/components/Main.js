import React from 'react';
import '../styles/footer.css'

import HomeSlider from "./homeslider"

import HomeSliderPhone from "./homesliderPhone"

import '../styles/main.css'

function App() {
  return (
    <div>
      <div id="MainSlider">
        <HomeSlider/>
      </div>
      <div id="PhoneSlider">
        <HomeSliderPhone/>
      </div>
    </div>
  );
}

export default App;
