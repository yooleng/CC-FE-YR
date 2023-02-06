import { Email, EmailInput } from "../../styles/emotion";

export default function EmotionPage() {
  return (
    <div>
      <Email>이메일</Email>
      <EmailInput type="text" />
      <button>클릭하세요</button>
      <img src="/vercel.svg" />
    </div>
  );
}
