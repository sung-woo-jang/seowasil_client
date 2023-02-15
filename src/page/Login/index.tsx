import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store';
import { asyncLoginFetch } from '../../store/slice/authSlice';
import { Actions, Control, Section } from './style';

const Login = () => {
    const dispatch = useDispatch<AppDispatch>();
    const accountRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const { isLogin } = useSelector((state: RootState) => state.auth);

    const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const account = accountRef.current?.value;
        const password = passwordRef.current?.value;
        dispatch(asyncLoginFetch({ account, password }));
    };

    useEffect(() => {
        if (isLogin) {
            navigate('/', { replace: true });
        }
    }, [isLogin, navigate]);

    return (
        <Section>
            <form onSubmit={formSubmitHandler}>
                <Control>
                    <label htmlFor="account">계정</label>
                    <input type="text" id="account" ref={accountRef} required />
                </Control>
                <Control>
                    <label htmlFor="password">비밀번호</label>
                    <input type="password" id="password" ref={passwordRef} required />
                </Control>
                <Actions>
                    <button type="submit">로그인</button>
                </Actions>
            </form>
        </Section>
    );
};

export default Login;
