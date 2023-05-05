import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: auto;
    max-width: 300px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: end;
    transition: 500ms;

    @media screen and (max-width:500px){
        flex-direction: column;
        align-items: center;
    }
`

const Buscador = styled.input`
    width: 150px;
    text-justify: center;
    border: none;
    border-radius: 18px;
    padding: 7px 35px 7px 10px;
    font-size: 16px;
    outline: none;
    background: #777;
    transition: 500ms;

    :focus{
        width: 220px;
        background: #ccc;
    }
`

const Icono = styled.div`
    position: absolute;
    top: 12%;
    right: 2%;
    font-weight: bold;
    ion-icon{
        font-weight: bold;
        color: #000;
        background: #aaa;
        border-radius: 50%;
        padding: 5px;
    }

    @media screen and (max-width:500px){
        top: auto;
    }
`

const Search = () => {
    return <Container >
        <Buscador  type='search'/>
        <Icono><ion-icon name="search"></ion-icon></Icono>
    </Container>
}

export default Search;