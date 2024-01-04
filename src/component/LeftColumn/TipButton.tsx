import { styled } from "styled-components";

const StyledButton = styled.button`
  color: var(--white);
  font-size: 2rem;
  border-radius: 8px;
  border: none;
  background-color:var(--very-dark-cyan);


  &:active {
    background-color: var(--strong-cyan);
  }

  &:hover {
    cursor: pointer; 
  }

`;

interface TipButtonProps {
  rate: number;
  onClick:(num:number)=>void;
  clicked:boolean;
}

function TipButton ({rate, onClick, clicked}:TipButtonProps) {
  const handleClick = () => {
    onClick(rate);
    console.log("handle click triggered");
  };


  return <StyledButton onClick={handleClick}>{rate * 100}%</StyledButton>;
}

export default TipButton;
