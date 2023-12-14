import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { updateBillValue } from "../../features/billSlice";
import { updatePeopleValue } from "../../features/peopleSlice";
import { setValue } from "../../features/percentageSlice";

const StyledButton = styled.button`
  background-color: var(--very-dark-cyan);
  color: var(--white);
  width: 8.3rem;
  height: 3.3rem;
  font-size: 2rem;
  border-radius: 8px;
  border: none;
  &:hover {
    background-color: var(--app-bg-color);
  }
`;



function ResetButton() {
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(updateBillValue(""));
        dispatch(updatePeopleValue(""));
        dispatch(setValue(0));
        console.log("Hi I'm here")
      }
  return <StyledButton onClick={handleClick}>RESET</StyledButton>;
}

export default ResetButton;
