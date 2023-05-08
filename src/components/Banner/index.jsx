import styled from "styled-components"
import Cover from "../Cover"
import {Button} from "../../components/Button";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    padding: 2rem;
    background: rgba(85, 85, 85, 0.5);
    border-radius: 8px;
    @media screen and (max-width: 750px){
        align-items: center;
        flex-direction: column;
        padding: 1rem;
    }
`
const Box = styled(Container)`
    flex-direction: column;
    background: none;
    p{
        margin: 10px 0;
    }
`

const SubTitle = styled.h2`
    font-size: 2rem;
    margin: 0;
`

const Banner = ({anime}) => {
    const {id, titulo, portada, descripcion, fecha, director, duracion} = anime;



    return <Container>
        <Cover width={"60%"} image={portada}/>
        <Box>
            <SubTitle>{titulo}</SubTitle>
            <p>{descripcion}</p>
            <p>Fecha de estreno: {fecha}</p>
            <p>Director: {director}</p>
            <p>Duracion: {duracion}</p>
            <Link to={`/player/${id}`}>  
                <Button text="Ver"/> 
            </Link>
        </Box>  
    </Container>
}

export default Banner;