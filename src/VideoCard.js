import React from 'react';
import './VideoCard.css'
function VideoCard() {
    return (
        <div className='videoCard'>
            <video src='https://www.instagram.com/reel/CRTjvXIFvhF/?utm_source=ig_web_copy_link' alt='IG reel video' loop={true}>

            </video>
        </div>
    )
}

export default VideoCard
