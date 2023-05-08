import Logo from "../../assets/images/logo.svg";
import styled from "styled-components";
import Search from "../Search";
import { Link } from "react-router-dom";
import UserIcon from "../UserIcon";

const Container = styled.div`
    display: flex;
    padding: 1rem 2rem;
    justify-content: space-between;
    align-items: center;
    background: #555555;
`

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:500px){
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
`

const Img = styled.img`
    width: 200px;
    margin-right: 10px;

    @media screen and (max-width: 650px){
         width: 180px;
    }
`

const Header = () => {
    return <Container>
        <Box>
            <Link to={"/main"}><Img src={Logo} alt="Animeflix Logo"/></Link>
            <Search/>
        </Box>
        <UserIcon/>
    </Container>
}

export default Header;