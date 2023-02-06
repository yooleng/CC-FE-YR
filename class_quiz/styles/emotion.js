import styled from "@emotion/styled";

export const Box = styled.div`
  position: relative;
  display: flex;
  width: 640px;
  height: 1138px;
  /* height: 1042px; */
  background: white;
  border: solid #dcdcdc;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 212px;
  height: 64px;
  margin-top: 150px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 58px;
  color: #000000;
`;

export const NoticeBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 500px;
  height: 50px;
  margin-top: 250px;
  margin-left: 45px;
`;

export const Notice = styled.div`
  display: flex;
  justify-content: center;
  width: 111px;
  height: 43px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 43px;
  color: #cacaca;
`;

export const Event = styled.div`
  display: flex;
  justify-content: center;
  width: 83px;
  height: 43px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 43px;
  color: #cacaca;
`;

export const FAQ = styled.div`
  display: flex;
  justify-content: center;
  width: 58px;
  height: 43px;
  border-bottom: 2px solid #ff1b6d;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 43px;
  color: #ff1b6d;
`;

export const QnA = styled.div`
  display: flex;
  justify-content: center;
  width: 65px;
  height: 43px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 43px;
  color: #cacaca;
`;

export const ContentsBox = styled.div`
  position: absolute;
  display: flex;
  /* align-items: flex-end; */
  margin-top: 347px;
  width: 640px;
  height: 791px;

  /* border: 1px solid yellow; */
`;

export const QuestionsListBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 640px;
  height: 635px;
  padding-top: 30px;
  padding-bottom: 30px;
  border-top: 1px solid #cacaca;

  /* border: 2px solid #ff1b6d; */
`;

export const QuestionsList = styled.div`
  display: flex;
  align-items: center;
  margin-left: 65px;
  width: 350px;
  height: 60px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: #000000;

  /* border: 1px solid orange; */
`;

export const BottomBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  align-items: flex-end;
  width: 640px;
  height: 96px;
  /* border: solid red; */
  border-top: 1px solid #dcdcdc;
  margin-top: 695px;
`;
