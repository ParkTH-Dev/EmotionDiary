// 해당 util.js 파일은 컴포넌트가 아니고 자바스크립트의 모듈을 활용해서 필요할때마다 쓸 수 있는 함수 컨테이너(*그래서 파일명이 대문자로 시작안함)
import emotion1 from "./emotion/emotion1.png";
import emotion2 from "./emotion/emotion2.png";
import emotion3 from "./emotion/emotion3.png";
import emotion4 from "./emotion/emotion4.png";
import emotion5 from "./emotion/emotion5.png";

export const getEmotionImgById = (emotionId) => {
  const targetEmotionId = String(emotionId);
  switch (targetEmotionId) {
    case "1":
      return emotion1;
    case "2":
      return emotion2;
    case "3":
      return emotion3;
    case "4":
      return emotion4;
    case "5":
      return emotion5;
    default:
      return null;
  }
};

export const getFormattedDate = (targetDate) => {
  const year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;

  return `${year}-${month}-${date}`;
};

export const emotionList = [
  {
    id: 1,
    name: "완전좋음",
    img: getEmotionImgById(1),
  },
  {
    id: 2,
    name: "좋음",
    img: getEmotionImgById(2),
  },
  {
    id: 3,
    name: "그럭저럭",
    img: getEmotionImgById(3),
  },
  {
    id: 4,
    name: "나쁨",
    img: getEmotionImgById(4),
  },
  {
    id: 5,
    name: "최악",
    img: getEmotionImgById(5),
  },
];

export const getMonthRangeByDate = (date) => {
  const beginTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();
  const endTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();
  return { beginTimeStamp, endTimeStamp };
};

export const setPageTitle = (title) => {
  const titleElement = document.getElementsByTagName("title")[0];
  titleElement.innerText = title;
};

export const travelList = [
  {
    id: 1,
    name: "관광명소",
    img: "/assets/travel/tourist.png",
  },
  {
    id: 2,
    name: "맛집",
    img: "/assets/travel/food.png",
  },
  {
    id: 3,
    name: "숙소",
    img: "/assets/travel/hotel.png",
  },
  {
    id: 4,
    name: "쇼핑",
    img: "/assets/travel/shopping.png",
  },
  {
    id: 5,
    name: "교통",
    img: "/assets/travel/transport.png",
  },
];
