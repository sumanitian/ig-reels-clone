import React from 'react';
import './App.css';
import VideoCard from './VideoCard';
function App() {
  return (
    // BEM naming convention
    <div className="app">
      <div className="app__top">
        <img className="app__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="">
        </img>
        <h1>Reels</h1>
      </div>
      <div className="app__videos">
        <VideoCard 
          channel={channel}
          avatarSrc={avatarSrc}
          song={song}
          url={url}
          likes={likes}
          shares={shares}

        />
        <VideoCard />
      </div>
    </div>
  );
}

export default App;
