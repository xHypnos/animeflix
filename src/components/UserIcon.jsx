import styled from "styled-components";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";
import Photo from "../assets/images/profile.jpg"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 500px){
         margin-top: 10px;
    }
`
const StyledLink = styled(Link)`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    color: #fff;
    transition: all .3s;

    ion-icon{
        margin: auto;
        font-size: 24px;
    }

    :hover{
        color:#da202c; 
    }
`
const Text = styled.p`
    padding: 0;
    margin: 0 5px 0 0;
    font-size: 18px;

    @media screen and (max-width: 650px){
         display: none;
    } 
`
const LoggedLink = styled(StyledLink)`
    :hover{
        color: green;
    }
`

const Img = styled.img`
    width: 40px;
    border-radius: 50%;
    border: 2px solid #000;
`

const Button = styled.button`
    border: none;
    background: none;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
    display: flex;
    transition: all .3s;

    :hover{
        color: #da202c; 
    }
`

const UserIcon = () => {
    const {user, logout} = useAuth();

    const cerrarSesion = async() =>{
        await logout();
    }

    if(!user) return <StyledLink to="/login">
                <Text>Login</Text>
                <ion-icon name="log-in-outline"></ion-icon>
            </StyledLink>

    return <Container>
        <LoggedLink to="/profile">
            <Text>{user.displayName ? user.displayName : user.email}</Text>
            <Img src={user.photoURL ? user.photoURL : Photo}></Img>
        </LoggedLink>
        <Button onClick={cerrarSesion}><ion-icon  name="log-out-outline"></ion-icon></Button>
    </Container>
}

export default UserIcon;