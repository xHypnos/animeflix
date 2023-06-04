import styled from "styled-components";
import { Button } from "./Button/Button";

const Container = styled.div`
    position: fixed;
    top: calc(50% - 150px);
    right: calc(50% - 250px);
    width: 500px;
    height: 300px;
    background: #555555;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    button{
        width: 100px;
        color: green;
        border: 1px solid green;

        :hover{
            background: green;
        }
    }

    ion-icon{

    }
`

const Text = styled.p`
    font-size: 1.5rem;
`

const MessageWindow = ({text, func}) => {
    return <Container>
        <Text>{text}</Text>
        <Button funcion={func} ion={<ion-icon name="checkmark-outline"></ion-icon>}/>
    </Container>
};

export default MessageWindow;