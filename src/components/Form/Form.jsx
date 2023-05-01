import styled from "styled-components"
import InputForm from "../InputForm/InputForm"
import Button from "../Button"
import { useState } from "react"
import { v4 as uuid } from "uuid"
import { addAnime } from "../../assets/js/datos"

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Form = ({loadImg}) => {
    const [caratula, setCaratula] = useState("");
    const [titulo, setTitulo] = useState("");
    const [video, setVideo] = useState("");
    const [fecha, setFecha] = useState("");
    const [director, setDirector] = useState("");
    const [duracion, setDuracion] = useState("");
    const [descripcion, setDescripcion] = useState("");
    
    const funciones = [setCaratula, setTitulo, setVideo, setFecha, setDirector, setDuracion, setDescripcion];

    const datosForm = [
        {"texto": "Link caratula: ",
        "tipo": "text",
        "placeholder": "Ingrese el link de la caratula",
        "required": true,
        "valor": `${caratula}`,
        "actualizar": `${setCaratula}`},
        {"texto": "Titulo: ",
        "tipo": "text",
        "placeholder": "Ingrese nombre del anime",
        "required": true,
        "valor": `${titulo}`,
        "actualizar": `${setTitulo}`},
        {"texto": "Link video: ",
        "tipo": "text",
        "placeholder": "Ingrese el link del video en YouTube embed",
        "required": true,
        "valor": `${video}`,
        "actualizar": `${setVideo}`},
        {"texto": "Fecha: ",
        "tipo": "text",
        "placeholder": "Ingrese la fecha de estreno",
        "required": true,
        "valor": `${fecha}`,
        "actualizar": `${setFecha}`},
        {"texto": "Director: ",
        "tipo": "text",
        "placeholder": "Ingrese el nombre del director",
        "required": true,
        "valor": `${director}`,
        "actualizar": `${setDirector}`},
        {"texto": "Duracion: ",
        "tipo": "text",
        "placeholder": "Ingrese la duracion en minutos",
        "required": true,
        "valor": `${duracion}`,
        "actualizar": `${setDuracion}`},
        {"texto": "Descripcion: ",
        "tipo": "textarea",
        "placeholder": "Ingrese la sinopsis o descripcion",
        "required": true,
        "valor": `${descripcion}`,
        "actualizar": `${setDescripcion}`},
    ];
    
    const agregarAnime = (e) => {
        e.preventDefault();
        const nuevoAnime = {
            "id": `${uuid()}`,
            "portada": `${caratula}`,
            "titulo": `${titulo}`,
            "descripcion": `${descripcion}`,
            "video": `${video}`,
            "fecha": `${fecha}`,
            "director": `${director}`,
            "duracion": `${duracion}`
            };
        
        addAnime(nuevoAnime);
    }

    return <StyledForm onSubmit={agregarAnime}>
        {datosForm.map((dato, i) => {return <InputForm loadImg={loadImg} key={i} id={i} actualizar={funciones[i]} label={dato}/>})}
        <Button 
        text="Agregar"
        onSubmit
        />
    </StyledForm>
}

export default Form;