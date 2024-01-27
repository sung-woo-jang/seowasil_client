import Button from '@mui/material/Button';
import { Colors } from '@/styles/global-variables';
import Link from 'next/link';

function AuthButton() {
  return (
    <>
      <Link href={'/login'}>
        <Button variant="text" style={{ color: Colors.SonicSilver }}>
          로그인
        </Button>
      </Link>
      <Link href={'/signup'}>
        <Button variant="text" style={{ color: Colors.SonicSilver }}>
          회원가입
        </Button>
      </Link>
    </>
  );
}

export default AuthButton;
