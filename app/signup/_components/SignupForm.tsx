'use client';
import { useForm, SubmitHandler } from 'react-hook-form';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextInput from '../../../components/TextInput';
import { useSignupMutate } from '../../../api/auth/signup';
import AddressForm from './AddressForm';
import Link from 'next/link';

export interface SignupFormValues {
  username: string;
  password: string;
  passwordConfirm: string;
  account: string;
  phoneNumber: string;
  zoneCode: string;
  roadAddress: string;
  detailAddress: string;
}

function SignupForm() {
  const { handleSubmit, register, setValue } = useForm<SignupFormValues>();

  const { mutate: signupMutation } = useSignupMutate();

  const onSubmitHandler: SubmitHandler<SignupFormValues> = ({
    account,
    username,
    password,
    passwordConfirm,
    detailAddress,
    phoneNumber,
    roadAddress,
    zoneCode,
  }) => {
    if (/^(010|011|016|017|018|019)-\d{3,4}-\d{4}$/.test(phoneNumber)) {
      return console.error('전화번호 형식이 맞지 않습니다.');
    }

    if (account.trim().length === 0) {
      return console.error('아이디 입력해주세요.');
    }

    if (password !== passwordConfirm) {
      return console.error('비밀번호가 다릅니다');
    }

    // if (detailAddress.trim().length === 0) {
    //   return console.error('상세 주소를 입력해주세요');
    // }
    // if (zoneCode.trim().length === 0 || roadAddress.trim().length === 0) {
    //   return console.error('주소를 입력해주세요');
    // }
    signupMutation({
      account,
      username,
      password,
      passwordConfirm,
      detailAddress,
      phoneNumber,
      roadAddress,
      zoneCode,
    });
  };
  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmitHandler)}
      sx={{ mt: 3 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextInput
            type="text"
            label="이름"
            id="username"
            placeholder="홍길동"
            register={register('username')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextInput
            type="text"
            label="계정"
            id="account"
            placeholder="ex) - account"
            register={register('account')}
          />
        </Grid>
        <Grid item xs={4}>
          <TextInput
            label="비밀번호"
            type="password"
            id="password"
            placeholder="비밀번호"
            register={register('password')}
          />
        </Grid>
        <Grid item xs={4}>
          <TextInput
            label="비밀번호"
            type="password"
            id="passwordConfirm"
            placeholder="비밀번호 확인"
            register={register('passwordConfirm')}
          />
        </Grid>
        <Grid item xs={4}>
          <TextInput
            label="전화번호"
            type="text"
            id="phoneNumber"
            placeholder={`전화번호) - 제외 후 입력`}
            register={register('phoneNumber')}
          />
        </Grid>
        {/* <Grid item xs={2}>
          <AddressForm setFormValue={setValue} />
        </Grid> 
        <Grid item xs={2}>
          <TextInput
            disabled={true}
            label=""
            type="text"
            id="zoneCode"
            placeholder="우편번호"
            register={register('zoneCode')}
          />
        </Grid>
        <Grid item xs={4}>
          <TextInput
            disabled={true}
            label=""
            type="text"
            id="roadAddress"
            placeholder="주소"
            register={register('roadAddress')}
          />
        </Grid>
        <Grid item xs={4}>
          <TextInput
            label=""
            type="text"
            id="detailAddress"
            placeholder="상세 주소"
            register={register('detailAddress')}
          />
        </Grid>*/}
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        회원가입
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          이미 계정이 있으신가요? <Link href="/login">로그인</Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SignupForm;
