import VideoFrame from "../../components/VideoFrame/VideoFrame";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin: auto;
    position: relative;
    
    ::before{
        content: "";
        background: url("${props => props.img}");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        opacity: 0.1;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;  
    }
    
`

const Title = styled.h2`
    width: 80%;
    max-width: 1200px;
    font-size: 3rem;
    margin: 10px auto;
`

const SubTitle = styled(Title)`
    font-size: 2.5rem;
`

const Texto = styled.p`
    width: 80%;
    max-width: 1200px;
    font-size: 1.2rem;
    margin: 0 auto 10px;
`

const VideoPlayer = () => {
    const [anime, setAnime] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const localData = JSON.parse(window.localStorage.getItem('listaAnime'));
        localData.forEach(anime => {
            if(anime.id === id) {
                setAnime(anime);
            }
        })
    }, [id]);

    const {titulo, portada, descripcion, fecha, director, duracion} = anime;

    return <Container img={portada}>
        <Title>{titulo}</Title>
        <VideoFrame anime={anime}/>
        <SubTitle>Descripcion</SubTitle>
        <Texto>{descripcion}</Texto>
        <Texto><strong>Director: </strong>{director}</Texto>
        <Texto><strong>Fecha de estreno: </strong>{fecha}</Texto>
        <Texto><strong>Duracion: </strong>{duracion}</Texto>
    </Container>
}

export default VideoPlayer;