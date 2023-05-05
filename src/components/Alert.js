import styled from "styled-components";

const Error = styled.p`
    padding: 5px;
`

const Alert = ({error}) => {
    return <Error>{error}</Error>
}

export default Alert;