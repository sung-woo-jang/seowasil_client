'use client';
import Button from '@mui/material/Button';
import { Colors } from '@/styles/global-variables';
import Link from 'next/link';
import { useAppSelector } from '@/hooks/redux-hooks';
import { useLogoutMutate } from '@/api/auth/logout';

function AuthButton() {
  const isLogin = useAppSelector((state) => state.auth.isLogin);
  const { mutate } = useLogoutMutate();
  const isLogoutHandler = () => {
    if (isLogin) mutate();
  };

  return (
    <>
      <Link href={'/login'} onClick={isLogoutHandler}>
        <Button variant="text" style={{ color: Colors.SonicSilver }}>
          {isLogin ? '로그아웃' : '로그인'}
        </Button>
      </Link>
      {/* <Link href={'/signup'}>
        <Button variant="text" style={{ color: Colors.SonicSilver }}>
          회원가입
        </Button>
      </Link> */}
      {isLogin && (
        <Link href={'/products/add'}>
          <Button variant="text" style={{ color: Colors.SonicSilver }}>
            상품 등록
          </Button>
        </Link>
      )}
      {/* <Button
        variant="text"
        style={{ color: Colors.SonicSilver }}
        onClick={testButtonHandler}
      >
        테스트 버튼
      </Button> */}
    </>
  );
}

export default AuthButton;
