import {
  Box,
  BottomBox,
  Title,
  Notice,
  NoticeBox,
  Event,
  FAQ,
  QnA,
  ContentsBox,
  QuestionsList,
  QuestionsListBox,
} from "@/styles/emotion";

export default function EatsRoadPage() {
  return (
    <div>
      <Box>
        <Title>마이</Title>
        <NoticeBox>
          <Notice>공지사항</Notice>
          <Event>이벤트</Event>
          <FAQ>FAQ</FAQ>
          <QnA>Q&A</QnA>
        </NoticeBox>
        <ContentsBox>
          <QuestionsListBox>
            <QuestionsList>리뷰 작성은 어떻게 하나요?</QuestionsList>
            <QuestionsList>리뷰 수정/삭제는 어떻게 하나요?</QuestionsList>
            <QuestionsList>아이디/비밀번호를 잊어버렸어요</QuestionsList>
            <QuestionsList>회원탈퇴를 하고싶어요.</QuestionsList>
            <QuestionsList>출발지 설정은 어떻게 하나요?</QuestionsList>
            <QuestionsList>비밀번호를 변경하고 싶어요</QuestionsList>
          </QuestionsListBox>
          <BottomBox></BottomBox>
        </ContentsBox>
      </Box>
    </div>
  );
}
