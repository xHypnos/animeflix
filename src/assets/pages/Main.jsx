import styled from "styled-components";
import Cover from "../../components/Cover";
import Button from "../../components/Button";

const Container = styled.div`
    display: flex;
    padding: 1rem;
    max-width: 1200px;
    margin: auto;
    flex-direction: column;
`

const Box = styled(Container)`
    flex-direction: row;
    padding: 0;
    @media screen and (max-width: 750px){
        flex-direction: column;
    }
`

const Grid = styled(Box)`
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
`

const Title = styled.h1`
    font-size: 3rem;
`

const SubTitle = styled.h2`
    font-size: 2rem;
`

const StyledButton = styled(Button)`
   
    bottom: 2rem;
`

const Main = () => {
    return <Container>
        <Title>Tus Animes favoritos en un solo lugar</Title>
        <Box>
            <Cover width={"100%"}/>
            <Container>
                <SubTitle>One Piece - Film Red</SubTitle>
                <p>Los Piratas de Sombrero de Paja van a un festival de música en la isla de Elegia a ver el concierto de Uta, una diva de enorme fama. Lo que iba a ser un concierto normal es interrumpido por una gran revelación por parte de Luffy: Uta es hija del Emperador Pirata Shanks.
                </p>
                <p>Fecha de estreno: 6 de agosto de 2022</p>
                <p>Director: Gorō Taniguchi</p>
                <p>Duracion: 120 minutos</p>
                <StyledButton text={"Ver Pelicula"}/>
            </Container>
        </Box>
        <Container>
            <SubTitle>Explora nuestro catalogo</SubTitle>
            <Grid>
                <Cover width={"300px"}/> 
                <Cover width={"300px"}/> 
                <Cover width={"300px"}/> 
                <Cover width={"300px"}/> 
                <Cover width={"300px"}/> 
                <Cover width={"300px"}/>            
            </Grid>
        </Container>
    </Container>
}

export default Main;