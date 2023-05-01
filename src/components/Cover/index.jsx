import styled from "styled-components";



const ImgCover = styled.img`
    min-width: 280px;
    max-width: 450px;
    border-radius: 8px;
    aspect-ratio: 2/3;
    object-fit: cover;
`

const Cover = ({width, image}) => {
    return <ImgCover width={width} src={image} alt="Cover" />
}

export default Cover;