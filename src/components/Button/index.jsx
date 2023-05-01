import styled from "styled-components"

const Btn = styled.button`
    text-align: center;
    width: 150px;
    padding: 10px;
    border: 1px solid #ffffff;
    border-radius: 5px;
    cursor: pointer;
    color: #ffffff;
    background: none;
    font-size: 18px;
    transition: 300ms;
    :hover{
        background: #ffffff;
        color: #000000;
    }
`

const Button = ({text}) =>{
    return <Btn>{text}</Btn>
}

export default Button;