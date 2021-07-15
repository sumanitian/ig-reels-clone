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
          channel='sumanitian'
          avatarSrc='https://instagram.fixr3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/130721200_3598634120231465_4726262765774510935_n.jpg?_nc_ht=instagram.fixr3-1.fna.fbcdn.net&_nc_ohc=mBhdRUR_3Y4AX8LKylc&edm=ABfd0MgBAAAA&ccb=7-4&oh=14745eb7e959d7e09cd7779bc578f631&oe=60F73C81&_nc_sid=7bff83'
          song='test song - anupama_parameswaran'
          url='https://www.instagram.com/reel/CRTjvXIFvhF/?utm_source=ig_web_copy_link'
          likes={950}
          shares={330}

        />
        <VideoCard />
      </div>
    </div>
  );
}

export default App;
