import styled from "styled-components";
import TipPercentageButton from "./LeftColumn/TipPercentageButton";
import InputBox from "./LeftColumn/InputBox";

const StyledLeftColumn = styled.div`
  border-radius: 8px;
  max-width: 50%;
  min-height: 100%;
  flex: 1;
`;

function LeftColumn (){
    return (
        <StyledLeftColumn>
            <InputBox/>
            <TipPercentageButton/>
        </StyledLeftColumn>
    )
}

export default LeftColumn