import { styled } from "styled-components";

import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

const StyledCalculator = styled.div`
  border-radius: 8px;
  background-color: var(--white); 
  width: 67%;
  max-height: 82%;
  padding: 2rem;

  display:flex;
  flex-direction: row;
  gap: 4rem;

  @media (max-width: 768px) {
    width: 67%;
    max-height: none;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }
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