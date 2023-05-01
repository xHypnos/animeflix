import styled from "styled-components";
import ErrorImg from "../images/404.webp";
import Button from "../../components/Button";

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    align-items: center;
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
        <Button text="Regresar" enlace={`/`}/>
    </Container>
}

export default Error404;