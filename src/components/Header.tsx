import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';

const style = {
  marginTop: '8px',
  marginBottom: '8px',
  marginLeft: ' 12px',
  marginRight: '12px',
};

export default function Header() {
  return (
    <React.Fragment>
      <div>
        <Link href="/products/new">상품 등록</Link>
      </div>
      <div>
        <Link href="/products">전체 상품 보기</Link>
      </div>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: `1px solid rgba(0, 0, 0, 0.12)` }}
      >
        <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
          {/* 유튜브 블로그 자리 */}
          <Button size="small">Subscribe</Button>
          <Button size="small">Subscribe</Button>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}
          >
            <Link href="/">서와실농원</Link>
          </Typography>
          <Link href="/login">
            <Button variant="outlined" style={style}>
              로그인 & 로그아웃
            </Button>
          </Link>
          <Link href="/signup">
            <Button variant="outlined" style={style}>
              회원가입
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
