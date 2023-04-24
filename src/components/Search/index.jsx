import * as React from 'react';
import styled from 'styled-components';
/* 
const StyledSearch = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const ContainerIco = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
            width: '20ch',
        },
        },
    },
}));

const Search = () => {
    return <StyledSearch>
        <ContainerIco>
            <SearchIcon/>
        </ContainerIco>
        <StyledInputBase
            placeholder="Buscar..."
            inputProps={{ 'aria-label': 'search' }}
        />
    </StyledSearch>
}

*/

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
    top: 20%;
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