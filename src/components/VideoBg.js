import React from 'react'
import video from "../video/video.mp4"

export const VideoBg = () => {
    return (
        <video autoPlay muted loop id="myVideo">
            <source src={video} type="video/mp4" />
        </video>
    )
}
