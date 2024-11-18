import React from "react";
import { useNavigate } from "react-router-dom";
import { getEmotionImgById } from "../util";
import styled from "styled-components";
import Button from "./Button";
import { theme } from "../styles/theme";

const Wrapper = styled.div`
  background: ${theme.colors.surface};
  border-radius: 24px;
  padding: 32px;
  margin: 24px 0;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 24px;
  align-items: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
    background: ${theme.colors.primary}10;
  }
`;

const DiaryContent = styled.div``;

const ImgBg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &.img_section_1 {
    background: ${theme.colors.emotion.best};
  }
  &.img_section_2 {
    background: ${theme.colors.emotion.good};
  }
  &.img_section_3 {
    background: ${theme.colors.emotion.soso};
  }
  &.img_section_4 {
    background: ${theme.colors.emotion.bad};
  }
  &.img_section_5 {
    background: ${theme.colors.emotion.worst};
  }
`;
const Img = styled.img`
  width: 50%;
`;

const InfoSection = styled.div`
  flex: 1;
  cursor: pointer;
`;
const ButtonSection = styled.div`
  /* max-width: 70px; */
  /* border: 1px solid #f00; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  & button {
    font-size: 24px;
    /* width: 100%; */
  }
`;

const DateItem = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const ContentItem = styled.div`
  font-size: 20px;
`;

const DiaryItem = ({ id, date, content, emotionId }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`./diary/${id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  return (
    <Wrapper>
      <DiaryContent>
        <ImgBg onClick={goDetail} className={`img_section_${emotionId}`}>
          <Img src={getEmotionImgById(emotionId)} />
        </ImgBg>
      </DiaryContent>
      <InfoSection>
        <DateItem>{new Date(parseInt(date)).toLocaleDateString()}</DateItem>
        <ContentItem>{content.slice(0, 25)}</ContentItem>
      </InfoSection>
      <ButtonSection>
        <Button text={"수정하기"} onClick={goEdit} type={"positive"} />
        {/* <Button text={"삭제하기"} onClick={} type={"negative"} /> */}
      </ButtonSection>
    </Wrapper>
  );
};

export default React.memo(DiaryItem);
