import styled from "styled-components";
import { useSelector } from 'react-redux'

import type { RootState } from '../app/store'
import ResultBox from "./RightColumn/ResultBox";
import ResetButton from "./RightColumn/ResetButton";


const StyledRightColumn = styled.div`
  border-radius: 8px;
  background-color: var(--very-dark-cyan); 
  max-width: 50%;
  min-height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    min-width: 100%;
  }

  `;

function RightColumn (){

    return (
        <StyledRightColumn>
            <ResultBox label="Tip Amount"/>
            <ResultBox label="Total"/>
            <ResetButton/>
        </StyledRightColumn>
    )
}

export default RightColumn