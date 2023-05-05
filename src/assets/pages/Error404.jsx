import styled from "styled-components";
import ErrorImg from "../images/404.webp";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    align-items: center;
    padding: 10px;
`
const Image = styled.img`
    width: 80%;
    border-radius: 18px;
    border: 5px solid #555;
    margin: 10px auto;
`

const Error404 = () => {
    
   

    return <Container>
        <Image src={ErrorImg} alt="Error 404" />
        <Link to="/"><Button text="Regresar"/></Link>
    </Container>
}

export default Error404;