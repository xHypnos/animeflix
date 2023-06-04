import { useAuth } from "../../context/authContext";
import styled from "styled-components";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import {Button} from "../../components/Button/Button";
import Background from "../images/logo2x.png";
import { onGetAnimes } from "../../firebase";
import { useEffect } from "react";

const Container = styled.div`
    width: 100%;
    max-width: 900px;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 20px 30px;
    background-color: rgba(85, 85, 85, 0.5);
    border-radius: 8px;

    ::before{
        content: "";
        background: url("${Background}");
        opacity: 0.1;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;  
    }
`

const Box = styled(Container)`
    background: none;
    padding: 0;
`

const StyledButton = styled.button`
width: 200px;
padding: 10px;
border: 2px solid #000;
border-radius: 5px;
margin-top: 10px;
cursor: pointer;
background: rgba(218, 32, 44, 0.5);
color: #000;
font-weight: 500;
font-size: 18px;
transition: all .3s;
display: flex;
justify-content: center;
align-items: center;

:hover{
    background: rgba(0, 0, 0, 0.5);
    color: #da202c;
    border: 2px solid #da202c;
}
`

const Landing = () => {
    const {user} = useAuth();
    
    const getData = async () =>{
        onGetAnimes((querySnapshot) => {
            let animeData = [];
            
            querySnapshot.forEach((snapshot) => {
                animeData.push(snapshot.data());
            });

            console.log(animeData);
            window.localStorage.setItem('listaAnime', JSON.stringify(animeData));
        });
    };

    useEffect( () => {
        getData();
    }, []);

    /* window.addEventListener('DOMContentLoaded', async () => {
        onGetAnimes((querySnapshot) => {
            let animeData = [];

            querySnapshot.forEach((snapshot) => {
                animeData.push(snapshot.data());
            });

            window.localStorage.setItem('listaAnime', JSON.stringify(animeData));
            
        });
    }); */

    return <Container>
        {user ? <Profile/> : <Box>
            <Link to="/login"> <Button text={"Iniciar sesion"}/></Link>
            <Link to="/register"> <Button text={"Registrarme"}/></Link>    
        </Box>}
        <Link to="/main"> <StyledButton>Explorar Animes</StyledButton></Link>
    </Container>
}

export default Landing;