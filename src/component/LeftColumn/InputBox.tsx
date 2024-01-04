import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { updateBillValue } from "../../features/billSlice";
import { updatePeopleValue } from "../../features/peopleSlice";
import type { RootState } from "../../app/store";

const StyledInputComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: flex-start;
  position: relative;
  padding: 2rem;
`;

const StyledInput = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledSvg = styled.svg`
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 1.2rem;
  height: 1.8rem;
  pointer-events: none;
  z-index: 1;
`;

const StyledInputField = styled.input`
  width: 100%;
  background-color: var(--white);
  color: var(--very-dark-cyan);
  font-size: 2rem;
  border-radius: 8px;
  border: 3px solid var(--light-grayish-cyan);
  cursor: pointer;
  text-align: right;

  -webkit-appearance: none;
  margin: 0;

  &:hover {
    border-color: var(--strong-cyan);
    outline: none;
    caret-color: transparent;
  }

  &:focus {
    border-color: var(--strong-cyan);
    outline: none;
    caret-color: transparent;
  }

  -moz-appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const StyledTag = styled.div`
  color: var(--dark-grayish-cyan);
  padding-left: 1.25rem;
  padding-bottom: 0.35rem;
`;

interface InputBoxProps {
  tag: "Bill" | "People";
  svg: string;
}

function InputBox({ tag, svg }: InputBoxProps) {
  const dispatch = useDispatch();
  const bill = useSelector((state: RootState) => state.bill.value);
  const people = useSelector((state: RootState) => state.people.value);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    tag === "Bill"
      ? dispatch(updateBillValue(parseFloat(event.target.value)))
      : dispatch(updatePeopleValue(parseInt(event.target.value)));
  }

  return (
    <StyledInputComponent>
      <StyledSvg xmlns="http://www.w3.org/2000/svg" width="11" height="17">
        <path fill="#9EBBBD" d={svg} />
      </StyledSvg>
      <StyledTag>{tag}</StyledTag>
      <StyledInput>
        <StyledInputField
          type="number"
          placeholder="0"
          value={tag === "Bill" ? bill : people}
          onChange={handleInputChange}
        />
      </StyledInput>
    </StyledInputComponent>
  );
}

export default InputBox;
