import styled from "styled-components";

export const ContainerApp =  styled.div`
    border: 1px solid #b8b8b8;
    border-radius: 10px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    min-height: 99vh;

    @media(max-width: 600px){
        border: none;
    }
`