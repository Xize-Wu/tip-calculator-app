import { styled } from "styled-components";

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

interface TipInputProps {
  onClick: (num: number) => void
}

function TipInput({onClick}:TipInputProps) {

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    onClick(parseFloat(event.target.value)/100)
  }

  return (
      <StyledInput>
        <StyledInputField type="number" onChange={handleInputChange}/>
      </StyledInput>
  );
}

export default TipInput;