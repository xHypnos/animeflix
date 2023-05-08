import styled from "styled-components";
import InputForm from "../../components/InputForm/InputForm";
import { useState } from "react";
import {Button} from "../../components/Button";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Container = styled.div`
    padding: 20px;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    ion-icon{
        font-size: 28px;
        color: #db3236;
        margin-right: 10px;
    }
`

const Form = styled.form`
    width: 100%;
    max-width: 400px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
`

const StyledLink = styled(Link)`
    color: #fff;
    transition: all .3s;
    :hover{
        color: #da202c
    }
`

const Texto = styled.p`
    margin: 0;
    padding: 0;
`

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const {signup, loginWithGoogle} = useAuth();
    const navigate = useNavigate();

    const funciones = [setEmail, setPassword];

    const datosForm = [{"texto": "Email: ",
    "tipo": "email",
    "placeholder": "Ingrese email",
    "required": true,
    "valor": `${email}`},
    {"texto": "Password: ",
    "tipo": "password",
    "placeholder": "Ingrese nombre del anime",
    "required": true,
    "valor": `${password}`}]

    const registrarUsuario = async (e) => {
        e.preventDefault();
        setError("");
        try{
            await signup(email, password);
            navigate("/");
        }catch(e){
            setError(e.message);
            console.log(e.message);
        }
    }

    const googleSignin = async() => {
        try {
            await loginWithGoogle();
            navigate("/");    
        } catch (e) {
           return setError(e.message);
        }
    }

    return <Container>
        <Form onSubmit={registrarUsuario}>
            {error && <p>{error}</p>  }
            {datosForm.map((dato, i) => {return <InputForm key={i} id={i} actualizar={funciones[i]} label={dato}/>})}  
            <Button text="Registrar"/> 
            <Texto>¿Ya tienes una cuenta? <StyledLink to={"/login"}>¡Ingresa aqui!</StyledLink></Texto>  
        </Form>
        <Texto>--- O ---</Texto>
        <Button funcion={googleSignin} text="Regístrate con Google" ion={<ion-icon name="logo-google"></ion-icon>}/>
    </Container>
    
    
}

export default Register;