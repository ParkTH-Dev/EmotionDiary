import React from "react";
import styled from "styled-components";
import { emotionList } from "../util";
import { theme } from "../styles/theme";

const Wrapper = styled.div``;

const Section = styled.div`
  width: 100%;
  margin-bottom: 100px;
  /* font-size: 30px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: bold;
`;
const Emotion = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  &.emotion_img_1 {
    background: #64c964;
  }
  &.emotion_img_2 {
    background: #9dd772;
  }
  &.emotion_img_3 {
    background: #fdce17;
  }
  &.emotion_img_4 {
    background: #fd8446;
  }
  &.emotion_img_5 {
    background: #fd565f;
  }
`;
const Img = styled.img``;
const Description = styled.div`
  color: #fff;
  font-size: 25px;
`;

const ContentBg = styled.div`
  width: 100%;
  background: ${theme.colors.background};
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
`;
const Content = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: ${theme.colors.paragraph};
  white-space: pre-wrap;
`;

const Viewer = ({ content, emotionId }) => {
  const { name, img } = emotionList.find((item) => item.id === emotionId);

  return (
    <Wrapper>
      <Section>
        <Title>오늘의 감정</Title>
        <Emotion className={`emotion_img_${emotionId}`}>
          <Img src={img} alt={name} />
          <Description>{name}</Description>
        </Emotion>
      </Section>
      <Section>
        <Title>오늘의 일기</Title>
        <ContentBg>
          <Content>{content}</Content>
        </ContentBg>
      </Section>
    </Wrapper>
  );
};

export default Viewer;
