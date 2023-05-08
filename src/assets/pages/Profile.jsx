import { useAuth } from "../../context/authContext";
import styled from "styled-components";
import Photo from "../images/profile.jpg";
import { Link } from "react-router-dom";

const Container = styled.div`
    padding: 10px;
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
`

const Subtitle = styled.h3`

`

const Texto = styled.p`
    margin: 5px;
`

const Img = styled.img`
    border-radius: 50%;
    border: solid 1px #000;
`


const Profile = () => {
    const {user} = useAuth();
    const {metadata: {creationTime}} = user;

    const formatoFecha = (fecha) =>{
        const date = new Date(fecha);
        const opciones = { year: 'numeric', month: 'short', day: 'numeric' };
        const fechaFormateada = date.toLocaleString('es-ES', opciones);

        return fechaFormateada;
    }

return <Container>
        <Subtitle>Bienvenido {user.displayName ? user.displayName : "Otaku"}!</Subtitle>
        <Img src={user.photoURL ? user.photoURL : Photo}/>
        <Texto>Miembro desde: {formatoFecha(creationTime)}</Texto>
        <Texto>Email: {user.email}</Texto>
        <Link to={"/new"}>Agregar Animes</Link>
    </Container>
}

export default Profile;