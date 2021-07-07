import styled from "styled-components";
import Card from '@material-ui/core/Card';

export const StyledCard = styled(Card)`
    width: 30.5rem;
    margin: 0.5rem 1rem 0 1rem;
    padding: 0 0 0.5rem;
    border-radius: 8px;

    @media(max-width: 600px){
        width: 20.5rem;
}
`

export const DeliveryInfosContainer = styled.div`
    display: flex;
    justify-content: space-between;    
`