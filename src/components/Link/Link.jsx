import styled from "styled-components"

const StyledLink = styled.a`

`

const Link = ({texto, link}) => {
    return <StyledLink href={link} target="_blank" rel="noreferrer">{texto}</StyledLink>
}

export default Link;