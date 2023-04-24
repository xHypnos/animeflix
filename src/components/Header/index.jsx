import Logo from "../../assets/images/logo.svg";
import styled from "styled-components";
import Search from "../Search";

    
const Container = styled.div`
    display: flex;
    padding: 1rem 2rem;
    justify-content: space-between;
    background: #555555;

    @media screen and (max-width:500px){
        height: 120px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    @media screen and (min-width: 1400px){
        
    }
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