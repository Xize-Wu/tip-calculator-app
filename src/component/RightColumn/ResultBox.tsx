import { styled } from "styled-components";
import { useSelector } from "react-redux";

import type { RootState } from "../../app/store";

const StyledResultBox = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
`;

const StyledTexts = styled.div``;
const StyledLabel = styled.div`
  color: var(--white);
  font-size: 1.3rem;
`;
const StyledUnit = styled.div`
  color: var(--strong-cyan);
`;

const StyledResult = styled.div`
  color: var(--white);
  font-size: 3rem;
`;
interface ResultBoxConfig {
  label: "Tip Amount" | "Total";
}
function ResultBox({ label }: ResultBoxConfig) {
  const percentage = useSelector((state: RootState) => state.percentage.value);
  const bill = useSelector((state: RootState) => state.bill.value);
  const people = useSelector((state: RootState) => state.people.value);

  const tipAmount = (bill * percentage) / people;

  const total = (bill * (1 + percentage)) / people;

  return (
    <StyledResultBox>
      <StyledTexts>
        <StyledLabel>{label}</StyledLabel>
        <StyledUnit>/ per person</StyledUnit>
      </StyledTexts>
      <StyledResult>
        {label === "Tip Amount"
          ? isNaN(tipAmount) || tipAmount === Infinity
            ? 0
            : Number(tipAmount.toFixed(2))
          : isNaN(total) || total === Infinity
          ? 0
          : Number(total.toFixed(2))}
      </StyledResult>
    </StyledResultBox>
  );
}

export default ResultBox;
