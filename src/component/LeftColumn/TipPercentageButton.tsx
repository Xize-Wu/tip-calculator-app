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

interface TipPercentageButtonProps {
  rate: number;
  onClick:(num:number)=>void;
}

function TipPercentageButton ({rate, onClick}:TipPercentageButtonProps) {
  const handleClick = () => {
    onClick(rate);
    console.log("handle click triggered");
  };


  return <StyledButton onClick={handleClick}>{rate * 100}%</StyledButton>;
}

export default TipPercentageButton;
