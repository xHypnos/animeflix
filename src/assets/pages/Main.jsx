import { Container, Box, Typography, Grid } from "@mui/material";
import styled from "styled-components";
import Cover from "../../components/Cover";
import Button from "../../components/Button";

const Title = styled.h1`
  font-size: 3rem;
`

const StyledContainer = styled.div`
    position: relative;
    width: 70%;

`

const SubTitle = styled.h2`
    font-size: 2rem;
`

const StyledButton = styled(Button)`
    position: absolute;
    bottom: 2rem;
`

const Main = () => {
    return <Container>
        <Title>Tus Animes favoritos en un solo lugar</Title>
        <Box display={"flex"}>
            <Cover/>
            <StyledContainer>
                <SubTitle>One Piece - Film Red</SubTitle>
                <Typography variant="h6">Los Piratas de Sombrero de Paja van a un festival de música en la isla de Elegia a ver el concierto de Uta, una diva de enorme fama. Lo que iba a ser un concierto normal es interrumpido por una gran revelación por parte de Luffy: Uta es hija del Emperador Pirata Shanks.
                </Typography>
                <StyledButton text={"Ver Pelicula"}/>
            </StyledContainer>
        </Box>
        <Box>
            <SubTitle>Explora nuestro catalogo</SubTitle>
            <Grid container spacing={1}>
                <Cover /> 
                <Cover /> 
                <Cover /> 
                <Cover /> 
                <Cover /> 
                <Cover />            
            </Grid>
        </Box>
    </Container>
}

export default Main;