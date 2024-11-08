import React from 'react';
import Video from '../assets/video_backgroundSmoke_night.mp4';

function BackgroundVideo() {
    return (
        <div className="absolute inset-0 z-0">
            <video disablePictureInPicture className="w-full h-full object-cover fixed" autoPlay loop muted playsInline>
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default BackgroundVideo;