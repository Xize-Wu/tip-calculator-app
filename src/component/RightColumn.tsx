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

    const bill = useSelector((state: RootState) => state.bill.value)
    console.log(typeof(bill))

    return (
        <StyledRightColumn>
            <div>This is percentage: {percentage}</div>
            <div>This is bill: {bill}</div>
        </StyledRightColumn>
    )
}

export default RightColumn