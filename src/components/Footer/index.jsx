import styled from "styled-components";
import Logo from "../../assets/images/logo.svg"
import Enlace from "../Enlace/Enlace";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
    background: #555555;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

const Box = styled(Container)`
    flex-direction: column;
`

const Img = styled.img`
    width: 150px;
`

const Redes = styled.ul`
    margin: 10px 0 0 0;
    padding: 0;

    a{
        margin-right: 10px;
    }
`

const Text = styled.p`
    margin: 0;
`

const Footer = () => {
    return <Container>
        <Box>
            <Link to={"/"}><Img src={Logo} alt="Logo Animeflix"/></Link>
            <Redes>
                <Enlace texto = {<ion-icon size="large" name="logo-facebook"></ion-icon>} link = "https://www.facebook.com"/>
                <Enlace texto = {<ion-icon size="large" name="logo-instagram"></ion-icon>} link = "https://www.instagram.com"/>
                <Enlace texto = {<ion-icon size="large" name="logo-twitter"></ion-icon>} link = "https://www.twitter.com"/>
            </Redes> 
        </Box>
        <Box>
            <Text>Animeflix | © 2023</Text>
        </Box>
        <Box>
            <Text>Proyecto educativo Alura Latam</Text>
            <Text>Desarrollado por <Enlace link="https://andresmontes.dev" texto ="Andrés Montes"/></Text>
        </Box>
    </Container>

}

export default Footer;