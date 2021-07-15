import React from 'react'
import './VideoFooter.css'
import { Avatar, Button } from '@material-ui/core';

function VideoFooter({ channel, song, likes, shares, avatarSrc }) {
    return (
        <div className='videoFooter'>
            <Avatar src={avatarSrc} />
        </div>
    )
}

export default VideoFooter
