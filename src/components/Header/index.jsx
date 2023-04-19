import Logo from "../../assets/images/logo.svg";
import styled from "styled-components";
import Search from "../Search";

    
const Container = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    background: #555555;
`

const Img = styled.img`
    width: 200px;
`

const Header = () => {
    return <Container>
        <Img src={Logo} alt="Animeflix Logo"/>
        <Search/>
        
    </Container>
}

export default Header;