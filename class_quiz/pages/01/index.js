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
  TitleBox,
  UserID,
  UserProfile,
  UserPicture,
  SearchIcon,
  ToggleBox,
} from "@/styles/emotion";

export default function EatsRoadPage() {
  return (
    <div>
      <Box>
        <SearchIcon>
          <img src="/search.png" />
        </SearchIcon>
        <TitleBox>
          <Title>마이</Title>
          <UserProfile>
            <UserPicture>
              <img src="/picture.png" />
            </UserPicture>
            <UserID>임정아</UserID>
            <img src="/arrow.png" />
          </UserProfile>
        </TitleBox>
        <NoticeBox>
          <Notice>공지사항</Notice>
          <Event>이벤트</Event>
          <FAQ>FAQ</FAQ>
          <QnA>Q&A</QnA>
        </NoticeBox>
        <ContentsBox>
          <QuestionsListBox>
            <QuestionsList>
              <p>리뷰 작성은 어떻게 하나요?</p>
              <ToggleBox>
                <img src="/toggle.png" />
              </ToggleBox>
            </QuestionsList>
            <QuestionsList>
              <p>리뷰 수정/삭제는 어떻게 하나요?</p>
              <ToggleBox>
                <img src="/toggle.png" />
              </ToggleBox>
            </QuestionsList>
            <QuestionsList>
              <p>아이디/비밀번호를 잊어버렸어요</p>
              <ToggleBox>
                <img src="/toggle.png" />
              </ToggleBox>
            </QuestionsList>
            <QuestionsList>
              <p>회원탈퇴를 하고싶어요.</p>
              <ToggleBox>
                <img src="/toggle.png" />
              </ToggleBox>
            </QuestionsList>
            <QuestionsList>
              <p>출발지 설정은 어떻게 하나요?</p>
              <ToggleBox>
                <img src="/toggle.png" />
              </ToggleBox>
            </QuestionsList>
            <QuestionsList>
              <p>비밀번호를 변경하고 싶어요</p>
              <ToggleBox>
                <img src="/toggle.png" />
              </ToggleBox>
            </QuestionsList>
          </QuestionsListBox>
          <BottomBox></BottomBox>
        </ContentsBox>
      </Box>
    </div>
  );
}
