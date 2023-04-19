import { Grid } from "@mui/material";
import styled from "styled-components";

const ImgCover = styled.img`
    width: 100%;
    padding: 1rem;
`

const Cover = () => {
    return <Grid item xs={4}>
        <ImgCover src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/40390-869944-20221102034309.jpg" alt="Cover" />
    </Grid>
}

export default Cover;