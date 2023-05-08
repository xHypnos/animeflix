import styled from "styled-components";
import Cover from "../../components/Cover";
import Banner from "../../components/Banner";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { onGetAnimes } from "../../firebase";
import ContentLoader from "react-content-loader";

const MainLoader = () => (
    <ContentLoader
        speed={2}
        backgroundColor="#aaaaaa"
        foregroundColor="#cccccc"
        width={800}
        height={300}
    >
        <rect x="5%" y="5" rx="5" ry="5" width="40%" height="290" />
        <rect x="50%" y="20" rx="4" ry="4" width="40%" height="50" />
        <rect x="50%" y="90" rx="4" ry="4" width="40%" height="100" />
        <rect x="50%" y="210" rx="4" ry="4" width="40%" height="50" />
    </ContentLoader>
)

const CoverLoader = () => (
    <ContentLoader
        speed={2}
        backgroundColor="#aaaaaa"
        foregroundColor="#cccccc"
        width={700}
        height={320}
    >
        <rect x="0" y="5" rx="2" ry="2" width="200" height="300" /> 
        <rect x="250" y="5" rx="2" ry="2" width="200" height="300" /> 
        <rect x="500" y="5" rx="2" ry="2" width="200" height="300" />
    </ContentLoader>
)

const Container = styled.div`
    display: flex;
    padding: 1rem;
    max-width: 1200px;
    margin: auto;
    flex-direction: column;
`
const Grid = styled(Container)`
    padding: 0;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
`

const Title = styled.h1`
    font-size: 3rem;
`

const SubTitle = styled.h2`
    font-size: 2rem;
`

const StyledLink = styled(Link)`
    transition: all .3s;
    :hover{
        transform: scale(103%);
    }
`

const TituloCover = styled.h3`
    margin: auto;
`

const Main = () => {
    const animesLocal = JSON.parse(window.localStorage.getItem('listaAnime'));

    const [loading, setLoading] = useState(true);
    const [animes, setAnimes] = useState(animesLocal);
    const [banner, setBanner] = useState(0);
      
    window.addEventListener('DOMContentLoaded', async () => {
        animesLocal === null ? setLoading(true) : setAnimes(animesLocal);
        onGetAnimes((querySnapshot) => {
            let animeData = [];

            querySnapshot.forEach((snapshot) => {
                animeData.push(snapshot.data());
            });

            window.localStorage.setItem('listaAnime', JSON.stringify(animeData));
            setAnimes(animeData);
            setLoading(false);
            
        });
    });

    useEffect(() => {
        if(!animesLocal){  
            setLoading(true);
        } else {
            setBanner(animesLocal.length);
            setLoading(false);
        }
    }, [animesLocal]);

    return <Container>
        <Title>Animes agregados recientemente:</Title>
        {loading ? <MainLoader/> : <Banner anime = {animes[banner-1]}/>}
        <Container>
            <SubTitle>Explora nuestro catalogo</SubTitle>
            <Grid>
                {loading ? <CoverLoader/> :
                animes.map((anime, i) => {
                    const {id, titulo, portada} = anime;
                    return <Container  key={i}>
                        <StyledLink to={`/player/${id}`}><Cover width={"280px"} image={portada}/></StyledLink>
                        <TituloCover>{titulo}</TituloCover>
                    </Container> 
                })}        
            </Grid>
        </Container>
    </Container>
}

export default Main;