import VideoFrame from "../../components/VideoFrame/VideoFrame";
import { useState, useEffect } from "react";
import { animes } from "../js/datos";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin: auto;
`

const SubTitle = styled.h2`
    width: 80%;
    font-size: 2rem;
    margin: 10px auto;
`

const VideoPlayer = () => {
    const [anime, setAnime] = useState({});
    const {id} = useParams();

    useEffect(() => {
       setAnime(animes.find(anime => anime.id === parseInt(id)))
    }, [id]);

    const {titulo} = anime;

    return <Container>
        <SubTitle>{titulo}</SubTitle>
        <VideoFrame anime={anime}/>
    </Container>
}

export default VideoPlayer;