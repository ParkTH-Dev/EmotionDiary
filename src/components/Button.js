import React from "react";
import styled from "styled-components";

const BtnItem = styled.button`
  font-family: "Pretendard", sans-serif;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  background: ${({ type }) =>
    type === "positive"
      ? "#4263eb"
      : type === "negative"
      ? "#e64980"
      : "#f1f3f5"};

  color: ${({ type }) =>
    type === "positive" || type === "negative" ? "#fff" : "#495057"};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const Button = ({ text, type, onClick }) => {
  return (
    <BtnItem type={type} onClick={onClick}>
      {text || "button"}
    </BtnItem>
  );
};

export default Button;
