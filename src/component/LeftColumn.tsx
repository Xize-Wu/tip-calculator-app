import styled from "styled-components";
import { useDispatch } from "react-redux";

import TipPercentageButton from "./LeftColumn/TipPercentageButton";
import InputBox from "./LeftColumn/InputBox";
import { setValue } from "../features/percentageSlice";

const StyledLeftColumn = styled.div`
  border-radius: 8px;
  max-width: 50%;
  min-height: 100%;
  flex: 1;
`;

const tipPercentageArr: number[] = [0.05, 0.1, 0.15, 0.25, 0.5];

function LeftColumn() {
  const dispatch = useDispatch();

  const onClick = (num: number) => {
    dispatch(setValue(num));
    console.log("handle click triggered");
  };
  
  return (
    <StyledLeftColumn>
      <InputBox />
      {tipPercentageArr.map((num) => {
        return (
          <TipPercentageButton
            key={num}
            rate={num}
            onClick={() => onClick(num)}
          />
        );
      })}
    </StyledLeftColumn>
  );
}

export default LeftColumn;
