import React from 'react';
import './App.css';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <div className="app__top">
        <img className="app__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="">
        </img>
        <h1>Reels</h1>
          {/* image at top-logo */}
          {/* Reels text */}
      </div>
      <div className="app__videos">
        {/* containeer of app_videos (scrollable container) */}

        {/* <video> */}
      </div>
    </div>
  );
}

export default App;
