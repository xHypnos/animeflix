import styled from "styled-components"

const Btn = styled.button`
    width: 200px;
    padding: 10px;
    border: 1px solid #ffffff;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
    color: #ffffff;
    background: none;
    font-size: 18px;
    transition: all .3s;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover{
        background: #ffffff;
        color: #000000;
    }
`

export const Button = ({text, ion, funcion}) =>{
    return <Btn onClick={funcion}>{ion}{text}</Btn>
}
