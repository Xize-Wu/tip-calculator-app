import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setValue } from "../../features/percentageSlice";

import TipButton from "./TipButton";
import TipInput from "./TipInput";

const tipPercentageArr: number[] = [0.05, 0.1, 0.15, 0.25, 0.5];

const StyledBox = styled.div``;
const StyledTag = styled.div`
  color: var(--dark-grayish-cyan);
`;

const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0rem;
  row-gap: 0.2rem;
`;

function TipBox() {
  const dispatch = useDispatch();

  const onClick = (num: number) => {
    dispatch(setValue(num));
    console.log("handle click triggered");
  };

  return (
    <StyledBox>
      <StyledTag>Select Tip %</StyledTag>
      <StyledList>
        {tipPercentageArr.map((num) => {
          return (
            <TipButton key={num} rate={num} onClick={() => onClick(num)} />
          );
        })}
        <TipInput onClick={onClick} />
      </StyledList>
    </StyledBox>
  );
}

export default TipBox;
