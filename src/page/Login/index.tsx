import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import InputField from '../../components/InputField';

const Login = () => {
    return (
        <Container component="main" maxWidth="xs" fixed>
            <Box
                sx={{
                    mt: 12,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ bgcolor: 'secondary.main', m: 1 }}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    로그인
                </Typography>
                <InputField text="아이디" />
                <InputField text="비밀번호" isType="password" />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    로그인
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link to="/">비밀번호 찾기</Link>
                    </Grid>
                    <Grid item>
                        <Link to="/signup">회원가입</Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Login;
