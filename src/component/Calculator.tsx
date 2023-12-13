import { styled } from "styled-components";

import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

const StyledCalculator = styled.div`
  border-radius: 8px;
  background-color: var(--white); 
  width: 67%;
  height: 42%;
  padding: 2rem;

  display:flex;
  flex-direction: row;
  gap: 2rem;
`;


function Calculator (){
    return(
        <StyledCalculator>
            <LeftColumn/>
            <RightColumn/>
        </StyledCalculator>
    )
}

export default Calculator;