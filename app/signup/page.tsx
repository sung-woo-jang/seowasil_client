import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import CommonContainer from '@/components/CommonContainer';
import SignupForm from './_components/SignupForm';

export default function Page() {
  return (
    <CommonContainer>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          회원가입
        </Typography>
      </Box>
      {/* 회원가입 입력 폼 컴포넌트 */}
      <SignupForm />
    </CommonContainer>
  );
}
