import { styled } from "styled-components";

const StyledButton = styled.button`
  background-color: var(--very-dark-cyan);
  color: var(--white);
  min-width: 8.3rem;
  min-height: 3.3rem;
  font-size: 2rem;
  border-radius: 8px;
  border: none;
`;
function TipPercentageButton() {
  return <StyledButton>5%</StyledButton>;
}

export default TipPercentageButton;
