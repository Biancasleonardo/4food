import Card from '@material-ui/core/Card';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
    width: 30.5rem;
  height: 7rem;
  margin: 0.438rem 0 0;
  border-radius: 8px;
  border: solid 1px var(--greyish);
  align-self: center;

  @media(max-width: 600px){
    width: 20.5rem;
}
`

export const AddButton = styled.button`
width: 5.625rem;
height: 1.938rem;
margin: 0.438rem 0 0 0.5rem;
padding: 0.5rem 1.281rem 0.563rem 1.344rem;
border-radius: 8px 0;
border: solid 1px black;
position: absolute; 
bottom: 0;
right: -160px; 
z-index: 2;
color: black;
background-color:white;

@media(max-width: 600px){
  right: 0;
}
`
export const RelaDiv = styled.div`
position: relative;
display: flex;
flex-direction: column;
`
export const RemoveButton = styled.button`
width: 5.625rem;
height: 1.938rem;
margin: 0.438rem 0 0 0.5rem;
padding: 0.5rem 1.281rem 0.563rem 1.344rem;
border-radius: 8px 0;
border: solid 1px #e02020;
position: absolute; 
bottom: 0;
right: -160px; 
z-index: 2;
color: #e02020;
background-color:white;

@media(max-width: 600px){
  right: 0;
}
`

