import styled from "styled-components"

const StyledLink = styled.a`
    color: #fff;
    transition: all .3s;
    :hover{
        color: #da202c
    }
`

const Enlace = ({texto, link}) => {
    return <StyledLink href={link} target="_blank" rel="noreferrer">{texto}</StyledLink>
}

export default Enlace;