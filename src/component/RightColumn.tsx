import styled from "styled-components";
import { useSelector } from 'react-redux'

import type { RootState } from '../app/store'


const StyledRightColumn = styled.div`
  border-radius: 8px;
  background-color: var(--very-dark-cyan); 
  max-width: 50%;
  min-height: 100%;
  flex: 1;
`;

function RightColumn (){
    const percentage = useSelector((state: RootState) => state.percentage.value)

    return (
        <StyledRightColumn>
            <div>This is percentage: {percentage}</div>
            This is your styled right column
        </StyledRightColumn>
    )
}

export default RightColumn