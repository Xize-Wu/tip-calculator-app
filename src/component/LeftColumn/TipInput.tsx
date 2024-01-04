import { styled } from "styled-components";

const StyledInput = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledInputField = styled.input`
  background-color: var(--white);
  color: var(--very-dark-cyan);
  font-size: 2rem;
  border-radius: 8px;
  border: 3px solid var(--light-grayish-cyan);
  cursor: pointer;
  text-align: right;

  width: 100%;
  height: 100%;

  -webkit-appearance: none;
  margin: 0;
  padding: 0;

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
  onClick: (num: number) => void;
}

function TipInput({ onClick }: TipInputProps) {
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputText = event.target.value;
    const inputValue = inputText === '' ? 0 : parseFloat(inputText) / 100;
    onClick(inputValue);
    }

  return (
    <StyledInput>
      <StyledInputField type="text" 
      placeholder="Custom"
      onChange={handleInputChange} />
    </StyledInput>
  );
}

export default TipInput;