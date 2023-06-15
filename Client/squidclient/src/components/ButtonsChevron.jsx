import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const ButtonsChevron = ({ handleLeftClick, handleRightClick }) => {
  return (
    <ButtonContainer>
      <Button onClick={handleLeftClick}>
        <AiOutlineLeft />
      </Button>
      <Button onClick={handleRightClick}>
        <AiOutlineRight />
      </Button>
    </ButtonContainer>
  );
};

export default ButtonsChevron;

const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5em;
  padding-bottom: 0.3em;
  margin: 0 3em;
  margin-bottom: 1em;
  font-size: 1.9em;
  cursor: pointer;
  outline: none;

  :hover {
    background-color: #fff;
    color: #0b2447;
  }
`;
