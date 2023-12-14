import { styled } from "styled-components";
import { useDispatch } from "react-redux";

const StyledInput = styled.div`
width: 8.3rem;
height: 3.3rem;
`;

const StyledInputField = styled.input`
  background-color: var(--white);
  color: var(--very-dark-cyan);
  font-size: 2rem;
  border-radius: 8px;
  border: 3px solid var(--light-grayish-cyan);
  cursor: pointer;
  text-align: right;

  width: 7.9rem;
height: 2.9rem;


  -webkit-appearance: none;
  margin: 0;

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

function TipInput() {
  const dispatch = useDispatch();

//   function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
//     tag === "Bill"
//       ? dispatch(updateBillValue(parseFloat(event.target.value)))
//       : dispatch(updatePeopleValue(parseInt(event.target.value)));
//   }

  return (
      <StyledInput>
        <StyledInputField type="number" />
      </StyledInput>
  );
}

export default TipInput;