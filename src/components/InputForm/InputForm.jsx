import styled from "styled-components";

const StyledLabel = styled.label` 
    font-size: 18px;
    align-self: flex-start;
`

const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    outline: none;
    font-size: 18px;
    margin-bottom: 10px;
`

const StyledTextArea = styled.textarea`
    width: 100%;
    height: 100px;
    resize: none;
    padding: 10px;
    border: none;
    border-radius: 8px;
    outline: none;
    font-size: 18px;
    margin-bottom: 15px;  
`

const InputForm = ({label, actualizar, id, loadImg}) => {
    const {texto, tipo, placeholder, required, valor} = label;

    const manejarCambio = (e) =>{
        console.log(e.target.value);
        actualizar(e.target.value);
    }
    
    const cargarImg = (e) =>{
        if(id === 0){
            const img = e.target.value;
            loadImg(img);
        }   
    }

    return <>
        <StyledLabel>{texto}</StyledLabel>
        {tipo ==="textarea" ? 
        <StyledTextArea
        placeholder={placeholder}
        required={required}
        value={valor}
        onChange={manejarCambio}
        /> 
        :
        <StyledInput
        type={tipo}
        placeholder={placeholder}
        required={required}
        value={valor}
        onChange={manejarCambio}
        onBlur={cargarImg}
        />}
    </>
}

export default InputForm;