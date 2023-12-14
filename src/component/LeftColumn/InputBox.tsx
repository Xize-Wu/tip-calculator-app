import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { updateValue } from "../../features/billSlice";

const StyledInputComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: flex-start;
  position: relative;
`;

const StyledInput = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledSvg = styled.svg`
  position: relative;
  left: -25.5rem;
  top: 0.5rem;
  width: 1.2rem;
  height: 1.8rem;
  pointer-events: none;
`;

const StyledInputField = styled.input`
  background-color: var(--white);
  color: var(--very-dark-cyan);
  font-size: 2rem;
  border-radius: 8px;
  border: 3px solid var(--light-grayish-cyan);
  cursor: pointer;
  text-align: right;

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

const StyledTag = styled.div`
  color: var(--dark-grayish-cyan);
`;

function InputBox() {
  const dispatch = useDispatch();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(updateValue(parseFloat(event.target.value)))
  }
  
  return (
    <StyledInputComponent>
      <StyledTag>Bill</StyledTag>
      <StyledInput>
        <StyledInputField type="number" onChange={handleInputChange} />
        <StyledSvg xmlns="http://www.w3.org/2000/svg" width="11" height="17">
          <path
            fill="#9EBBBD"
            d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"
          />
        </StyledSvg>
      </StyledInput>
    </StyledInputComponent>
  );
}

export default InputBox;
