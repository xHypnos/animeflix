import styled from "styled-components";
import Logo from "../../assets/images/logo.svg"
import Link from "../Link/Link";

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
        color: #fff;
    }
`

const Text = styled.p`
    margin: 0;
    a{
        color: #fff;
    }
`

const Footer = () => {
    return <Container>
        <Box>
            <Img src={Logo} alt="Logo Animeflix"/>
            <Redes>
                <Link texto = {<ion-icon size="large" name="logo-facebook"></ion-icon>} link = "https://www.facebook.com"/>
                <Link texto = {<ion-icon size="large" name="logo-instagram"></ion-icon>} link = "https://www.instagram.com"/>
                <Link texto = {<ion-icon size="large" name="logo-twitter"></ion-icon>} link = "https://www.twitter.com"/>
            </Redes> 
        </Box>
        <Box>
            <Text>Animeflix | © 2023</Text>
        </Box>
        <Box>
            <Text>Proyecto educativo Alura Latam</Text>
            <Text>Desarrollado por <Link link="https://andresmontes.dev" texto ="Andrés Montes"/></Text>
        </Box>
    </Container>

}

export default Footer;