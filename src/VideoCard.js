import React, { useRef, useState } from 'react';
import './VideoCard.css';

function VideoCard() {
    const [isVideoPlaying, setIsVideoPlaying] = 
    useState(false);
    const videoRef = useRef(null);

        const onVideoPress = () => {
            if (isVideoPlaying) {
                //stop
            } else {
                // play
            }
        }
    return (
        <div className='videoCard'>
            <video
                ref={videoRef}
                onclick={onVideoPress}
                className="videoCard__player"
                src='https://www.instagram.com/reel/CRTLdt3DxyR/?utm_source=ig_web_button_share_sheet'
                alt='IG reel video'
                loop
            />
        </div>
    )
}

export default VideoCard