import styled from "styled-components";

const StyledLeftColumn = styled.div`
  border-radius: 8px;
  background-color: red; 
  max-width: 50%;
  min-height: 100%;
  flex: 1;
`;

function LeftColumn (){
    return (
        <StyledLeftColumn>
            This is your styled left column
        </StyledLeftColumn>
    )
}

export default LeftColumn