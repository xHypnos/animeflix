import React from "react";



const VideoFrame = () => {

    return <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/kE8lM3tAeGg" 
        title="YouTube video player" 
        frameborder="1" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
    </iframe>
}

export default VideoFrame;