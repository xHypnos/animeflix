import React from "react";
import styled from "styled-components";

const StyledFrame = styled.iframe`
    margin: auto;
    width: 80%;
    aspect-ratio: 16/9;
`

const VideoFrame = ({anime}) => {
    const {video} = anime;

    return <StyledFrame 
        src={video} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
    </StyledFrame>
}

export default VideoFrame;