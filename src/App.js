// import React from 'react';
import './App.css';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <h1>Hey let's build ig-reels-clone</h1>
      <div className="app__top">
        <img className="app__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="">

        </img>
          {/* image at top-logo */}
          {/* Reels text */}
      </div>
      <div className="app__videos">
        {/* containeer of app_videos (scrollable container) */}
      </div>
    </div>
  );
}

export default App;
