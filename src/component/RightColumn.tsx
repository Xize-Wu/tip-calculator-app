import styled from "styled-components";

const StyledRightColumn = styled.div`
  border-radius: 8px;
  background-color: var(--very-dark-cyan); 
  max-width: 50%;
  min-height: 100%;
  flex: 1;
`;

function RightColumn (){
    return (
        <StyledRightColumn>
            This is your styled right column
        </StyledRightColumn>
    )
}

export default RightColumn