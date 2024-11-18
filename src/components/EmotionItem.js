import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

const EmotionContent = styled.div`
  cursor: pointer;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 24px;
  background: ${(props) =>
    props.$isSelected
      ? theme.colors.emotion[getEmotionType(props.id)]
      : theme.colors.surface};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;

  img {
    width: 60%;
    transition: all 0.3s ease;
  }

  span {
    font-size: 18px;
    font-weight: 600;
    color: ${theme.colors.text.primary};
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    background: ${(props) => theme.colors.emotion[getEmotionType(props.id)]};
  }
`;

const getEmotionType = (id) => {
  switch (id) {
    case 1:
      return "best";
    case 2:
      return "good";
    case 3:
      return "soso";
    case 4:
      return "bad";
    case 5:
      return "worst";
    default:
      return "soso";
  }
};

const EmotionItem = ({ id, name, img, isSelected, onClick }) => {
  const handleOnClick = () => {
    onClick(id);
  };
  return (
    <EmotionContent id={id} $isSelected={isSelected} onClick={handleOnClick}>
      <img src={img} alt={`emotion${id}`} />
      <span>{name}</span>
    </EmotionContent>
  );
};

export default React.memo(EmotionItem);
