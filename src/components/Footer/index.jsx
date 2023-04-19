import styled from "styled-components";
import Logo from "../../assets/images/logo.svg"
import { Box } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Container = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    background: #555555;
`

const Img = styled.img`
    width: 150px;
`

const Footer = () => {
    return <Container>
        <Box>
            <Img src={Logo} alt="Logo Animeflix"/>
            <Box>
                <FacebookIcon/>
                <InstagramIcon/>
            </Box>
        </Box>
        <Box>
            <p>Info</p>
            <p>Info</p>
            <p>Info</p>
            <p>Info</p>
        </Box>
    </Container>

}

export default Footer;