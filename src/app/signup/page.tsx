import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <div>회원가입</div>
      <div>
        <div>이름</div>
        <input type="text" placeholder="이름" />
      </div>
      <div>
        <div>이메일</div>
        <input type="email" placeholder="이메일" />
      </div>
      <div>
        <div>비밀번호</div>
        <input type="password" placeholder="비밀번호" />
      </div>
      <div>
        <div>비밀번호</div>
        <input type="password" placeholder="비밀번호 확인" />
      </div>
      <button>회원가입</button>
      <p>
        이미 계정이 있으신가요? <Link href="/login">로그인</Link>
      </p>
    </div>
  );
}
