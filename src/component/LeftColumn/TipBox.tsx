import { useState } from 'react';
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setValue } from "../../features/percentageSlice";

import TipButton from "./TipButton";
import TipInput from "./TipInput";

const tipPercentageArr: number[] = [0.05, 0.1, 0.15, 0.25, 0.5];

const StyledBox = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
`;
const StyledTag = styled.div`
  color: var(--dark-grayish-cyan);
  padding-bottom: 1rem;
`;

const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-template-rows: repeat(2, 1fr); 
  column-gap: 2.9rem;
  row-gap: 1rem;
`;

const StyledButton = styled(TipButton)`
  width: 100%; 
  height: 100%; 
`;

function TipBox() {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState<number>();

  const onClick = (num: number) => {
    dispatch(setValue(num));
    setClicked(num);
    console.log("handle click triggered");
    console.log(num)
  };


  return (
    <StyledBox>
      <StyledTag>Select Tip %</StyledTag>
      <StyledList>
        {tipPercentageArr.map((num) => (
          <StyledButton
            key={num}
            rate={num}
            onClick={() => onClick(num)}
            clicked={clicked === num}
          />
        ))}
        <TipInput onClick={onClick} />
      </StyledList>
    </StyledBox>
  );}

export default TipBox;
