import styled from "styled-components";

const ImgCover = styled.img`
    padding: 1rem;
    min-width: 300px;
    max-width: 450px;
    margin: auto;
`

const Cover = ({width}) => {
    return <ImgCover width={width} src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/40390-869944-20221102034309.jpg" alt="Cover" />
}

export default Cover;