import { styled } from "styled-components";

const StyledButton = styled.button`
  background-color: var(--very-dark-cyan);
  color: var(--white);
  width: 8.3rem;
  height: 3.3rem;
  font-size: 2rem;
  border-radius: 8px;
  border: none;
`;

interface TipButtonProps {
  rate: number;
  onClick:(num:number)=>void;
}

function TipButton ({rate, onClick}:TipButtonProps) {
  const handleClick = () => {
    onClick(rate);
    console.log("handle click triggered");
  };


  return <StyledButton onClick={handleClick}>{rate * 100}%</StyledButton>;
}

export default TipButton;
