import React, { useState } from 'react';
import './VideoCard.css';

function VideoCard() {
    const [isVideoPlaying, setIsVideoPlaying] = 
    useState(false)
    // useState
    // useRef
    return (
        <div className='videoCard'>
            <video
                className="videoCard__player"
                src='https://www.instagram.com/reel/CRTLdt3DxyR/?utm_source=ig_web_button_share_sheet'
                alt='IG reel video'
                loop
            />
        </div>
    )
}

export default VideoCard