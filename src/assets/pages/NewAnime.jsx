import styled from "styled-components";
import Form from "../../components/Form/Form";
import Cover from "../../components/Cover";
import Upload from "../images/upload.jpg";
import { useState } from "react";

const Container = styled.div`
    width: 90%;
    display: flex;
    padding: 1rem;
    margin: auto;
    flex-direction: column;
`

const Box = styled(Container)`
    flex-direction: row;
`

const Titulo = styled.h2`
    margin: auto;
    margin-bottom: 20px;
`

const NewAnime = () => {
    const [image, setImage] = useState(Upload);  

    return <Container>
        <Titulo>Agregar nuevo anime</Titulo>
        <Box>
            <Container>
                <Cover width="100%" image={image}/>
            </Container>
            <Container>
                <Form loadImg={setImage}/>
            </Container>
        </Box>
    </Container>
}

export default NewAnime;