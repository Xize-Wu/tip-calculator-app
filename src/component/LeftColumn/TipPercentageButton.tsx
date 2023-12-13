import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { decrement } from "../../features/counterSlice";

const StyledButton = styled.button`
  background-color: var(--very-dark-cyan);
  color: var(--white);
  min-width: 8.3rem;
  min-height: 3.3rem;
  font-size: 2rem;
  border-radius: 8px;
  border: none;
`;


function TipPercentageButton () {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(decrement());
    console.log("handle click triggered")
  };

  return <StyledButton onClick={handleClick}>5%</StyledButton>;
}

export default TipPercentageButton;
