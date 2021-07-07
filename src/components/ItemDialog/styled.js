import styled from 'styled-components';

export const Container = styled.div`
position: absolute; 
top: 0;
right: -160px; 
z-index: 2;

@media(max-width: 600px){
  right: 0;
}
`

export const Select = styled.select`
width:  14.5rem;
height: 3.5rem;
margin: 0.563rem 1rem 0;
padding: 1rem;
border-radius: 4px;
border: solid 1px grey;
background-color: white;
`

export const StyledButton = styled.button`
  width: 2.063rem;
  height: 2.063rem;
  margin: 0 0 0.688rem 1rem;
  padding: 0.438rem 0.75rem;
  border-radius: 0 8px;
  border: solid 1px #e8222e;
  color: #e8222e;
  background-color:white;
  font-weight : bold;
`