import styled from "styled-components";


export const Grid = styled.div`
    margin:0.5em 0;
`

export const Main = styled.div`
  font-family:'Roboto';
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  img{
      margin: 1.5rem 0;
  }
  form{
      width:100%;
      display:flex;
      justify-content:center;
      flex-direction:column;
      align-items:center;
      margin-top: 1rem;
      input{
          width:30.5rem;

          @media(max-width: 600px){
            width: 20.5rem;
        }
      }
      button{
          width:32.3rem;

          @media(max-width: 600px){
            width: 22.3rem;
        }
      }
  }
`
