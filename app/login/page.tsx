'use client';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useForm, SubmitHandler } from 'react-hook-form';
import CommonContainer from '@/components/CommonContainer';
import TextInput from '@/components/TextInput';
import { useLoginMutate } from '@/api/auth/login';
import { Colors } from '@/styles/global-variables';
import Link from 'next/link';

interface LoginFormValues {
  password: string;
  account: string;
}

export default function Page() {
  const methods = useForm<LoginFormValues>();
  const { handleSubmit, register } = methods;

  const { mutate: loginMutate } = useLoginMutate();
  const onSubmitHandler: SubmitHandler<LoginFormValues> = (data) => {
    loginMutate(data);
  };

  return (
    <CommonContainer>
      <CssBaseline />
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmitHandler)}
        noValidate
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
          로그인
        </Typography>

        <TextInput
          register={register('account')}
          type="text"
          label="계정(이메일)"
          id="account"
          placeholder="계정(이메일)"
        />

        <TextInput
          register={register('password')}
          label="비밀번호"
          placeholder="비밀번호"
          id="password"
          type="password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          style={{
            background: Colors.Gray1,
            border: `1px solid ${Colors.EerieBlack}`,
            color: 'white',
          }}
          sx={{
            mt: 3,
            mb: 2,
          }}
        >
          로그인
        </Button>

        <Grid container>
          <Grid item xs />
          <Grid item>
            <p>
              아직 회원이 아니신가요? <Link href="/signup">회원가입</Link>
            </p>
          </Grid>
        </Grid>
      </Box>
    </CommonContainer>
  );
}
