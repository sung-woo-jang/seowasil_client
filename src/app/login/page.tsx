import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <div>로그인</div>
      <div>
        <div>이메일</div>
        <input type="email" />
      </div>
      <div>
        <div>비밀번호</div>
        <input type="password" />
      </div>
      <p>
        아직 회원이 아니신가요? <Link href="/signup">회원가입</Link>
      </p>
      <button>로그인</button>
    </div>
  );
}
