import styled from "styled-components";
import { useSelector } from 'react-redux'

import type { RootState } from '../app/store'
import ResultBox from "./RightColumn/ResultBox";


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
    const people = useSelector((state: RootState) => state.people.value)


    return (
        <StyledRightColumn>
            <div>This is percentage: {percentage}</div>
            <div>This is bill: {bill}</div>
            <div>This is people: {people}</div>
            <ResultBox label="Tip Amount"/>
            <ResultBox label="Total"/>
        </StyledRightColumn>
    )
}

export default RightColumn