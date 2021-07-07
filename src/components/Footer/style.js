import styled from "styled-components"
import { IconButton } from "@material-ui/core"

export const StickFooter = styled.div`
    overflow: hidden;
    position: fixed;
    display: flex;
    justify-content: space-around;
    bottom: 0;
    width: 600px;
    border-top: 1px solid #b8b8b8;
    background-color: #FFFFFF;
    z-index: 100;

    @media(max-width: 600px){
      width: 100%;
    }
`

export const StyledIconButton = styled(IconButton)`
     &:hover{
    color: #E0212C;
  }
`